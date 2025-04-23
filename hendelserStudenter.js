function actionsStudentsDisplay() {
  return /*HTML*/ `
    <table class="table-grid">
      <thead>
        <tr class="tr-grid">
          <th id="emptyOverhead"></th>
          <th>Kontaktinfo</th>
          <th>Hendelser</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${searchBarView()}
        ${searchFilters()}
        ${getStudentActionRows()}
      </tbody>
    </table>
  `;
}

function getStudentActionRows() {
  let html = "";
  const { students, studentActions } = model.data;
  const { search, filteredList } = model.inputs.databasePage;
  

  const displayList = search ? (filteredList || []) : students;
  
  
  if (search && (!filteredList || filteredList.length === 0)) {
    html += `<tr><td colspan="4">Ingen studenter funnet</td></tr>`;
    return html;
  }

  displayList.forEach((student, index) => {
    const action = studentActions[index];
    if (!action) return; 
    
    const statusText = model.data.courseStatusText[action.studentStatus]?.text || '';
    
    html += /*HTML*/ `
      <tr class="tr-grid">
        <td class="infotd">
          <button id="infobtn" onclick="getFullStudentInfo(${student.id})">
            ${student.showingFullInfo ? 'Skjul' : 'Info'}
          </button>
        </td>
        <td>
          Navn: ${student.name}<br>
          F.dato: ${student.dob}<br>
          ${student.showingFullInfo ? `
            Email: ${student.email}<br>
            Tlf: ${student.tlf}<br>
            Discord: ${student.discord}<br>
          ` : ''}
        </td>
        <td>
          Siste Hendelse: ${action.activeCourse} ${statusText}<br>
          ${student.showingFullInfo ? `
            Har gått: ${action.coursesDone}<br><br>
            Betalt: ${action.paymentDone}<br>
            Skylder: ${action.owes}<br>
          ` : ''}
        </td>
        <td>
          <input type="checkbox" onclick="isCheckboxChecked(${student.id})">
        </td>
      </tr>
    `;
  });

  return html;
}

function getFullStudentInfo(id) {
  const student = model.data.students.find(s => s.id === id);
  if (student) {
    student.showingFullInfo = !student.showingFullInfo;
    updateView();
  }
}
//fullfør funksjonen og send til array
/* function isCheckboxChecked(value, id) {
  const bulkSelectedCourses = CheckBoxCourse.filter(course => {
    if (course.checked === true) {
      course.textContent = course.id;
      course.onclick = null; 
      return course.id;
    }
    return false;
  });
  return bulkSelectedCourses;
} */

//test

