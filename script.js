const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");


//modal open function 
const openModal=()=>{
    console.log("Modal is open");
    modal.classList.add("active");
overlay.classList.add("overLayactive");
};

//modal is close
const closeModal=()=>{
    modal.classList.remove("active");
overlay.classList.remove("overLayactive");
};