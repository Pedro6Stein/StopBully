// Define a chave da API do GPT
const API_KEY = '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';

// Define o modelo a ser utilizado
const MODEL = 'text-davinci-002';

// Cria um cliente para a API do GPT
const openai = new OpenAI(API_KEY);

// Função para enviar uma mensagem do chatbot para o registro de conversa
function sendMessage(message) {
  const log = document.getElementById('chat-log');
  const botMessage = document.createElement('div');
  botMessage.className = 'bot-message';
  botMessage.innerText = message;
  log.appendChild(botMessage);
}

// Adiciona um evento de submit no formulário
const form = document.getElementById('chat-form');
form.addEventListener('submit', async (event) => {
  // Impede que a página seja recarregada
  event.preventDefault();

  // Obtém a mensagem do usuário
  const input = document.getElementById('chat-input');
  const message = input.value;

  // Adiciona a mensagem do usuário ao registro de conversa
  const log = document.getElementById('chat-log');
  const userMessage = document.createElement('div');
  userMessage.className = 'user-message';
  userMessage.innerText = message;
  log.appendChild(userMessage);

  // Obtém a resposta do GPT
  const response = await openai.complete({
    engine: MODEL,
    prompt: message,
    maxTokens: 50,
    n: 1,
    stop: '\n',
    temperature: 0.5,
  });

  // Envia a resposta do GPT para o registro de conversa
  const botResponse = response.data.choices[0].text.trim();
  sendMessage(botResponse);

  // Limpa o campo de entrada
  input.value = '';
});
