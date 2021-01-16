// CLOSE THE "POSTING" DIV
const publications_background = document.querySelector(".publications_container-background")
const publication_container = document.querySelector(".publication_container")
const close_posting_btn = document.querySelector(".close_posting")

publications_background.addEventListener("mousedown", background_close)
close_posting_btn.addEventListener("click", close_posting)

function background_close (event){
    if (event.target == publication_container){
        console.log("do nothing")
    } else if(event.target == publications_background){
        close_posting()
        console.log(event.target)
    }
}

function close_posting (){   
    publications_background.classList.add("hidden")
    publications_background.classList.remove("flex_center")
}

// ************************* opening the posting div


const publication_var = document.querySelector(".publication-var")
publication_var.addEventListener("click", open_publication)

function open_publication (){
    publications_background.classList.remove("hidden")
    publications_background.classList.add("flex_center")
}


// **********************Posting functions

posting_text_container = document.querySelector('.posting_text_container');
post_btn = document.querySelector(".post_btn")


post_btn.addEventListener("click", make_post)//Posteando al hacer click en "Publicar"
posting_text_container.addEventListener("click", post_activate) //Activando botón "Publicar"


function post_activate(){
    post_btn.classList.add("post_btn-color")
}

let post_num = 1;

function make_post(){
    posting_content_input = posting_text_container.value;
    if (posting_content_input == ""){
        console.log("Publicasión Vacía")
    } else{
        let div_element = document.createElement("div")
        div_element.classList.add("post_wrapper")
        div_element.classList.add(`publicasion_${post_num}`)
        

        post_num +=1;
        console.log(div_element)
        console.log(posting_content_input)
        close_posting()
    }


}