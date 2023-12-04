(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-mod-sub-open]"),
		closeModalBtn: document.querySelector("[data-mod-sub-close]"),
		modal: document.querySelector("[data-mod-sub]"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();
