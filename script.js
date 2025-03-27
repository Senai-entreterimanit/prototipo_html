document.addEventListener("DOMContentLoaded", function() {
    // Rolagem suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Chat interativo
    const chatBtn = document.getElementById("chat-btn");
    const chatBox = document.getElementById("chat-box");
    const closeChat = document.getElementById("close-chat");
    const sendBtn = document.getElementById("send-btn");
    const messageInput = document.getElementById("message");
    const chatContent = document.getElementById("chat-content");

    chatBtn.addEventListener("click", () => {
        chatBox.style.display = "block";
        chatBox.classList.add("fadeIn");
    });
    
    closeChat.addEventListener("click", () => chatBox.style.display = "none");
    
    sendBtn.addEventListener("click", () => {
        let msg = messageInput.value.trim();
        if (msg) {
            addMessage("Você", msg, "user-message");
            setTimeout(() => addMessage("Atendimento", "Em breve responderemos!", "bot-message"), 1000);
            messageInput.value = "";
        }
    });
    
    function addMessage(sender, text, className) {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", className);
        messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatContent.appendChild(messageDiv);
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    // Modal de notificação
    const modal = document.getElementById("notification-modal");
    const closeModal = document.getElementsByClassName("close")[0];

    setTimeout(() => modal.style.display = "block", 3000);
    
    closeModal.onclick = () => modal.style.display = "none";
    
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});