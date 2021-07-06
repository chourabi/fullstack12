console.log("JS IS READY");


// calcul moy


    /*
    

    const notes = [
        { 'name':'Math', 'value':18 },
        { 'name':'Italien', 'value':15 },
        { 'name':'Phys', 'value':20 },
        { 'name':'POO', 'value':3 }
    ];

    var s = 0;

    for (let i = 0; i < notes.length; i++) {
        
        s+=notes[i].value;
    }

    console.log("total: ",s);
    var m = 0;

    m =( s / notes.length);

    console.log("Moyenne :",m);


    //calcul max note
    var min =0;
    var index = 0;

    for (let j = 0; j < notes.length; j++) {
        const note = notes[j];
        if (note.value > min) {
            min = note.value;
            index = j;
        }
        
    }

    console.log("Subject "+ notes[index].name +" is the best note : "+notes[index].value);

    // binding
    var totalBloc = document.getElementById("total");

    totalBloc.innerHTML = s;
    var moyBloc = document.getElementById('moy');
    moyBloc.innerHTML = m;

    var bestSubjectBloc = document.getElementById("bestSubject");
    bestSubjectBloc.innerHTML = notes[index].name;

    var bestNoteBloc = document.getElementById('bestNote');
    bestNoteBloc.innerHTML = notes[index].value;*/

// end calcul moy



// functions in JS
/*
function somme(a,b) {
    return (a+b)
}

const sommeV  = somme(5,9);

console.log("Somme :",sommeV);


let fn = (a,b)=>{
    return (a+b)
}


const s  = fn(20,9);

console.log("Somme :",s);*/


/*
// arrays

// sort ( TRI )
const values = [ 1,15,19,16,13,18,15,46,80,90,25 ];

console.log(values);
values.sort((a, b) => a - b)



console.log(values);

// filter
var newArr = values.filter((v)=> (v > 15)  )

console.log(newArr);


// parcour
var newArry= [];

values.map((v)=>{
    const multiV = (v*2);
    newArry.push(multiV)
})

console.log(newArry);

//remove last

newArry.pop()
newArry.pop()
newArry.pop()

console.log(newArry);

newArry.shift();
newArry.shift();

console.log(newArry);

// tri table of date structures
var chat  = [
    { date:'06-07-2021' , message:"hello world" },
    { date:'06-06-2021' , message:"hello world" },
    { date:'06-01-2021' , message:"hello world" },
    { date:'06-04-2021' , message:"hello world" },
    
]


var ModifiedArry = [];

chat.map((c)=>{
    const v = {
        date: new Date(c.date),
        message:c.message
    }

    ModifiedArry.push(v);
})


console.log(ModifiedArry);



ModifiedArry.sort((a,b)=> a.date.getTime() - b.date.getTime() )

console.log("last",ModifiedArry);

*/

