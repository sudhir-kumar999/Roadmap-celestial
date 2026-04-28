// type User={
//     name:string,
//     age:number
// }

// const obj:User={
//     name:"sudhir",
//     age:20
// }
// console.log(obj)


// type Stud={
//     name:string;
//     age:number
// }
// type StudAddr={
//     city:string;
//     state:string
// }

// type BioData=Stud | StudAddr

// const student:BioData={

//     name:"sudhir",
//     age:22,
//     city:"noida",
//     state:"up"

// }
// console.log(student)


interface Stud{
    name:string;
    age:number
}
interface Stud{
    city:string;
    state:string
}
interface Stud1{
    name:string;
    age:number
}
interface StudAddr{
    phone:number;
    pin:number
}
interface Data extends Stud1,StudAddr {}

const Biodata:Stud={
    name:"sudhir",
    age:33,
    city:"patna",
    state:"bihar"
}

const Bio:Data={
    name:"sudhir",
    age:22,
    phone:456789,
    pin:45678
}
console.log(Biodata)
console.log(Bio)