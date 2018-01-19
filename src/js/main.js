var openNavBtn=document.querySelector(".mainHeader__navigationToggleBtn");
var openNavBtnItems=document.querySelectorAll(".mainHeader__navigationToggleBtnItem");
var mainNavigation=document.querySelector(".mainHeader__navigation");

openNavBtn.addEventListener("click",function(evt){
	evt.preventDefault();
	for (var i=0;i<openNavBtnItems.length;i++){
		openNavBtnItems[i].classList.toggle("mainHeader__navigationToggleBtnItem--hide");
	}
	mainNavigation.classList.toggle("mainHeader__navigation--hide");
		
});



