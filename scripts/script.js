let type_val = document.querySelector('[name="type_val"]');

type_val.addEventListener('change', (event) => {
    let elements = document.querySelectorAll('input');
    elements.forEach( (el) => {
        let parentElement = el.closest('p');
        let attr = el.getAttribute('name');
        let searchResult = attr.search(type_val.value);

        parentElement.style.display = 'none';
        if (searchResult > 0) {
            parentElement.style.display = 'block';
        }
    })
});
