const storyText = document.getElementById('story-text');
const choicesContainer = document.getElementById('choices-container');

// Um objeto que armazena todas as "cenas" do jogo
const scenes = {
    start: {
        text: "Você é **Leo**, um novo aluno na sua nova escola. A **Sra. Vigilante**, sua professora, aponta para uma carteira vazia no fundo da sala. 'Esta era a carteira do Pedro. Sente-se e tente não fazer muito barulho.'",
        choices: [
            { text: "Seguir as instruções", nextScene: "sit_down" },
            { text: "Questionar a professora", nextScene: "question_teacher" }
        ]
    },
    sit_down: {
        text: "Você se senta em silêncio. A Sra. Vigilante parece satisfeita e volta a dar sua aula, mas os outros alunos te olham de forma estranha. De repente, você sente um arrepio e a carteira range, como se alguém estivesse debaixo dela.",
        choices: [
            { text: "Ver o que está debaixo da carteira", nextScene: "under_desk" },
            { text: "Ignorar e prestar atenção na aula", nextScene: "ignore_creepy_noise" }
        ]
    },
    question_teacher: {
        text: "Você se recusa a sentar e pergunta: 'O que aconteceu com Pedro?' A professora sorri de uma forma aterrorizante. 'Crianças curiosas não duram muito aqui...' O que você faz agora?",
        choices: [
            { text: "Correr para fora da sala", nextScene: "run_away" },
            { text: "Ficar e tentar entender", nextScene: "stay_and_understand" }
        ]
    },
    under_desk: {
        text: "Você se abaixa para ver o que está debaixo da carteira. Um bilhete velho, escrito com uma letra trêmula, diz: **'Não confie nela. Ele está aqui.'** O chão começa a tremer e a porta da sala bate forte, trancando vocês por dentro.",
        choices: [
            { text: "Tentar abrir a porta", nextScene: "try_door" },
            { text: "Mostrar o bilhete para um colega", nextScene: "show_note" }
        ]
    },
    ignore_creepy_noise: {
        text: "Você ignora o som e tenta se concentrar, mas o ruído de arranhões vindos da carteira continua. Você sente algo frio tocar seu tornozelo. A Sra. Vigilante te olha e diz: 'Parece que você está com problemas, Leo. Você quer que eu te ajude?'",
        choices: [
            { text: "Pedir ajuda a Sra. Vigilante", nextScene: "ask_for_help" },
            { text: "Chutar o que quer que esteja te tocando", nextScene: "kick_it" }
        ]
    },
    run_away: {
        text: "Você corre o mais rápido que pode, mas a porta da sala se fecha com um baque, trancando você do lado de dentro. As luzes da sala começam a piscar, e você ouve a voz da professora ecoando: 'Você não pode fugir...'",
        choices: [
            { text: "Voltar para a carteira", nextScene: "sit_down" },
            { text: "Chamar por ajuda", nextScene: "call_for_help" }
        ]
    },
    stay_and_understand: {
        text: "Você decide ficar. 'O que você quer dizer?' Você pergunta, mas a Sra. Vigilante não responde. Ela apenas ri, e o bilhete na sua carteira se materializa. O que você faz?",
        choices: [
            { text: "Ler o bilhete", nextScene: "under_desk" }
        ]
    },
    try_door: {
        text: "Você corre para a porta e tenta abri-la, mas ela está trancada. Você ouve passos lentos e pesados vindo em sua direção...",
        choices: [
            { text: "Reiniciar o jogo", nextScene: "start" }
        ]
    },
    show_note: {
        text: "Você tenta mostrar o bilhete para um colega, mas ele olha para você com uma expressão vazia. 'Não tem nada na sua mão', ele diz, e os outros alunos começam a rir.",
        choices: [
            { text: "Reiniciar o jogo", nextScene: "start" }
        ]
    },
    ask_for_help: {
        text: "Você se aproxima da Sra. Vigilante. 'Por favor, me ajude!' Ela sorri e estende a mão para você, mas em vez de dedos, ela tem garras de metal. 'Eu adoraria...'",
        choices: [
            { text: "Reiniciar o jogo", nextScene: "start" }
        ]
    },
    kick_it: {
        text: "Você chuta a carteira com força. Há um grito alto e uma sombra passa correndo por debaixo da sua mesa e vai para a frente da sala. A Sra. Vigilante olha para a sombra e diz: 'Ora, ora. Parece que a visita já chegou. Que falta de educação...'",
        choices: [
            { text: "Reiniciar o jogo", nextScene: "start" }
        ]
    },
    call_for_help: {
        text: "Você grita por ajuda, mas a Sra. Vigilante não reage. Ninguém se mexe. Apenas a voz dela ecoa em sua cabeça: 'Não tem ajuda aqui...'",
        choices: [
            { text: "Reiniciar o jogo", nextScene: "start" }
        ]
    }
};

function startGame() {
    showScene('start');
}

function showScene(sceneName) {
    const scene = scenes[sceneName];
    storyText.innerHTML = scene.text;
    choicesContainer.innerHTML = ''; // Limpa os botões anteriores

    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => showScene(choice.nextScene);
        choicesContainer.appendChild(button);
    });
}

// Inicia o jogo
startGame();