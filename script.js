const form = document.querySelector('form');
        const sucesso = document.querySelector('.sucesso');
        
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            
            // Validação de campos
            if (form.checkValidity()) {
                // Exibir mensagem de sucesso
                sucesso.style.display = 'block';
                
                // Simular envio de dados
                setTimeout(() => {
                    sucesso.style.display = 'none';
                    form.reset();
                }, 3000);
            }
        });