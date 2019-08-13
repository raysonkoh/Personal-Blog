import DOM_strings from './DOM';
import '../style.css';

DOM_strings.dropdown__selector.addEventListener('click', e => {
    DOM_strings.dropdown__menu.style.display = 'block';
})