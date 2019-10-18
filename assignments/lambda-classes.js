// CODE here for your Lambda Classes
class Person{
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak(){
        return `Hello my name is ${this.name}, and I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject){
        return `${student.name} recieves a perfect score on ${subject}.`
    }
    changeGrade(student){
        let score = function(min,max){
            min = Math.ceil(min);
            max = Math.ceil(max);
            return Math.floor(Math.random() * (max - min)) + min;
        };
        let newGrade= student.gradeNum(1,100) + score(-20,20);

        if (newGrade > student.gradeNum(1,100)){
            return (`Student did fantastic, Instructor is adding points to class grade!  ${newGrade + student.gradeNum(1,100)} Total Points.`)
        }else if (newGrade < student.gradeNum(1, 100)){
            return (`Work was not satisfactory points being removed from class grade. ${newGrade + student.gradeNum(1,100)} Total Points.`)
        } else{
           return  (`Existing grade is sufficient. ${student.gradeNum(1, 100)} Points`);
             
        }

        // Math.random(student.gradeNum(1,100))
        
    }
}

class Student extends Person{
    constructor(attr){
        super(attr)
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
        this.gradeNum = function grade(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
    }
    listSubjects(){
        return this.favSubjects.forEach(function(element){
            console.log(element);
        })
    }
    PRAssignment (subject){
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge (subject){
        return `${this.name} has bugun sprint challenge on ${subject}.`
    }
}

class ProjectManager extends Instructor{
    constructor(attr){
        super(attr)
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

//Instructors

const olivia = new Instructor({
    name: 'Olivia',
    location: 'Amsterdamn',
    age: 30,
    favLanguage: 'JavaScript',
    specialty: 'Front-End',
    catchPhrase: 'Graceful as a pig on ice.'  
})

const george = new Instructor({
    name: 'George',
    location: 'Scandinavia',
    age: 84,
    favLanguage: 'Python',
    specialty: 'Backend',
    catchPhrase: 'Let me show you where a chicken pees from. (scandinavian saying meaning: let me show you how its done.)'
});

const marg = new Instructor({
    name: 'Margareta',
    location: 'Sweden',
    age: 45,
    favLanguage: 'Java',
    specialty: 'Backend',
    catchPhrase: 'LÄTT SOM EN PLÄTT (Easy as a pancake.)'
})

//students

const lola = new Student({
    name: 'Lola',
    location: 'San Fran',
    age: 25,
    previousBackground: 'Pesonal Finance',
    className: 'WEBpt10',
    favSubjects: ['HTML', 'CSS','JavaScript']
});

const joey = new Student({
    name: 'Joey',
    location: 'Onterio',
    age: 32,
    previousBackground: 'Botanist',
    className: 'WEBpt10',
    favSubjects: ['C++', 'Ruby', 'PHP']
});

const harold = new Student({
    name: 'Harold',
    location: 'Ibitha',
    age: 53,
    previousBackground: 'Travel Journalism',
    className: 'WEBpt10',
    favSubjects: ['Python', 'Java', 'C']
});

//Project managers

const selena = new ProjectManager({
    name: 'Selena',
    location: 'Oregan',
    age: 26,
    gradClassName: 'CS1',
    favInstructor: 'George'
})

const jen = new ProjectManager({
    name: 'Jennifer',
    location: 'Ireland',
    age: 29,
    gradClassName: 'UI7',
    favInstructor: 'Marg'
})

const albert = new ProjectManager ({
    name: 'Albert',
    location: 'Michigan',
    age: 40,
    gradClassName: 'Web12',
    favInstructor: 'Fred'
})


//Calling

// console.log(`Harold's background:`,harold.previousBackground);
// console.log(`Marg's catchphrase:`,marg.catchPhrase);
// console.log(`George is grading Joey: `,george.grade(joey, 'CSS'));
// console.log(`Lola's list of favorite Subjects:`)
// lola.listSubjects();
// console.log(`Albert announces stand up:`,albert.standUp('web25_george'));
// console.log(`Jen debugs Harold's code:`,jen.debugsCode(harold, 'JavaScript Fundamentals'));
// console.log(`George's catchphrase:`,george.catchPhrase);
// console.log(`Olivia's catchphrase:`,olivia.catchPhrase);
// console.log(`Lola's PR Assignment:`, lola.PRAssignment('Preprocessing-I'));
// console.log(`Joey's sprint challenge:`, joey.sprintChallenge('Advanced CSS'));
// console.log(`Olivia does a demo:`, olivia.demo('Array Methods'));
console.log(marg.changeGrade(lola))
