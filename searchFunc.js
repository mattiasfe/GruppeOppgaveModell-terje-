//navnefilter

function searchBarView() {
  
  return /*HTML*/ `
    <input type="text" value="${model.inputs.databasePage.search}" placeholder="Søk i database" onchange="handleInput(this.value)">
    `;
}

function handleInput(input){
  model.inputs.databasePage.search = input;
    searchInArray(input);
}

function searchInArray(searchTerm){
  let filteredList = model.data.students.filter((students) => {
    let name = students.name.toLowerCase();
    if(name.includes(searchTerm.toLowerCase())){
        return students;
    }
})
  model.inputs.databasePage.filteredList = filteredList;
  updateView();
}


// Kursfilter
function courseFilters() {
  let html = '';
  let checknumcourse = -1;
  for(const courseTextInf of model.data.CheckBoxCourse) {
    checknumcourse++
    html += /*HTML*/`
      <div class="filterContainer">
      <div class="subfilter-cont">
        <input type="checkbox" id="coursecheck${checknumcourse}" name="coursecheck${checknumcourse}" value="${courseTextInf.name}" onchange="handleCheck(${courseTextInf.id}, this)" ${model.data.CheckBoxCourse[checknumcourse].checked ? `checked` : ''}>
        <label for="coursecheck${checknumcourse}">${courseTextInf.name}</label><br>
      </div>
      </div>
    `;
  }
    return html
}

function handleCheck (crs, inp) {
if (inp.checked == true) {
  model.data.CheckBoxCourse[crs].checked = true;
  model.inputs.databasePage.selectedCourse = crs;
  checkFilter(crs, inp);
} else {
  model.data.CheckBoxCourse[crs].checked = false;
  model.inputs.databasePage.selectedCourse = '';
  model.inputs.databasePage.electedHorse = [];
  updateView();
}
}
   
function checkFilter(tempNumCourse, input) {
  
  for (i = 0; i < model.data.students.length; i++) {
    if (model.data.students[i].activeCourse == tempNumCourse) {
      model.inputs.databasePage.electedHorse.push(model.data.students[i]);
    };
  }
      let result = model.data.students.filter((students) => students.activeCourse == tempNumCourse);
      model.inputs.databasePage.filteredList = model.inputs.databasePage.electedHorse;
      console.log(result);
      updateView();
  }


  
//Status filter
function statusFilterView() {
  let html = '';
  let checknumstatus = -1;
  for(const statusTextInf of model.data.CheckBoxStatus) {
    checknumstatus++
    html += /*HTML*/`
      <div class="filterContainer">
      <div class="subfilter-cont">
        <input type="checkbox" id="statuscheck${checknumstatus}" name="statuscheck${checknumstatus}" value="${statusTextInf.name}" onchange="handleStatus(${statusTextInf.id}, this)" ${model.data.CheckBoxStatus[checknumstatus].checked ? `checked` : ''}>
        <label for="statuscheck${checknumstatus}">${statusTextInf.name}</label><br>
      </div>
      </div>
    `;
  }
    return html
}

function handleStatus (sts, sinp) {
if (sinp.checked == true) {
  model.data.CheckBoxStatus[sts].checked = true;
  model.inputs.databasePage.selectedStatus = sts;
  statusFilter(sts, sinp);
} else {
  model.data.CheckBoxStatus[sts].checked = false;
  model.inputs.databasePage.selectedStatus = '';
  model.inputs.databasePage.electedHorse = [];
  updateView();
}
}
   
function statusFilter(tempNumStatus, input) {
  
  for (i = 0; i < model.data.students.length; i++) {
    if (model.data.students[i].studentStatus == tempNumStatus) {
      model.inputs.databasePage.electedHorse.push(model.data.students[i]);
    };
  }
      let result = model.data.students.filter((students) => students.studentStatus == tempNumStatus);
      model.inputs.databasePage.filteredList = model.inputs.databasePage.electedHorse;
      console.log(result);
      updateView();
  }


function checkedCategory(activeCourse) {
  if (activeCourse == 'All Courses') {
    model.data.CheckBoxCourse = '';
    }else {
      model.data.CheckBoxCourse = activeCourse;
    }
    actionsStudentsDisplay();
  }

  
  //Dato filter
  function courseDateFilters() {
    let html = '';
    for(const date of model.inputs.date) {
      html += /*HTML*/`
        <div class="filterContainer">
        <div class="subfilter-cont">
        <label for="courseDate">${date.name}</label><br>
          <input type="date" id="courseDate" name="courseDate">
        </div>
        </div>
      `;
    }
      return html
  }