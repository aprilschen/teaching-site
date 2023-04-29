export const user = {
     studentID: 1,
     firstName: 'April',
     email: 'aprilschen6@gmail.com',
     phone: '6692693255',
     parentEmail: 'placeholder0114@gmail.com',
     parentPhone: '7787239212',
     repl: "https://replit.com/@schen-academy/VainDazzlingField"
}

export const homework = [{
    homeworkID: 1,
    studentID: 1,
    dateAssigned:(new Date()).toString(),
    dateDue:(new Date()).toString(),
    name: 'Finish X Homework',
    description: 'Finish X Homework, subquestions 1, 2, and 3',
    link: "https://www.schen.academy"
},

{
    homeworkID: 2,
    studentID: 1,
    dateAssigned:(new Date()).toString(),
    dateDue:(new Date()).toString(),
    name: 'Finish Y Homework',
    description: 'Finish Y Homework, subquestions 1, 2, and 3',
    link: "https://www.schen.site"
}]

export const tuition = [{
    tuitionID: 1,
    studentID: 1,
    classTime: (new Date()).toString(),
    cost: 40
},
{
    tuitionID: 2,
    studentID: 1,
    classTime: (new Date()).toString(),
    cost: 60
}]

export const links = [{
    linkID: 1,
    studentID: 1,
    link: "https://www.schen.kk",
    name: "Class Google Meet",
    type: 'custom'
},

{
    linkID: 2,
    studentID: 1,
    link: "https://www.schen.bruh",
    name: "Java Quick Reference",
    type: 'resource'
}]

