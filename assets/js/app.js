var cl = console.log;

const buttonClick = document.getElementById('buttonClick')
const box = document.getElementById('box')
let visibilitystate = true;
const hidebox = ()=>{
    if(visibilitystate === true){
        box.style.display='none'
        visibilitystate = false
        buttonClick.innerHTML="Show BOX "
    }else{
        box.style.display='block'
        visibilitystate = true
       box.style.backgroundColor='yellow'
       box.style.borderRadius='50%'
       buttonClick.innerHTML="Hide ball "

    }
    
}

// / box.classlist.add

// const hidebox = ()=>{
//    let classes = box.className;
//    if(classes.includes('d-none')){
//     box.classList.remove('d-none')

//    }else{
//     box.classList.add('d-none')
//     box.style.display='block'
//      visibilitystate = true
//     box.style.backgroundColor='yellow'
//     box.style.borderRadius='50%'
//     buttonClick.innerHTML="Hide ball "

//    }
 
// }

//Doctumentobject.addeventlistenr(eventname,callbackfunction)
buttonClick.addEventListener('click',hidebox)

/////////////////////////////////Mouse Event///////////////////
const box2 = document.getElementById('box2');
const button = document.getElementById('buttonClick2');


const onMouseEnter = (eve)=> {
    eve.target.style.backgroundColor="orange";    
}
const onMouseleave=(e)=>{
    e.target.style.backgroundColor='red'
    e.target.style.borderRadius='50%'
}

//doctumentobject.addeventListener(evenetname,callbackfunction)
box2.addEventListener('mouseenter',onMouseEnter)
box2.addEventListener('mouseleave',onMouseleave)

////////////Img Event////////////////////////////

const skill = document.getElementById('skill')

const onmouseenter =(e)=>{
    let img = e.target
    //get the img

    let srcvalue = e.target.getAttribute('src');
    // cl(srcvalue)
    // cl(e.target.getAttribute('alt'))

    e.target.setAttribute('src','data:image/jpeg;base64,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')
}

const mouseleave = (e)=>{
 
    
    e.target.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg')
    
}

skill.addEventListener('mouseenter',onmouseenter)
skill.addEventListener('mouseleave',mouseleave)

//////////////////////mousemoveEvent/////////////////////////////

const box3 = document.getElementById('box3')

const onmousehandeler= (e)=>{
    cl(e)

   var green = e.offsetX;
   var blue = e.offsetY;

    e.target.style.backgroundColor=`rgb(138,${green},${blue})`
}


box3.addEventListener('mousemove',onmousehandeler)
/////////////////////////////Foous Event ////////////////////////
const username = document.getElementById('username')
const onusernamefocous=(eve)=>{
    eve.target.style.border="3px solid red"
}
const onusernameBlur=(eve)=>{
    eve.target.style.border='1px solid #ced4da'
}
const onkeyDown=(eve)=>{
    eve.target.style.backgroundColor='orange'
}

username.addEventListener('focus',onusernamefocous)
username.addEventListener('blur',onusernameBlur)
username.addEventListener('keydown',onkeyDown)
// username.addEventListener('keyup',onkeyup)
username.addEventListener('input',onkeyDown)

const bgcolor = document.getElementById('bgColors')
const body = document.getElementById('body')

const  onBgColorChange = (eve)=>{
    let color = eve.target.value;
    // cl(color)
    body.style.backgroundColor=color

}
bgcolor.addEventListener('change',onBgColorChange)

