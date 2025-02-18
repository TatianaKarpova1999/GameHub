const btnModal = document.querySelector(".modal__btn");
        const modal = document.querySelector(".modal ");

        if (modal !== null) {
            btnModal.addEventListener("click", function () {
                modal.classList.add("hidden");
            });
        }

        // Chat assistance - help users
        let openChat = document.querySelector(".help-image");
        let itemChat = document.querySelector(".chat-container");
        let closeChat = document.querySelector(".chat-content");

        if (openChat !== null) {
            setTimeout(() => {
                openChat.classList.add("visible-block");
            }, 2000);

            closeChat.addEventListener("click", function () {
                itemChat.classList.remove("visible-block");
                itemChat.classList.remove("hidden-block");
            });

            openChat.addEventListener("click", function () {
                itemChat.classList.toggle("visible-block");
            });

            document.getElementById("sendButton").addEventListener("click", function () {
                const chatInput = document.getElementById("chatInput");
                const chatWindow = document.getElementById("chatWindow");

                const message = chatInput.value;

                if (message.trim()) {
                    const userMessage = document.createElement("div");
                    userMessage.classList.add("chat-message");
                    userMessage.textContent = message;

                    chatWindow.appendChild(userMessage);

                    const systemMessage = document.createElement("div");
                    systemMessage.classList.add("chat-message");
                    systemMessage.innerHTML = `"Thank you, your message has been accepted. As soon as our specialist is available, we will contact you."`;

                    chatWindow.appendChild(systemMessage);

                    chatWindow.scrollTop = chatWindow.scrollHeight;

                    chatInput.value = "";
                }
            });
        }