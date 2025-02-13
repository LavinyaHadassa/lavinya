document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const whatsapp = document.getElementById("whatsapp").value;
        const message = document.getElementById("message").value;
        
        // Aqui você pode adicionar código para enviar os dados do formulário a um servidor, se necessário.
        
        // Exibe uma mensagem de confirmação
        alert("Obrigado, " + name + "! Sua mensagem foi enviada com sucesso.");
        
        // Limpa o formulário
        form.reset();
    });
});
