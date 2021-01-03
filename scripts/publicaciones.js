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


posting_text_container.addEventListener("click", post_activate)


function post_activate(){
    post_btn.classList.add("post_btn-color")
}

