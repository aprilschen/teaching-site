export const user = {
     studentID: 1,
     firstName: 'April',
     lastName: 'Chen',
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
    dateAssigned:new Date("04-30-2023"),
    dateDue: (new Date("05-05-2023")),
    name: 'Dice Combinations',
    description: 'Tags: Dynamic Programming, Easy Problems',
    link: "https://cses.fi/problemset/task/1633",
    isComplete: true
},

{
    homeworkID: 2,
    studentID: 1,
    dateAssigned:new Date("04-30-2023"),
    dateDue: (new Date("05-05-2023")),
    name: 'Coin Combinations I',
    description: 'Tags: Dynamic Programming, Knapsack',
    link: "https://cses.fi/problemset/task/1635",
    isComplete: false
},
{
    homeworkID: 3,
    studentID: 1,
    dateAssigned:new Date("04-30-2023"),
    dateDue: (new Date("01-21-2025")),
    name: 'Reading: Union Find',
    description: 'Tags: Graph Theory, Union Find, Connected Components',
    link: "https://usaco.guide/CPH.pdf#page=155",
    isComplete: true
}]

export const pastHomeworks = [{
    homeworkID: 1,
    studentID: 1,
    dateAssigned:new Date("4-30-2023"),
    dateDue:(new Date("5-10-2023")),
    name: 'Cow Traversal',
    description: 'Tags: Graph Theory, Depth First Search, Coordinate Compression',
    link: "https://www.schen.academy",
    isComplete: false
},

{
    homeworkID: 2,
    studentID: 1,
    dateAssigned:new Date("4-30-2023"),
    dateDue:(new Date("5-10-2023")),
    name: 'Moo Network',
    description: 'Tags: Graph Theory, Depth First Search, Floodfill',
    link: "https://www.schen.site",
    isComplete: false
},

{
    homeworkID: 3,
    studentID: 1,
    dateAssigned:new Date("4-30-2023"),
    dateDue:(new Date("5-10-2023")),
    name: 'Reading: DFS',
    description: 'Tags: Graph Theory, Depth First Search',
    link: "https://www.schen.me",
    isComplete: false
}]

export const tuitions = [{
    tuitionID: 1,
    studentID: 1,
    classTime: (new Date("01-21-2023")),
    dateDue: (new Date("02-01-2025")),
    cost: 40,
    fulfilled: false
},
{
    tuitionID: 2,
    studentID: 1,
    classTime: (new Date("01-28-2023")),
    dateDue: (new Date("02-01-2023")),
    cost: 60,
    fulfilled: true
},

{
    tuitionID: 3,
    studentID: 1,
    classTime: (new Date("02-05-2023")),
    dateDue: (new Date("02-01-2023")),
    cost: 60,
    fulfilled: false
},

{
    tuitionID: 4,
    studentID: 1,
    classTime: (new Date()),
    dateDue: (new Date("02-01-2023")),
    cost: 60,
    fulfilled: true
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
},

{
    linkID: 6,
    studentID: 1,
    link: "https://usaco.guide/CPH.pdf#page=155",
    name: "Competitive Programmers Handbook",
    type: 'resource'
}]

