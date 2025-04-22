function searchBarView() {
  return /*HTML*/ `
    <input type="text" value="${model.inputs.databasePage.search}" placeholder="Søk i database" onchange="handleInput(this.value)">
    `;
}

function searchFilters() {
  return /*HTML*/ `
  <div id="filterContainer">
    <div id="coursefilter" class="filterBox">
    <div class="subfilter-cont">
    <h3 id="filterheader">Kurs</h3>
    <input type="checkbox" id="coursecheck1" name="coursecheck1" value="Get-IT" onclick="checkCourseFunc(this)">
    <label for="coursecheck1">Get-IT</label><br>
    <input type="checkbox" id="coursecheck2" name="coursecheck2" value="Start-IT" onclick="checkCourseFunc(this)">
    <label for="coursecheck2">Start IT</label><br>
    <input type="checkbox" id="coursecheck3" name="coursecheck3" value="Frontend" onclick="checkCourseFunc(this)">
    <label for="coursecheck3">Frontend</label><br>
    <input type="checkbox" id="coursecheck4" name="coursecheck4" value="Intro" onclick="checkCourseFunc(this)">
    <label for="coursecheck4">Intro</label><br>
    </div>
    </div>
    <div id="statusfilter" class="filterBox">
    <div class="subfilter-cont">
    <h3 id="filterheader">Status</h3>
    <input type="checkbox" id="statuscheck1" name="statuscheck1" value="Avbrutt" onclick="checkStatusFunc(this)">
    <label for="statuscheck1">Avbrutt</label><br>
    <input type="checkbox" id="statuscheck2" name="statuscheck2" value="Fullført" onclick="checkStatusFunc(this)">
    <label for="statuscheck2">Fullført</label><br>
    <input type="checkbox" id="statuscheck3" name="statuscheck3" value="Søkt" onclick="checkStatusFunc(this)">
    <label for="statuscheck3">Søkt</label><br>
    <input type="checkbox" id="statuscheck5" name="statuscheck5" value="Startet" onclick="checkStatusFunc(this)">
    <label for="statuscheck5">Startet</label><br>
    </div>
    </div>
    <div id="datefilter" class="filterBox">
    <div class="subfilter-cont">
    <h3 id="filterheader">Dato</h3>
    <div class="datefiltcont">Fra</p>
    <input type="date"></div>
    <div class="datefiltcont">
    <p>Til</p>
    <input type="date"></div>
    </div>
    </div>
    </div>
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

function searchInArrayChecked(checkedTerm){
/*   let checkedList = model.data.CheckBoxCourse.checked; */
  let selectedCourse = model.data.studentActions.filter((actions) => {
/*     let checkedList = false; */
    let courses = model.data.studentActions.activeCourse;
    if(courses.includes(checkedTerm)){
        return studentActions;
    }
})
  model.inputs.databasePage.selectedCourse = selectedCourse;
  console.log(selectedCourse);
  updateView();
}


//FÅ ALT DETTE HER OG NEDOVER TIL Å FUNKE!!
function checkCourseFunc(element) {

  if (element.checked == true){
    let tempElementStorage = '';
    model.data.CheckBoxCourse.find(course => course.name == element.value).checked = true; 
    /* checkedCourses(element); */
    searchInArrayChecked(element.value)
    console.log('courseIsChecked');
    console.log(element.value);
  } else {
    model.data.CheckBoxCourse.find(course => course.name == element.value).checked = false;
    console.log('courseIsNotChecked')
  } 
  
  
  console.log(model.data.CheckBoxCourse.find(course => course.name == element.value).checked)
}

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

   function checkedCourses(element) {
    let selectedCourses = model.data.studentActions.filter((studentAction) => {
        return studentAction.activeCourse.includes(element);
    });
 
    model.selectedCourses = selectedCourses;

    return selectedCourses;
   
 }