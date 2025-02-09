document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.querySelector('nav ul');
    const hamburger=document.querySelector('#menu-toggle');
    const crossign=document.querySelector('#cross-icon');
    let navnaming = document.querySelectorAll('li a');
    const titlename=document.querySelector('.pagetitle');
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    crossign.classList.toggle('hidden');
    titlename.classList.toggle('hidden');

    navnaming.forEach(links=>{
        links.classList.toggle('text-2xl');
        links.classList.toggle('font-bold');
        links.classList.toggle('text-center');
    })
    
    
});

document.getElementById('cross-icon').addEventListener('click',()=>{
    const menu = document.querySelector('nav ul');
    const hamburger=document.querySelector('#menu-toggle');
    const crossign=document.querySelector('#cross-icon');
    const titlename=document.querySelector('.pagetitle');

    
    
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('hidden');
    crossign.classList.toggle('hidden');
    titlename.classList.toggle('hidden');


   
});
