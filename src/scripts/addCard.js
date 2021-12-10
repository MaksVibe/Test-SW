import refs from "./refs";
import { LOCAL_PRODUCTS } from "./localStorage";
import card from "./assets/prod.json";

const createMarkup = ({ sku, name, price, attribute }) => {
  return `
   <li class="products__card" id=${sku}>
        <input
          type="checkbox"
          class="delete-checkbox"
          name="checkbox"
          id="check"
        />
        <ul>
          <li class="products__sku">${sku}</li>
          <li class="products__name">${name}</li>
          <li class="products__price">${price}</li>
          <li class="products__spec">${attribute}</li>
        </ul>
      </li>`
};


console.log(createMarkup(card));