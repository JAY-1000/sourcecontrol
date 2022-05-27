const loves = document.querySelectorAll(".love");
console.log(loves);

loves.forEach((love)=> {
    love,addEventListener('click', function(this) {
       // alert("you clicked love")
       this.classList.add(".loveactive")
    })
    return
    
})