// Banco de Questões Completo para SQL (30 Lições com as perguntas exatas)
const lessonsData = {};

const questionsMapping = [
    // Lição 1
    [{ q: "Qual comando SQL é utilizado para consultar ou recuperar dados de uma tabela?", options: ["GET", "EXTRACT", "SELECT", "QUERY"], answer: 2 }],
    // Lição 2
    [{ q: "Para filtrar registros em uma consulta com base em uma condição, qual cláusula você usa?", options: ["WHERE", "FILTER", "HAVING", "CONDITION"], answer: 0 }],
    // Lição 3
    [{ q: "Qual restrição (Constraint) garante que uma coluna não aceite valores nulos e seja única na tabela?", options: ["FOREIGN KEY", "PRIMARY KEY", "CHECK", "DEFAULT"], answer: 1 }],
    // Lição 4
    [{ q: "Qual operador é utilizado para buscar padrões de texto usando coringas (wildcards) como o %?", options: ["EQUALS", "LIKE", "SEARCH", "MATCH"], answer: 1 }],
    // Lição 5
    [{ q: "O que o comando INSERT INTO alunos (nome, idade) VALUES ('Carlos', 21); realiza no banco de dados?", options: ["Atualiza um registro existente", "Insere uma nova linha na tabela 'alunos'", "Deleta a tabela alunos", "Cria uma nova tabela"], answer: 1 }],
    // Lição 6
    [{ q: "Qual comando é usado para modificar dados já existentes em uma tabela?", options: ["ALTER TABLE", "MODIFY", "UPDATE", "CHANGE"], answer: 2 }],
    // Lição 7
    [{ q: "Como você remove registros de uma tabela sem apagar a estrutura dela?", options: ["DROP TABLE", "DELETE FROM", "REMOVE TABLE", "TRUNCATE STRUCTURE"], answer: 1 }],
    // Lição 8
    [{ q: "Qual cláusula é utilizada para ordenar o resultado de uma consulta em ordem ascendente ou descendente?", options: ["SORT BY", "ORDER BY", "GROUP BY", "RANK BY"], answer: 1 }],
    // Lição 9
    [{ q: "Para limitar o número de linhas retornadas por uma consulta em alguns SGBDs (como MySQL), qual comando é utilizado no final?", options: ["TOP", "LIMIT", "MAX_ROWS", "END"], answer: 1 }],
    // Lição 10 (Checkpoint 1)
    [{ q: "Qual comando é usado para alterar a estrutura de uma tabela existente (ex: adicionar uma nova coluna)?", options: ["UPDATE TABLE", "MODIFY TABLE", "ALTER TABLE", "CHANGE TABLE"], answer: 2 }],
    
    // Lição 11
    [{ q: "Qual tipo de JOIN retorna apenas os registros que possuem correspondência em ambas as tabelas envolvidas?", options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL OUTER JOIN"], answer: 2 }],
    // Lição 12
    [{ q: "Se você usar um LEFT JOIN entre duas tabelas, o que acontece com os registros da tabela à esquerda que não têm correspondência na tabela à direita?", options: ["Eles são excluídos do resultado", "Eles aparecem com valores NULL nas colunas da tabela da direita", "O banco de dados gera um erro de sintaxe", "Eles duplicam automaticamente"], answer: 1 }],
    // Lição 13
    [{ q: "Para que serve a cláusula GROUP BY em uma consulta SQL?", options: ["Para ordenar os registros por nome", "Para agrupar linhas que possuem o mesmo valor em colunas especificadas para uso com funções de agregação", "Para filtrar departamentos vazios", "Para deletar registros duplicados"], answer: 1 }],
    // Lição 14
    [{ q: "Qual função de agregação é utilizada para retornar o somatório dos valores de uma coluna numérica?", options: ["TOTAL()", "ADD()", "SUM()", "COUNT_SUM()"], answer: 2 }],
    // Lição 15
    [{ q: "Analisando a query SELECT departamento, COUNT(*) FROM funcionarios GROUP BY departamento;, o que ela faz?", options: ["Conta quantos funcionários existem em cada departamento", "Conta o total de departamentos sem funcionários", "Mostra os funcionários ordenados por departamento", "Retorna apenas o primeiro departamento cadastrado"], answer: 0 }],
    // Lição 16
    [{ q: "Qual função retorna o valor médio de uma coluna numérica?", options: ["AVERAGE()", "MEAN()", "AVG()", "MEDIAN()"], answer: 2 }],
    // Lição 17
    [{ q: "Qual é a diferença principal entre as cláusulas WHERE e HAVING?", options: ["WHERE filtra antes do agrupamento (GROUP BY), enquanto HAVING filtra depois do agrupamento", "HAVING é usado apenas em comandos INSERT", "WHERE só funciona com funções de agregação", "Não há nenhuma diferença prática"], answer: 0 }],
    // Lição 18
    [{ q: "Qual operador lógico é utilizado para verificar se um valor está dentro de um conjunto específico de valores (ex: IN (1, 2, 3))?", options: ["WITHIN", "INSIDE", "IN", "BETWEEN_SET"], answer: 2 }],
    // Lição 19
    [{ q: "Para verificar se um valor está dentro de um intervalo numérico ou de datas inclusivo, qual operador utilizamos?", options: ["RANGE", "BETWEEN", "LIMIT", "INTERVAL"], answer: 1 }],
    // Lição 20 (Checkpoint 2)
    [{ q: "Qual cláusula filtra os resultados de uma função de agregação (como SUM ou COUNT) após a aplicação de um GROUP BY?", options: ["WHERE", "HAVING", "FILTER", "LIMIT"], answer: 1 }],

    // Lição 21
    [{ q: "O que caracteriza uma Subquery (subconsulta) em SQL?", options: ["Uma consulta dentro de outra consulta", "Uma consulta que roda direto no disco rígido", "Um erro proposital de sintaxe", "Uma tabela temporária física criada no banco"], answer: 0 }],
    // Lição 22
    [{ q: "Para que serve o conceito de Índices (INDEX) em um banco de dados relacional?", options: ["Para ocupar mais espaço em disco", "Para acelerar a velocidade das consultas de busca (SELECT)", "Para criptografar senhas de usuários", "Para impedir exclusões acidentais"], answer: 1 }],
    // Lição 23
    [{ q: "O que significa a sigla ACID nas propriedades de transações de banco de dados?", options: ["Atomicidade, Consistência, Isolamento, Durabilidade", "Agilidade, Conexão, Integridade, Dinamismo", "Autenticação, Controle, Indexação, Definição", "Acesso, Cópia, Inclusão, Deleção"], answer: 0 }],
    // Lição 24
    [{ q: "Qual comando é utilizado para salvar permanentemente as alterações feitas em uma transação atual?", options: ["SAVE", "COMMIT", "ROLLBACK", "END TRANSACTION"], answer: 1 }],
    // Lição 25
    [{ q: "Caso ocorra um erro durante uma transação e você precise desfazer todas as operações feitas desde o seu início, qual comando você usa?", options: ["CANCEL", "UNDO", "ROLLBACK", "REVERT"], answer: 2 }],
    // Lição 26
    [{ q: "O que é uma VIEW (Visão) em SQL?", options: ["Uma cópia física e estática de uma tabela", "Uma consulta armazenada no banco que se comporta como uma tabela virtual", "Um relatório impresso em formato PDF", "Uma ferramenta de interface gráfica"], answer: 1 }],
    // Lição 27
    [{ q: "Qual comando DCL (Data Control Language) é usado para conceder privilégios de acesso a um usuário do banco de dados?", options: ["ALLOW", "GRANT", "PERMIT", "ACCESS"], answer: 1 }],
    // Lição 28
    [{ q: "O que um comando REVOKE faz em um SGBD?", options: ["Deleta uma tabela inteira", "Retira ou cancela privilégios de acesso concedidos a um usuário", "Desfaz a última alteração via ROLLBACK", "Apaga o log de transações"], answer: 1 }],
    // Lição 29
    [{ q: "O que o principal objetivo da Normalização de Bancos de Dados nas primeiras formas normais (1NF, 2NF, 3NF)?", options: ["Aumentar a redundância de dados para melhorar a segurança", "Reduzir a redundância de dados e evitar anomalias de inserção, atualização e exclusão", "Deixar as consultas SQL mais lentas e complexas", "Eliminar a necessidade de chaves primárias"], answer: 1 }],
    // Lição 30
    [{ q: "Qual comando é utilizado para apagar completamente uma tabela do banco de dados (estrutura e dados)?", options: ["DELETE", "DROP TABLE", "CLEAR TABLE", "REMOVE"], answer: 1 }]
];

// Populando lessonsData de 1 a 30
for (let i = 1; i <= 30; i++) {
    let tag = i <= 10 ? "Parte 1 - Fundamentos" : i <= 20 ? "Parte 2 - JOINs & Agregação" : "Parte 3 - Avançado";
    if (i === 10 || i === 20) tag = "Checkpoint Oficial";
    
    lessonsData[i] = {
        title: `Lição ${i}`,
        tag: tag,
        code: i === 5 ? "INSERT INTO alunos (nome, idade) VALUES ('Carlos', 21);" : i === 15 ? "SELECT departamento, COUNT(*) FROM funcionarios GROUP BY departamento;" : null,
        questions: questionsMapping[i - 1]
    };
}

// Lição 31: O DESAFIO SUPREMO FINAL (Boss)
lessonsData[31] = {
    title: "Desafio Supremo: SQL Hardcore",
    tag: "Teste Final - Geral",
    code: "SELECT e.nome, d.setor, e.salario \nFROM empregados e \nJOIN departamentos d ON e.dept_id = d.id \nWHERE e.salario > (SELECT AVG(salario) FROM empregados) \nORDER BY e.salario DESC;",
    questions: [
        {
            q: "Analisando a query avançada acima, o que ela retorna exatamente?",
            options: [
                "Apenas os departamentos que não possuem empregados",
                "Empregados com salário acima da média da empresa, ordenados do maior para o menor, com seus respectivos setores",
                "O salário médio de todos os departamentos agrupados por setor",
                "Uma listagem de erros de otimização de índices"
            ],
            answer: 1
        }
    ]
};

// Estado do Usuário
let userState = {
    xp: parseInt(localStorage.getItem('sqlingo_xp')) || 0,
    lives: parseInt(localStorage.getItem('sqlingo_lives')) || 5,
    completedLessons: JSON.parse(localStorage.getItem('sqlingo_completed')) || []
};

let currentLessonId = null;
let currentQuestionIndex = 0;
let currentSelectedOption = null;
let currentQuestionsList = [];

// Elementos da DOM
const welcomeScreen = document.getElementById('welcome-screen');
const pathScreen = document.getElementById('path-screen');
const lessonScreen = document.getElementById('lesson-screen');
const modalScreen = document.getElementById('modal-screen');

const startBtn = document.getElementById('start-btn');
const nodesContainer = document.getElementById('nodes-container');
const userXpSpan = document.getElementById('user-xp');
const userLivesSpan = document.getElementById('user-lives');

const quitLessonBtn = document.getElementById('quit-lesson');
const lessonProgress = document.getElementById('lesson-progress');
const lessonLivesCount = document.getElementById('lesson-lives-count');
const questionTag = document.getElementById('question-tag');
const questionTitle = document.getElementById('question-title');
const codeSnippetBox = document.getElementById('code-snippet-box');
const optionsContainer = document.getElementById('options-container');
const checkBtn = document.getElementById('check-btn');
const feedbackContent = document.getElementById('feedback-content');

const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalBtn = document.getElementById('modal-btn');

// Inicialização
function initApp() {
    updateStatsDisplay();
    renderPath();

    startBtn.addEventListener('click', () => {
        welcomeScreen.classList.remove('active');
        pathScreen.classList.add('active');
    });

    quitLessonBtn.addEventListener('click', () => {
        if (confirm("Deseja mesmo sair da lição? Seu progresso atual será perdido.")) {
            lessonScreen.classList.remove('active');
            pathScreen.classList.add('active');
            renderPath();
        }
    });

    checkBtn.addEventListener('click', handleCheckAnswer);
}

function updateStatsDisplay() {
    userXpSpan.textContent = userState.xp;
    userLivesSpan.textContent = userState.lives;
    localStorage.setItem('sqlingo_xp', userState.xp);
    localStorage.setItem('sqlingo_lives', userState.lives);
    localStorage.setItem('sqlingo_completed', JSON.stringify(userState.completedLessons));
}

// Renderizar a Trilha estilo Duolingo (1 a 31)
function renderPath() {
    nodesContainer.innerHTML = '';

    for (let i = 1; i <= 31; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'node-wrapper';

        const node = document.createElement('button');
        node.className = 'lesson-node';
        node.textContent = i === 31 ? 'TEST' : i;

        const isCompleted = userState.completedLessons.includes(i);
        const isUnlocked = i === 1 || userState.completedLessons.includes(i - 1) || userState.completedLessons.includes(i);

        if (i === 10 || i === 20) {
            node.classList.add('checkpoint');
        }
        if (i === 31) {
            node.classList.add('boss');
        }

        if (isCompleted) {
            node.classList.add('completed');
            node.innerHTML = '<i class="fa-solid fa-check"></i>';
        } else if (isUnlocked) {
            node.classList.add('unlocked');
        }

        node.addEventListener('click', () => {
            if (isUnlocked || isCompleted) {
                startLesson(i);
            } else {
                alert("Complete a lição anterior para desbloquear esta etapa!");
            }
        });

        wrapper.appendChild(node);
        nodesContainer.appendChild(wrapper);
    }
}

// Iniciar Lição
function startLesson(id) {
    if (userState.lives <= 0) {
        alert("Suas vidas acabaram! Espere recarregar ou reinicie.");
        return;
    }

    currentLessonId = id;
    currentQuestionIndex = 0;
    currentQuestionsList = lessonsData[id].questions;

    pathScreen.classList.remove('active');
    lessonScreen.classList.add('active');

    loadQuestion();
}

function loadQuestion() {
    currentSelectedOption = null;
    checkBtn.classList.add('disabled');
    checkBtn.textContent = "Verificar";
    feedbackContent.textContent = "";
    feedbackContent.className = "feedback-content";

    const lessonData = lessonsData[currentLessonId];
    const q = currentQuestionsList[currentQuestionIndex];

    questionTag.textContent = lessonData.tag;
    questionTitle.textContent = q.q;

    if (lessonData.code && currentQuestionIndex === 0) {
        codeSnippetBox.textContent = lessonData.code;
        codeSnippetBox.classList.remove('hidden');
    } else {
        codeSnippetBox.classList.add('hidden');
    }

    const progressPercent = (currentQuestionIndex / currentQuestionsList.length) * 100;
    lessonProgress.style.width = `${progressPercent}%`;
    lessonLivesCount.textContent = userState.lives;

    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.addEventListener('click', () => selectOption(index, btn));
        optionsContainer.appendChild(btn);
    });
}

