var toggleBtn = document.getElementById("toggleBtn");

const oldStatus = localStorage.getItem('status');




if (oldStatus != null) {
    // init old status
    const oldClass = toggleBtn.classList;
    oldClass.remove("not-active");
    oldClass.remove("active");


    oldClass.add(oldStatus);

}

toggleBtn.addEventListener('click',(e)=>{

    const oldClass = toggleBtn.classList;

    if (oldClass.contains("not-active")) {
        oldClass.remove("not-active");
        oldClass.add("active");

        localStorage.setItem('status','active');

        
    }else{
        oldClass.add("not-active");
        oldClass.remove("active");
        localStorage.setItem('status','not-active');
        
    }
    




})