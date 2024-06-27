document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    const name = document.getElementById('name').value;
    const message = `Olá, DevMoretti, vim pelo seu portfólio, meu nome é ${name} e gostaria de saber mais sobre seus projetos...`;

    // Número de WhatsApp para onde enviar a mensagem (substitua pelo seu número)
    const whatsappNumber = '+5541985158486';

    // URL do WhatsApp com a mensagem pré-definida
    const whatsappUrl = `https://wa.me/${whatsappNumber}/?text=${encodeURIComponent(message)}`;

    // Abre uma nova aba com o WhatsApp
    window.open(whatsappUrl, '_blank');
});