const output = document.querySelector('.display');
const click=document.querySelector('.click');
let input=document.querySelectorAll('.edit');
console.log(output);
// const abs=document.createElement('img');


function showNotes() {
    output.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem('notes',output.innerHTML);
}

click.addEventListener('click',(e) => {
    console.log(e.target);

    const write=document.createElement('p');
    // const main=document.createElement('div');
    const abs=document.createElement('img');
    write.setAttribute('contenteditable', 'true');
    write.setAttribute('placeholder','write here');
    write.classList.add('edit');    
    abs.classList.add('pos');
    abs.src='./icons8-multiply-24.png';
    // main.classList.add('main');
    // main.append(write);
    write.appendChild(abs);
    output.appendChild(write);


    
})

output.addEventListener('click', (e) =>{
    if (e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }

    else if (e.target.tagName === 'P'){
        notes = document.querySelectorAll('.edit');
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
    
})

document.addEventListener('keydown', (e) =>{
    if(e.key === 'Enter'){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})