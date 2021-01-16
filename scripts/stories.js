const chat_panel = document.querySelector(".lateral_panel-container")
const storie1 = document.querySelector(".storie1")
const storie2 = document.querySelector(".storie2")
const storie3 = document.querySelector(".storie3")
const storie4 = document.querySelector(".storie4")
const storie5 = document.querySelector(".storie5")
const logo_container = document.querySelector(".logo_container")
const storie_close = document.querySelector(".storie_close")
const lateral_panel = document.querySelector(".lateral_panel")
const stories_wrapper = document.querySelector(".stories_wrapper")
const stories_background = document.querySelector(".stories_background")

// ACTIVATING STORIES

storie1.addEventListener("click", open_storie1)
storie2.addEventListener("click", open_storie2)
storie3.addEventListener("click", open_storie3)
storie4.addEventListener("click", open_storie4)
storie5.addEventListener("click", open_storie5)

function aparece(){    
    chat_panel.classList.add("hidden")
    logo_container.classList.add("separating")
    storie_close.classList.remove("storie_close_disappear")
    lateral_panel.classList.add("stories_container")
    lateral_panel.classList.add("leteral_panel-color")
    stories_wrapper.classList.remove("hidden")
    stories_background.classList.remove("hidden")
}

function open_storie1(){
    aparece()
    select_storie(1);
}
function open_storie2(){
    aparece()
    select_storie(2)
}

function open_storie3(){
    aparece()
    select_storie(3)
}

function open_storie4(){
    aparece()
    select_storie(4)
}

function open_storie5(){
    aparece()
    select_storie(5)
}



// DESACTIVATING STORIES

storie_close.addEventListener("click", desaparece)

function desaparece(){
    chat_panel.classList.remove("hidden")
    logo_container.classList.remove("separating")
    storie_close.classList.add("storie_close_disappear")
    lateral_panel.classList.remove("stories_container")
    lateral_panel.classList.remove("leteral_panel-color")
    stories_wrapper.classList.add("hidden")
    stories_background.classList.add("hidden")
}

//aparece()







//  CAMBIANDO ICONOS DE SONIDO, PAUSA Y REPRODUCIR

const st_play_button = document.getElementById("play_button")
let state = "playing";
st_play_button.addEventListener("click", reproducir_pausar)

function reproducir_pausar(){
    if (state == "playing"){

        st_play_button.src="./resources/play_icon"
        state = "paused";
        pausar_reproducir_historias(state)

    } else if (state == "paused"){        
        state = "playing"
        st_play_button.src="./resources/pause_icon"
        pausar_reproducir_historias(state)
    }
}

//  ACTIVANDO SONIDO Y SILENCIANDO

const st_sound_button = document.getElementById("sound_button")
storie_sound_state = "sonando";

st_sound_button.addEventListener("click", silenciar_sonar)

function silenciar_sonar(){
    if (storie_sound_state == "sonando"){
        st_sound_button.src=("./resources/sound_off_icon")
        storie_sound_state = "silenciado";
    } else if (storie_sound_state == "silenciado"){
        st_sound_button.src="./resources/sound_icon";
        storie_sound_state = "sonando"
    }
}

/*  **************************  PASANDO LAS HISTORIAS  ****************************  */

//Next and previous Storie:

const next_storie = document.querySelector(".next_storie")
const previous_storie = document.querySelector(".previous_storie")

next_storie.addEventListener("click", next_storie_activate)
previous_storie.addEventListener("click", previous_storie_activate)

var active_storie = 1;

function next_storie_activate(){
    if (active_storie < 6){
        active_storie +=1;
        select_storie(active_storie)

    }        
}

function previous_storie_activate(){
    if (active_storie > 1){
        active_storie -=1;
        select_storie(active_storie)
    }   
}

function select_storie(active_storie){
    switch (active_storie){
        case 1:
            storie_number_one()
        break;
    
        case 2:
            storie_number_two()
        break;
    
        case 3:
            storie_number_three()
        break;

        case 4:
            storie_number_four()
        break;

        case 5:
            storie_number_five()
        break;

        case 6:
            storie_number_six()
        break;
        default: storie_number_one()
    }
}

const storie_image = document.getElementById("storie_content-image")
const active_storie_img = document.querySelector(".active_storie_img")
const active_storie_username = document.querySelector(".active_storie-username")

function storie_number_one(){
    console.log("Historia 1")
    active_storie = 1;

    storie_image.src=("./resources/drone.jpg")   
    active_storie_img.src=("./resources/profile.jpg")
    active_storie_username.textContent=("Benjamín Martinez")

    sombrear_background_storie1()
}


