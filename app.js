 function updateView(filteredList) {
    let currentVeiw = '';
    switch(model.app.currentPage) {
        case 'Database':
            currentVeiw = actionsStudentsDescop(filteredList);
            break;
    }
    document.getElementById('app').innerHTML = /*HTML*/`
        <div id="header">
            <h1>Desktop</h1>

            <div id="content">
                ${currentVeiw}
            </div>
        </div>
    `;
 }