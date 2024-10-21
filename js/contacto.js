document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe antes de validar
    let isValid = true;

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value.trim();
    const checkbox = document.getElementById('terminos').checked;

    // Validación del nombre
    if (nombre === '') {
        alert('Por favor, introduce tu nombre');
        isValid = false;
    }

    // Validación del email
    if (email === '') {
        alert('Por favor, introduce tu email');
        isValid = false;
    } else if (!validateEmail(email)) {
        alert('Por favor, introduce un email válido');
        isValid = false;
    }

    // Validación del asunto
    if (asunto === 'Otro motivo') {
        alert('Por favor, selecciona un motivo válido');
        isValid = false;
    }

    // Validación del mensaje
    if (mensaje === '') {
        alert('Por favor, introduce tu mensaje');
        isValid = false;
    }

    // Validación de la aceptación de la política de privacidad
    if (!checkbox) {
        alert('Debes aceptar la política de privacidad para continuar');
        isValid = false;
    }

    // Si todas las validaciones son correctas, muestra un mensaje de éxito
    if (isValid) {
        alert('Formulario enviado exitosamente');
        // Aquí puedes agregar el código para enviar el formulario
    }
});

// Función para validar el formato del email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}
