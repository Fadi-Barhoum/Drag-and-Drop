let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let lefttBox = document.getElementById("left");
/*
lists.forEach(list => {
    list.addEventListener("dragstart",(e)=>{
        let selected = e.target;
        rightBox.addEventListener("dragover", (e)=> {
            e.preventDefault();
        });
        rightBox.addEventListener("drop", (e)=> {
            rightBox.appendChild(selected);
            selected = null;
        });
    })
});
*/ 
for (list of lists){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        });

        lefttBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });
        lefttBox.addEventListener("drop", function(e){
            lefttBox.appendChild(selected);
            selected = null;
        });
    });
} 

