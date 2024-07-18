class Person
{
    constructor(firstName,lastName)
    {
this.firstName=firstName
this.lastName=lastName
    }
    displayName()
    {
        console.log(this.firstName+this.lastName)
    }
}
let PoojaJ=new Person("Pooja","Jadhav")
PoojaJ.displayName()

//hirarchical
class Mother {
    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
    }
    displayName(){
        console.log(this.firstName + this.lastName )
    }
}

class Son extends Mother{
    constructor(fn,ln,sfn){
        super(fn,ln)
        this.sFirstName=sfn
    }
    displaySname(){
        console.log(this.lastName  + this.sFirstName)


    }
    
}

class Daughter extends Mother{
    constructor(fn,ln,dfn){
        super(fn,ln)
        this.dFirstName=dfn
    }
    displayDname(){
        console.log(this.lastName + this.dFirstName)
    }
}
let Pooja=new Daughter("Sarika","Jadhav","Pooja")
let Pari=new Son("Sarika","Jadhav","Pari")
Pooja.displayDname()
Pooja.displayName()
Pari.displaySname()

//multilevel 

console.log("Testing")


console.log('checking untracked')
console.log('checking diff')