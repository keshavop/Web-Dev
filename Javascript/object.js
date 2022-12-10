// object declaration
const Student = {
    firstName: "Keshav",
    lastName: "Kumar",
    regNo: 3,
    Address: "India",
};

// printing all objects
console.log(Student);

// accessing regno
console.log(Student.regNo);

// accesing name
console.log(Student["firstName"]);

const comments = [
    { name: "kiki", text: "time hee tohh hai badal jayaga", likes: 101 },
    { name: "its me", text: "kuch nhi honey wala", likes: 003 },
];

// acessing array objects
console.log(comments);

// acessing objects name and text fields
console.log(comments[0].name);
console.log(comments[0].text);
