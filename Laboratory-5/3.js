let name;
let sname;
let age;

function ask(){
    name=prompt("Введіть своє імʼя");
    sname=prompt ("Введіть своє прізвище");
    age=prompt("Введіть свій вік");
}

function say() {
    document.write("Імʼя:"+name+"<br />");
    document.write("Прізвище:"+sname+"<br />");
    document.write("Вік:"+age+"<br />");
    document.write("<hr/>");
}

do{
    ask();
    say();
    repeater=confirm("Пройти заповнення ще раз?");
   }while(repeater);
   