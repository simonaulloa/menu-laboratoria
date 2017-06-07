(function main(){
	var boxes = Array.from(document.getElementsByClassName("nav"));
	var modal = document.getElementById("box-work-modal");
	var bodyModal, close;
	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			modal.innerHTML = "";
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;			
			modal.appendChild(bodyModal);
			modal.classList.remove("hide");
			close.addEventListener("click",function(){
				modal.classList.add("hide");
			});
		});		
	});
})();

	