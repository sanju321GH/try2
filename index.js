function displayer(range){
    document.getElementById("range-displayer").innerHTML = range * 5 ;
    document.getElementById("GB").innerHTML = 1000 - (range * 5);
}

document.addEventListener("DOMContentLoaded", function () {//T44his line was written using the help of chat GPT i dont even have clue what this line is about .When i didnt include this line and run it, it showed error in browser.
    document.getElementById('range').oninput = function(){
        const value =  (this.min/this.max) * 100 + "%";
        document.getElementById("progre").style.width = value;
    };
});