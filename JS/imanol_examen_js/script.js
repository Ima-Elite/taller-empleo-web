var formularioMenu = document.getElementById('formulario-menu');
var totalPrecioDiv = document.getElementById('total-precio');

formularioMenu.addEventListener('change', () => {
    let total = 0;

    var itemsMenu = formularioMenu.querySelectorAll('.item-menu');

    itemsMenu.forEach(item => {
        var checkbox = item.querySelector('input[type="checkbox"]');
        var cantidadInput = item.querySelector('input[type="number"]');

        if (checkbox.checked) {
            var precio = parseFloat(checkbox.getAttribute('data-precio'));
            var cantidad = parseInt(cantidadInput.value, 10);
            total += precio * cantidad;
        }
    });

    totalPrecioDiv.innerHTML = `${total}<span>&nbsp;</span>€`;
});