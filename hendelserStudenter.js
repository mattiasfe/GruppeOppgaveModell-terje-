function actionsStudentsDisplay() {
  return /*HTML*/ `
    <table class="table-grid">
      <tbody>
          ${searchBarView()}
        <td>
          ${courseFilters()}
        </td>
        <td>
          ${statusFilterView()}
        </td>
        <td>
          ${courseDateFilters()}
        </td>
      </tbody>
      <thead>
        <tr class="tr-grid">
          <th id="emptyOverhead"></th>
          <th>Kontaktinfo</th>
          <th>Hendelser</th>
          <th></th>
        </tr>
        ${getStudentActionRows()}
      </thead>
    </table>
  `;
}

function getStudentActionRows() {
  let html = "";
  let toglength = 0;
  const students = model.data.students;
  const userInput = model.inputs.databasePage.search || model.inputs.databasePage.electedHorse;
  let toggleList = userInput == "" ? students : model.inputs.databasePage.filteredList;
  for (let i = 0; i < toggleList.length; i++) {
    let staText = '';
    let couText = '';
    let tempStatusStorage = '';
    let tempCourseStorage = '';
    const student = toggleList[i];
    let idstorage = toggleList[i].id;
    const course = students[idstorage].activeCourse;
    const status = students[idstorage].studentStatus;
    staText = model.data.courseStatusText[status].text;
    couText = model.data.CheckBoxCourse[course].name;
    tempStatusStorage = staText;
    tempCourseStorage = couText;
    html += /*HTML*/ `
    
            <tr class="tr-grid" id="">
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
  const student = model.data.students[ident];
  student.showingFullInfo = !student.showingFullInfo;
  updateView();
}