function storie_number_two(){
    console.log("Historia 2")
    active_storie = 2;

    storie_image.src=("./resources/poe.jpg")  
    active_storie_img.src=("./resources/kevin.jpg")
    active_storie_username.textContent=("Kevin Sandoval (L)")

    sombrear_background_storie2()
}


function storie_number_three(){
    console.log("Historia 3")
    active_storie = 3;
    
    storie_image.src=("./resources/ferrari.jpg") 
    active_storie_img.src=("./resources/abilio.jpg")
    active_storie_username.textContent=("Abilio Zelaya")

    sombrear_background_storie3()
}


function storie_number_four(){
    console.log("Historia 4")
    active_storie = 4;

    storie_image.src=("./resources/tenis.jpg")
    active_storie_img.src=("./resources/jose.jpg")
    active_storie_username.textContent=("Virgilio López")

    sombrear_background_storie4()
}


function storie_number_five(){
    console.log("Historia 5")
    active_storie = 5;

    storie_image.src=("./resources/soraya_storie.jpg") 
    active_storie_img.src=("./resources/soraya.jpg")
    active_storie_username.textContent=("Lisbeth Cáceres")

    sombrear_background_storie5()
}


function storie_number_six(){
    console.log("Historia 6")
    active_storie = 6;

    storie_image.src=("") 
    active_storie_img.src=("")
    active_storie_username.textContent=("")

    sombrear_background_storie6()
}


// ********************* SOMBREANDO EL BACKGROUND DE CADA USUARIO (PANEL LATERAL IZQUIERDO)
//background_user-selected

const storie_1 = document.getElementById("storie_1")
const storie_2 = document.getElementById("storie_2")
const storie_3 = document.getElementById("storie_3")
const storie_4 = document.getElementById("storie_4")
const storie_5 = document.getElementById("storie_5")
const storie_6 = document.getElementById("storie_6")

storie_1.addEventListener("click", storie_number_one)
storie_2.addEventListener("click", storie_number_two)
storie_3.addEventListener("click", storie_number_three)
storie_4.addEventListener("click", storie_number_four)
storie_5.addEventListener("click", storie_number_five)
storie_6.addEventListener("click", storie_number_six)



function sombrear_background_storie1(){
    storie_1.classList.add("background_user-selected")
    storie_2.classList.remove("background_user-selected")
    storie_3.classList.remove("background_user-selected")
    storie_4.classList.remove("background_user-selected")
    storie_5.classList.remove("background_user-selected")
    storie_6.classList.remove("background_user-selected")
}

function sombrear_background_storie2(){
    storie_1.classList.remove("background_user-selected")
    storie_2.classList.add("background_user-selected")
    storie_3.classList.remove("background_user-selected")
    storie_4.classList.remove("background_user-selected")
    storie_5.classList.remove("background_user-selected")
    storie_6.classList.remove("background_user-selected")
}

function sombrear_background_storie3(){
    storie_1.classList.remove("background_user-selected")
    storie_2.classList.remove("background_user-selected")
    storie_3.classList.add("background_user-selected")
    storie_4.classList.remove("background_user-selected")
    storie_5.classList.remove("background_user-selected")
    storie_6.classList.remove("background_user-selected")
}

function sombrear_background_storie4(){
    storie_1.classList.remove("background_user-selected")
    storie_2.classList.remove("background_user-selected")
    storie_3.classList.remove("background_user-selected")
    storie_4.classList.add("background_user-selected")
    storie_5.classList.remove("background_user-selected")
    storie_6.classList.remove("background_user-selected")
}

function sombrear_background_storie5(){
    storie_1.classList.remove("background_user-selected")
    storie_2.classList.remove("background_user-selected")
    storie_3.classList.remove("background_user-selected")
    storie_4.classList.remove("background_user-selected")
    storie_5.classList.add("background_user-selected")
    storie_6.classList.remove("background_user-selected")
}

function sombrear_background_storie6(){
    storie_1.classList.remove("background_user-selected")
    storie_2.classList.remove("background_user-selected")
    storie_3.classList.remove("background_user-selected")
    storie_4.classList.remove("background_user-selected")
    storie_5.classList.remove("background_user-selected")
    storie_6.classList.add("background_user-selected")
}







/* ******************** PASANDO HISTORIAS AUTOMÁTICAMENTE ********************** */
//open_storie1()


/*
function pausar_reproducir_historias(estado){   // <= Esta función fué llamada en la sección "Cambiando icono Pausado/reproduciendo"
    if (estado == "playing"){ 
        var next_storie_interval = setInterval(siguiente = () =>{            
                console.log("Siguiente historia")  
            }, 1000)        
        }
        else if(estado == "paused")
    } 
    
*/
