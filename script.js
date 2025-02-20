document.addEventListener("DOMContentLoaded", function() {
    const chatBtn = document.getElementById("chat-btn");
    const chatBox = document.getElementById("chat-box");
    const closeChat = document.getElementById("close-chat");
    const sendBtn = document.getElementById("send-btn");
    const messageInput = document.getElementById("message");
    const chatContent = document.getElementById("chat-content");

    // Abre e fecha o chat
    chatBtn.addEventListener("click", () => chatBox.style.display = "block");
    closeChat.addEventListener("click", () => chatBox.style.display = "none");

    // Envia mensagem do usuário
    sendBtn.addEventListener("click", () => {
        let msg = messageInput.value.trim();
        if (msg) {
            addMessage("Você", msg, "user-message");
            setTimeout(() => addMessage("Atendimento", "Em breve responderemos!", "bot-message"), 1000);
            messageInput.value = "";
        }
    });

    // Adiciona mensagens ao chat
    function addMessage(sender, text, className) {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", className);
        messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatContent.appendChild(messageDiv);
        chatContent.scrollTop = chatContent.scrollHeight;
    }
});

const modal = document.getElementById("notification-modal");
const closeModal = document.getElementsByClassName("close")[0];

// Exibe o modal após 3 segundos
setTimeout(() => modal.style.display = "block", 3000);

// Fecha o modal ao clicar no "x"
closeModal.onclick = () => modal.style.display = "none";

// Fecha o modal quando clicar fora dele
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
