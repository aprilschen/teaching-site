export const user = {
     studentID: 1,
     firstName: 'April',
     email: 'aprilschen6@gmail.com',
     phone: '6692693255',
     parentEmail: 'placeholder0114@gmail.com',
     parentPhone: '7787239212',
     repl: "https://replit.com/@schen-academy/VainDazzlingField"
}

export const homeworks = [{
    homeworkID: 1,
    studentID: 1,
    dateAssigned:"Sun Apr 30 2023",
    dateDue:(new Date()).toString(),
    name: 'Finish X Homework',
    description: 'Finish X Homework, subquestions 1, 2, and 3',
    link: "https://www.schen.academy",
    isComplete: true
},

{
    homeworkID: 2,
    studentID: 1,
    dateAssigned:"Sun Apr 30 2023",
    dateDue:(new Date()).toString(),
    name: 'Finish Y Homework',
    description: 'Finish Y Homework, subquestions 1, 2, and 3',
    link: "https://www.schen.site",
    isComplete: false
},

{
    homeworkID: 3,
    studentID: 1,
    dateAssigned:"Sun Apr 30 2023",
    dateDue:(new Date()).toString(),
    name: 'Finish Z Homework',
    description: 'Finish Z Homework, subquestions 1, 2, and 3',
    link: "https://www.schen.me",
    isComplete: true
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

