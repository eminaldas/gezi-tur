const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const  select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const drop = dropdown.querySelector('.drop');
  const options = dropdown.querySelector('.drop-li');
  const selected = dropdown.querySelector('.selected');
 
 

select.addEventListener('click',()=>{

    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    drop.classList.toggle('drop-open');
});

options.forEach(option => {
    option.addEventListener('click',() =>{
        selected.innerText = option.innerText;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menubar.classList.remove('menu-open');
        options.forEach(option=>{
            option.classList.remove('active');
        });
        option.classList.add('active');
    })
})



})




