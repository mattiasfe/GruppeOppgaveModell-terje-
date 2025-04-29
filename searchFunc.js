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
}s


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
  // model.data.databasePage.filteredList = model.inputs.databasePage.electedHorse
/*
  - Sjekke gjennom CheckBoxCourse - check
  - Om sant, pushe inn? electedHorse - check (?)
  - 
*/

/*
  - Checkboxer
    - Om en av de er checked, filtrer utifra om de har det "active" kurset
  - Toggle (ta av checked og updateView på nytt)
*/






function checkedCategory(activeCourse) {
  if (activeCourse == 'All Courses') {
    model.data.CheckBoxCourse = '';
    }else {
      model.data.CheckBoxCourse = activeCourse;
    }
    actionsStudentsDisplay();
  }
  
  //FÅ ALT DETTE HER OG NEDOVER TIL Å FUNKE!!
  /* function checkedInputs(input) {
    model.inputs.databasePage.bulkSelectedCourse = input.value;
    searchInArrayChecked(input);
  }
  
  function searchInArrayChecked(checkedTerm) {
    
  const searchTerm = checkedTerm.toLowerCase().trim();
  
  let selectedCourse = model.data.studentActions.filter((studentAction) => {
    if (!studentAction.activeCourse) return false;
    const [courseName] = studentAction.activeCourse.split(' ');
    return courseName.toLowerCase() === searchTerm;
  });
  
  model.inputs.databasePage.selectedCourse = selectedCourse;
  console.log(selectedCourse);
  updateView();
} */




/* function checkCourseFunc(element) {
  
if (element.checked == true){
  let tempElementStorage = '';
  model.data.CheckBoxCourse.find(course => course.name == element.value).checked = true; 
  /* checkedCourses(element); */
  /*     searchInArrayChecked(element.value)
  console.log('courseIsChecked');
  console.log(element.value);
} else {
  model.data.CheckBoxCourse.find(course => course.name == element.value).checked = false;
console.log('courseIsNotChecked')
  } 
  
  
  console.log(model.data.CheckBoxCourse.find(course => course.name == element.value).checked)
} */ 

/* function checkStatusFunc(element) {
  
if (element.checked == true){
  model.data.CheckBoxStatus.find(status => status.name == element.value).checked = true;
  checkedCourses(element, checked)
  console.log('statusIsChecked')
} else {
  model.data.CheckBoxStatus.find(status => status.name == element.value).checked = false;
console.log('statusIsNotChecked')
}
console.log(model.data.CheckBoxStatus.find(status => status.name == element.value).checked)
} */



/* function checkedCourses(element, checked) {
  let selectedCourse = model.data.studentActions.filter((studentActions) => {
    let course = studentActions.activeCourse;
    if(course.includes(element)) {
      console.log('SJUKKKKT!');
    }
  })
} */

/*    function checkedCourses(element) {
  let selectedCourses = model.data.studentActions.filter((studentAction) => {
    return studentAction.activeCourse.includes(element);
  });
  
  model.selectedCourses = selectedCourses;
  
  return selectedCourses;
  
} */
/* function getList(element){
  //i view hvor dere looper igjennom listen for å vise hvem studentene etc, 
  //kan dere da bruke const list = getList();
  //loop igjennom den istedenfor, for da kan dere alltid kalle på updateView etter at checkboksene
  //er endret.
  let tempElementMemory = CheckBoxCourse[element].name
  let filteredList = model.data.students.filter((students) => {
  let isChecked = model.data.CheckBoxCourse.find(element => element.checked == true);
  if(isChecked){
   for (i = 0; i < studentActions.length; i++) {
    studentActions[i].activeCourse == isChecked; 
    console.log(students[i])
    //filteredList.push(students[i]);
    
   }
   return filteredList;
   updateView();
   console.log(filteredList);
   //loope and shit for å pushe riktige ting i filterList. 
  } else{
    return model.data.students;
  }
})
} */