function selectOption(index, btnElement) {
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');
    currentSelectedOption = index;
    checkBtn.classList.remove('disabled');
}

function handleCheckAnswer() {
    if (currentSelectedOption === null) return;

    const q = currentQuestionsList[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option-btn');

    if (currentSelectedOption === q.answer) {
        optionButtons[currentSelectedOption].classList.add('correct');
        feedbackContent.textContent = "Resposta correta! Query executada com sucesso.";
        feedbackContent.className = "feedback-content correct";
        checkBtn.textContent = "Continuar";
        checkBtn.onclick = nextStep;
    } else {
        optionButtons[currentSelectedOption].classList.add('wrong');
        optionButtons[q.answer].classList.add('correct');
        
        userState.lives = Math.max(0, userState.lives - 1);
        updateStatsDisplay();

        feedbackContent.textContent = "Ops! Erro de sintaxe ou conceito incorreto.";
        feedbackContent.className = "feedback-content wrong";
        checkBtn.textContent = "Continuar";
        checkBtn.onclick = nextStep;

        if (userState.lives === 0) {
            setTimeout(() => {
                alert("Você perdeu todas as vidas!");
                lessonScreen.classList.remove('active');
                pathScreen.classList.add('active');
                userState.lives = 5;
                updateStatsDisplay();
                renderPath();
            }, 1500);
            return;
        }
    }
}

function nextStep() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestionsList.length) {
        checkBtn.onclick = handleCheckAnswer;
        loadQuestion();
    } else {
        finishLesson();
    }
}

function finishLesson() {
    lessonScreen.classList.remove('active');
    modalScreen.classList.remove('hidden');

    userState.xp += currentLessonId === 31 ? 50 : 15;
    if (!userState.completedLessons.includes(currentLessonId)) {
        userState.completedLessons.push(currentLessonId);
    }
    updateStatsDisplay();

    if (currentLessonId === 31) {
        modalTitle.textContent = "Parabéns, Mestre SQL!";
        modalText.textContent = "Você concluiu todas as lições e o desafio final! Pronto para gabaritar a prova!";
    } else {
        modalTitle.textContent = "Lição Concluída!";
        modalText.textContent = "Você ganhou XP e está mais próximo de dominar a matéria!";
    }

    modalBtn.onclick = () => {
        modalScreen.classList.add('hidden');
        pathScreen.classList.add('active');
        renderPath();
    };
}

window.onload = initApp;