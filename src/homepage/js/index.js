import DOM_strings from './DOM';
import '../../shared.css';

DOM_strings.dropdown__selector.addEventListener('click', e => {
    DOM_strings.dropdown__menu.classList.toggle('open');
})