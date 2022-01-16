const tabs = document.getElementById('tabs'),
      content = document.querySelectorAll('.content'),
      myTab = document.getElementById('mytab'),
      myContent = document.querySelectorAll('.mycontent');


      const chengeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
                tabs.children[i].classList.remove('active');
            }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    chengeClass(e.target);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
       if(content[i].dataset.content === currTab) {
        content[i].classList.add('active');
       }
    }
}) 


const myChengeClass = el => {
    for(let i = 0; i < myTab.children.length; i++) {
        myTab.children[i].classList.remove('active');
            }
    el.classList.add('active');
}


myTab.addEventListener('click', e => {
    const currMyTab = e.target.dataset.mybtn;
    myChengeClass(e.target);
    for(let i = 0; i < myContent.length; i++) {
        myContent[i].classList.remove('active');
       if(myContent[i].dataset.mycontent === currMyTab) {
        myContent[i].classList.add('active');
       }
    }
})


     