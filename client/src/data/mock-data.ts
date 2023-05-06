export const user = {
     studentID: 1,
     firstName: 'April',
     email: 'aprilschen6@gmail.com',
     phone: '6692693255',
     parentEmail: 'placeholder0114@gmail.com',
     parentPhone: '7787239212',
     repl: "https://replit.com/@schen-academy/VainDazzlingField",
     meets: "https://meet.google.com/owo-mymw-dti",
     palette: 'dark',
     showHomeworkTags: true,
     hideCompletedModules: false
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

export const pastHomeworks = [{
    homeworkID: 1,
    studentID: 1,
    dateAssigned:"Sun Apr 30 2023",
    dateDue:(new Date()).toString(),
    name: 'Finish A Homework',
    description: 'Finish A Homework, subquestions 1, 2, and 3',
    link: "https://www.schen.academy",
    isComplete: false
},

{
    homeworkID: 2,
    studentID: 1,
    dateAssigned:"Sun Apr 30 2023",
    dateDue:(new Date()).toString(),
    name: 'Finish B Homework',
    description: 'Finish B Homework, subquestions 1, 2, and 3',
    link: "https://www.schen.site",
    isComplete: false
},

{
    homeworkID: 3,
    studentID: 1,
    dateAssigned:"Sun Apr 30 2023",
    dateDue:(new Date()).toString(),
    name: 'Finish C Homework',
    description: 'Finish C Homework, subquestions 1, 2, and 3',
    link: "https://www.schen.me",
    isComplete: false
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
    linkID: 3,
    studentID: 1,
    link: "https://lucid.app/lucidspark/d2fe9395-a4c1-412e-bac6-62fa0d5697b3/edit?invitationId=inv_07c4b25e-a9b7-43d5-a7e8-861b2aebc245&page=0_0#",
    name: "Class Whiteboard",
    type: 'resource'
},

{
    linkID: 1,
    studentID: 1,
    link: "https://ap.collegeboard.org/",
    name: "AP Website",
    type: 'resource'
},

{
    linkID: 2,
    studentID: 1,
    link: "https://apstudents.collegeboard.org/ap/pdf/ap-computer-science-a-java-quick-reference_0.pdf",
    name: "Java Quick Reference",
    type: 'resource'
},

{
    linkID: 4,
    studentID: 1,
    link: "https://www.asciitable.com/",
    name: "ASCII Table",
    type: 'resource'
},

{
    linkID: 5,
    studentID: 1,
    link: "https://www.onlinegdb.com/",
    name: "OnlineGDB",
    type: 'resource'
}]

