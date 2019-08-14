import '../../../shared.css';
import '../style.css';
import DOM_strings from '../../../DOM';

DOM_strings.dropdown__selector.addEventListener('click', e => {
    DOM_strings.dropdown__menu.classList.toggle('open');
})
