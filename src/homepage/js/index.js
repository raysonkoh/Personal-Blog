import '../../shared.css';
import '../style/style.css';
import DOM_strings from '../../DOM';

DOM_strings.dropdown__selector.addEventListener('click', e => {
    DOM_strings.dropdown__menu.classList.toggle('open');
})

DOM_strings.nav__selector.addEventListener('change', e => {
    if (e.target.value === 'Latest Posts') {
        if (!(Array.from(DOM_strings.latest__blogs.classList).includes('open'))) {
            DOM_strings.latest__blogs.classList.add('open');
            DOM_strings.top__blogs.classList.remove('open');
        }
    } else if (e.target.value === 'Top Posts') {
        if (!(Array.from(DOM_strings.top__blogs.classList).includes('open'))) {
            DOM_strings.latest__blogs.classList.remove('open');
            DOM_strings.top__blogs.classList.add('open');
        }
    }
})

window.addEventListener('load', e => {
    DOM_strings.nav__selector.value = 'Latest Posts';
    if (!(Array.from(DOM_strings.latest__blogs.classList).includes('open'))) {
        DOM_strings.latest__blogs.classList.add('open');
        DOM_strings.top__blogs.classList.remove('open');
    }
})