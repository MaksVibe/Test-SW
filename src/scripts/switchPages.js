import refs from "./refs";

const switchToAdd = () => {
    refs.mainHeader.classList.add('visually-hidden');
    refs.productList.classList.add('visually-hidden');

    refs.cardHeader.classList.remove('visually-hidden');
    refs.addCardForm.classList.remove('visually-hidden');
}

const switchToProducts = () => {
    refs.cardHeader.classList.add('visually-hidden');
    refs.addCardForm.classList.add('visually-hidden');

    refs.mainHeader.classList.remove('visually-hidden');
    refs.productList.classList.remove('visually-hidden');
}

refs.addBtn.addEventListener('click', switchToAdd);
refs.cancelBtn.addEventListener('click', switchToProducts);

export { switchToProducts };