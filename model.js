const model = {
    app: {
        currentPage: 'Database'
    },
    inputs: {
        databasePage: {
            selectedStudents: [],
            selectedCourse: [],
            search: '',
            filteredList: [],
            dateFromFilter: '',
            dateToFilter: '',
            bulkSelectDate: '',
            bulkSelectedCourse: '',
        }
    },
    data: {
        CheckBoxCourse: [
            { id: 1, name: 'Get-IT', checked: false },
            { id: 2, name: 'Start-IT', checked: false },
            { id: 3, name: 'Frontend', checked: false },
            { id: 4, name: 'Intro', checked: false },
        ],

        CheckBoxStatus: [
            { id: 1, name: 'Avbrutt', checked: false },
            { id: 2, name: 'Fullført', checked: false },
            { id: 3, name: 'Søkt', checked: false },
            { id: 4, name: 'Startet', checked: false },
        ],
        
        bulkCheckBoxStatus: [
            { id: 1, name: 'Avbrutt', checked: false },
            { id: 2, name: 'Fullført', checked: true },
            { id: 3, name: 'Søkt', checked: false },
            { id: 4, name: 'Startet', checked: false },
        ],
        bulkCheckBoxCourse: [
            { id: 1, name: 'Get-IT', checked: false },
            { id: 2, name: 'Start-IT', checked: true },
            { id: 3, name: 'Frontend', checked: false },
            { id: 4, name: 'Intro', checked: false },
        ],

        courseStatusText: [
            { text: `<p id="FullfortColor">Fullført</p>`},
            { text: `<p id="StartetColor">Startet</p>`},
            { text: `<p id="SoktColor">Søkt</p>`},
            { text: `<p id="AvbruttColor">Avbrutt</p>`}
        ],

        students: [
            { id: 1, name: 'Ola Nordman', dob: '1990-03-24', email: 'ola.nordman@online.no, olanor@getacademy.no', tlf: 91214161, discord: '123#olahaha', showingFullInfo: false },
            { id: 2, name: 'Fabian Jensen', dob: '1990-03-24', email: 'fabij@online.no, fabjen@getacademy.no', tlf: 92224262, discord: '331#fabian', showingFullInfo: false },
            { id: 3, name: 'Emil Johansen', dob: '1998-03-12', email: 'emil.johansen@getmail.com', tlf: 91923456, discord: 'EmilJ#2345', showingFullInfo: false },
            { id: 4, name: 'Sara Kristofferen', dob: '2001-06-25', email: 'sara.k@getmail.com', tlf: 47856789, discord: 'SaraKris#7890', showingFullInfo: false },
            { id: 5, name: 'Martin Olsen', dob: '1997-11-08', email: 'martin.olsen@getmail.com', tlf: 93445678, discord: 'MartyO#5678', showingFullInfo: false },
            { id: 6, name: 'Ingrid Olsen', dob: '2000-09-14', email: 'ingrid.n@getmail.com', tlf: 48234567, discord: 'IngridN#3456', showingFullInfo: false },
            { id: 7, name: 'Tobias Hansen', dob: '1999-05-03', email: 'tobias.hansen@getmail.com', tlf: 91567890, discord: 'TobyH#1234', showingFullInfo: false },
            { id: 8, name: 'Line Berg', dob: '2002-01-29', email: 'line.berg@getmail.com', tlf: 96345210, discord: 'LineB#8765', showingFullInfo: false },
            { id: 9, name: 'Kevin Solberg', dob: '1996-08-17', email: 'kevin.solberg@getmail.com', tlf: 92834765, discord: 'KevSol#6543', showingFullInfo: false },
            { id: 10, name: 'Amalie Larsen', dob: '1999-05-12', email: 'amamlie.larsen@getmail.com', tlf: 97456321, discord: 'AmalieL#4321', showingFullInfo: false }
        ],
        studentActions: [
            { id: 1, coursesDone: 'Start-IT fra vår 2024</br> Get-IT høst 2024', studentStatus: 0, activeCourse: 'Get-IT 2025', paymentDone: 25000, owes: 30000},
            { id: 2, coursesDone: 'Start-IT fra vår 2024</br>  Frontend høst 2024', studentStatus: 1, activeCourse: 'Frontend 2025', paymentDone: 22000, owes: 33000},
            { id: 3, coursesDone: 'Start-IT fra vår 2024</br>  Get-IT høst 2024', studentStatus: 3, activeCourse: 'Intro vår 2025', paymentDone: 23000, owes: 31000},
            { id: 4, coursesDone: 'Start-IT fra vår 2024</br> Frontend høst 2024', studentStatus: 1, activeCourse: 'Get-IT 2025', paymentDone: 24000, owes: 32000},
            { id: 5, coursesDone: 'Start-IT fra vår 2024</br>  Get-IT høst 2024', studentStatus: 0, activeCourse: 'Frontend vår 2025', paymentDone: 21000, owes: 34000},
            { id: 6, coursesDone: 'Start-IT fra vår 2024</br>  Frontend høst 2024', studentStatus: 1, activeCourse: 'Get-IT vår 2025', paymentDone: 23500, owes: 32500},
            { id: 7, coursesDone: 'Start-IT fra vår 2024</br>  Get-IT høst 2024', studentStatus: 2, activeCourse: 'intro vår 2025', paymentDone: 25000, owes: 31500},
            { id: 8, coursesDone: 'Start-IT fra vår 2024</br>  Frontend høst 2024', studentStatus: 2, activeCourse: 'Frontend vår 2025', paymentDone: 22500, owes: 30000},
            { id: 9, coursesDone: 'Start-IT fra vår 2024</br>  Get-IT høst 2024', studentStatus: 3, activeCourse: 'Frontend vår 2025', paymentDone: 21500, owes: 31500},
            { id: 10, coursesDone: 'Start-IT fra vår 2024</br>  Frontend høst 2024', studentStatus: 1, activeCourse: 'Get-IT vår 2025', paymentDone: 24000, owes: 33000}
        ]
    }
}; 
