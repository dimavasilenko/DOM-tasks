/**
 Start from one dropdown component - example of dropdown you can see here https://getbootstrap.com/docs/4.3/components/dropdowns/

 1. Add behaviour when user clicks on the button we hide/show menu.
 2. When user clicks outside the dropdown or button - close the dropdown.
 3. When user clicks inside the dropdown - nothing happend.
 4. Uncomment second dropddown and check if your logic work for both dropdowns.
 */


document.addEventListener('click', function(event) {
    const target = event.target;

    if (target.matches('.dd-button')) {
        target.nextElementSibling.classList.toggle('visible');
    }
    const clickableDropdown = target.closest('.dropdown');

    if (!clickableDropdown) {
        [...document.querySelectorAll('.dropdown')].forEach(function(currentDropdown) {
            currentDropdown.querySelector('.dd-menu').classList.remove('visible');
        });
    }

});