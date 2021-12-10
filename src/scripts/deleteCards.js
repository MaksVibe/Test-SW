import refs from "./refs";



const deleteCheckedProds = () => {
if (refs.deleteCheckbox.checked) {
		alert('Выбран');
	}
	else {
		alert ('Не выбран');
	}
}

refs.deleteBtn.addEventListener('click', deleteCheckedProds)


// const checked = () => {
// }


// refs.deleteCheckbox.addEventListener('click', checked)
