// nodejs runtime 
// frontend backend



document.addEventListener("DOMContentLoaded", function () {



    const title = document.querySelector(".title")
    
    const button1 = document.querySelector(".button1")

    button1.addEventListener("click", changeTitle)

    function changeTitle() {


        if (title.innerHTML === "Broccoli") {
            title.innerHTML = "Cauliflower"
        } else {
            title.innerHTML = "Broccoli"
        }
        console.log("click")
    }


    const button2 = document.querySelector(".button2")
    let isDancing = false

    button2.addEventListener("click", dance)

    function dance() {
        if (isDancing) {
            title.className = "title"
            button2.innerHTML = "Dance"
        } else {
            title.className = "title dancing"
            button2.innerHTML = "Stop"
       
        }
        isDancing = !isDancing
    }

})