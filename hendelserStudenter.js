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
        ${courseFilters()}
        ${getStudentActionRows()}
      </tbody>
    </table>
  `;
}

function getStudentActionRows() {
  let html = "";
  const students = model.data.students;
  const userInput = model.inputs.databasePage.search;
  /* const actions = model.data.students.studentAction; */
/*   const courselist = getList(); */
  // const studentStatus = model.data.studentActions.studentStatus;
  // const statusText = model.data.statusText;
  /* let toggleList = userInput == "" ? students : model.inputs.databasePage.selectedCourse; */
  let toggleList = userInput == "" ? students : model.inputs.databasePage.filteredList;
/*   let toggleList = model.inputs.databasePage.filteredList; */
/*   console.log(toggleList) */

  for (let i = 0; i < toggleList.length; i++) {
    let tempStatusStorage = '';
    let tempCourseStorage = '';
    let staText = '';
    let couText = '';
    const student = toggleList[i];
    /* const action = actions[i]; */
    const status = students[i].studentStatus;
    const course = students[i].activeCourse
    staText = model.data.courseStatusText[status].text;
    couText = model.data.CheckBoxCourse[course].name;
    tempStatusStorage = staText;
    tempCourseStorage = couText;
    html += /*HTML*/ `
    
            <tr class="tr-grid">
              <td class="infotd">
                
                  <button id="infobtn" onclick="getFullStudentInfo(${student.id})">Info</button>
              </td>
                <td>
                    Navn: ${student.name}<br>
                    F.dato: ${student.dob}<br>
                           
                    ${
                      student.showingFullInfo
                        ? `Email: ${student.email}<br>
                    Tlf: ${student.tlf}<br>
                    Discord: ${student.discord}<br>`
                        : ``
                    }
                </td>
                <td>
                    Siste Hendelse: ${tempCourseStorage} ${tempStatusStorage}<br>
                    
                     ${
                       student.showingFullInfo
                       
                         ? `Har gått: ${student.coursesDone}<br>
                         <br>
                    Betalt: ${student.paymentDone}<br>
                    Skylder: ${student.owes}<br>`
                    : ``
                    
                }
                <td>
                    <input type="checkbox" id="editCheckbox" onclick="isCheckboxChecked()">
                </td>
            </tr>
  
        `;
  }
  return html;
}


function getFullStudentInfo(ident) {
  const student = model.data.students[ident - 1];
  student.showingFullInfo = !student.showingFullInfo;
  updateView();
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

