function actionsStudentsDescop() {
  
  return /*HTML*/ `
        <table class="table-grid">
            <tr class="tr-grid">
            <th id="emptyOverhead"> </th>
                <th>Kontaktinfo</th>
                <th>Hendelser</th>
                <th> </th>
            </tr>
            ${searchBarView()}
            ${searchFilters()}
            ${getStudentActionRows()}

        </table>
        
    `;
}

function getStudentActionRows() {
  let html = "";
  const students = model.data.students;
  const userInput = model.inputs.databasePage.search;
  const actions = model.data.studentActions;
  // const studentStatus = model.data.studentActions.studentStatus;
  // const statusText = model.data.statusText;
  /* let toggleList = userInput == "" ? students : model.inputs.databasePage.selectedCourse; */
  let toggleList = userInput == "" ? students : model.inputs.databasePage.filteredList;
  console.log(toggleList)

  for (let i = 0; i < toggleList.length; i++) {
    let tempStatusStorage = '';
    let staText = '';
    const student = toggleList[i];
    const action = actions[i];
    const status = actions[i].studentStatus;
    staText = model.data.courseStatusText[status].text;
    tempStatusStorage = staText;
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
                    Siste Hendelse: ${action.activeCourse} ${tempStatusStorage}<br>
                    
                     ${
                       student.showingFullInfo
                       
                         ? `Har gått: ${action.coursesDone}<br>
                         <br>
                    Betalt: ${action.paymentDone}<br>
                    Skylder: ${action.owes}<br>`
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

