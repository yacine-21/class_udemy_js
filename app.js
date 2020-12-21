let btn = document.getElementById("button") // Recupere l'id du button et on le stock dans une variable
let bouton = document.getElementById("test2"); // Recupere l'id du button2 et on le stock dans une variable
let answer1 = document.getElementById("test"); // Recupere l'id du p et on le stock dans une variable
let answer;


btn.addEventListener("click", buttonCliked)

function buttonCliked (){
    console.log("You clicked here");
    document.getElementById("text").innerHTML = "Don't touch me you trash";
    answer1 = document.getElementById("test").innerHTML = prompt("Veuillez rentre votre réponse");
    if (answer1 == "batman"){
        alert("58")
    } else{
        alert("noooooon")
    }
} 
bouton.addEventListener("click", buttonCliked)




btn.addEventListener("mouseover",mouseover)

function mouseover(){
    console.log("Hey don't pass over me")
    document.getElementById("text").innerHTML = "Hey don't pass over me"
}

btn.addEventListener("keydown", keydown )

function keydown(){
    console.log("Hey you're typing my keyoboard")
    document.getElementById("text").innerHTML = "Hey you're typing my keyoboard"
}






//---------------------------- TEST SUR LES ARRAY --------------------------------------//

let hobbies = ["Manga","jeux","Musique","programming"];
let indexarray = hobbies.indexOf('Musique')
console.log(hobbies.splice(indexarray,1))
console.log(indexarray)

hobbies.forEach(function(item, index){
    console.log("I like", item, index)
});


if(hobbies.indexOf("Manga") >= 0){
    console.log("I like Manga")
}

if(hobbies.indexOf("sport") > -1){
    console.log("I like sport")
} else{
    console.log("not in a array")
}


console.log(hobbies[hobbies.length -1])