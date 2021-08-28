let inputE = document.getElementById('email');

function myFunction(event) {
    if (event.keyCode == 13) { // 13 is the keycode for enter button

    if(inputE.value === ""){
        let error = document.getElementById('error');
        error.innerText = 'Please Add Something'
        error.style.display= 'block'
    }
    else{
        error.style.display= 'none'

        inVal = document.getElementById('email').value;


        tag = document.createElement("p");


        tagText = document.createElement("div");

        close = document.createElement("i");





       tag.className += "tag";

       tagText.className += "tagText";
       
  close.className += "far fa-times";

  close.setAttribute('id', 'close');

  close.addEventListener('click', (e) =>{
     e.target.parentNode.remove();
  })





tagText.innerText = inVal;


tag.appendChild(tagText)
tag.appendChild(close)

inVal = document.getElementById('email').value = "";

      container = document.querySelector('.tags')

     let posi = container.firstChild;

  
        container.appendChild(tag);


         container.insertBefore(tag, posi);
  
     

       
    }
    
    }

}









// 2nd part
let dropDown = document.getElementById('dropDownParent');
let list = document.querySelector('.list');

let listContainer = document.querySelector('.list');

dropDown.addEventListener('click',  () =>{
list.classList.toggle('avd');
})


// 1st
let c1Tag = document.querySelector('.c1Tag');
let c1 = document.querySelector('.c1').addEventListener('click', () =>{
    c1Tag.classList.toggle('tagVisible')
    document.querySelector('.c1').lastChild.classList.toggle('tickToggle');
})



// 2nd
let c2Tag = document.querySelector('.c2Tag');
let c2 = document.querySelector('.c2').addEventListener('click', () =>{
    c2Tag.classList.toggle('tagVisible')
    document.querySelector('.c2').lastChild.classList.toggle('tickToggle');

})







// 3rd
let c3Tag = document.querySelector('.c3Tag');
let c3 = document.querySelector('.c3').addEventListener('click', () =>{
    c3Tag.classList.toggle('tagVisible')
    document.querySelector('.c3').lastChild.classList.toggle('tickToggle');

})





// 4th
let c4Tag = document.querySelector('.c4Tag');
let c4 = document.querySelector('.c4').addEventListener('click', () =>{
    c4Tag.classList.toggle('tagVisible')
    document.querySelector('.c4').lastChild.classList.toggle('tickToggle');

})



// remove all tags

let allTags = document.querySelectorAll('.listTag1');





  document.querySelectorAll(".listTag1").forEach(el => {
    el.addEventListener('click',function (ellll) {
        ellll.target.parentNode.classList.remove('tagVisible');

    });
});


// tags remove


document.querySelector(".c1Tag").addEventListener('click', () =>{
    document.querySelector('.c1').lastChild.style.display = 'none';
    document.querySelector('.c1').lastChild.classList.toggle('tickToggle');


})

document.querySelector(".c2Tag").addEventListener('click', () =>{
    document.querySelector('.c2').lastChild.style.display = 'none';
    document.querySelector('.c2').lastChild.classList.toggle('tickToggle');


})


document.querySelector(".c3Tag").addEventListener('click', () =>{
    document.querySelector('.c3').lastChild.style.display = 'none';
    document.querySelector('.c3').lastChild.classList.toggle('tickToggle');


})



document.querySelector(".c4Tag").addEventListener('click', () =>{
    document.querySelector('.c4').lastChild.style.display = 'none';
    document.querySelector('.c4').lastChild.classList.toggle('tickToggle');


})
