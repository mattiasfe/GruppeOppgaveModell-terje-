function updateView(filteredList = model.inputs.databasePage.filteredList) {
    let currentView = '';
    const selectedCourse = model.inputs.databasePage.selectedCourse;
    
    switch(model.app.currentPage) {
        case 'Database':
            currentView = actionsStudentsDisplay(filteredList || model.data.students, selectedCourse);
            break;

    }
    
    document.getElementById('app').innerHTML = /*HTML*/`
        <div id="header">
            <h1>Desktop</h1>
            <div id="content">
                ${currentView}
            </div>
        </div>
    `;
}