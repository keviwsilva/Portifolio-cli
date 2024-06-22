// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
export const help = async (args: string[]): Promise<string> => {
  const commandDescriptions = {
    "help": "Exibe uma lista de comandos disponíveis.",
    "repo": "Abre o repositório do projeto no GitHub.",
    "about": "Fornece informações sobre o script e seu autor.",
    "resume": "Abre o currículo do autor.",
    "projetos": "Mostra uma lista de projetos.",
    "projeto_1": "Exibe uma descrição detalhada do projeto Patrify.",
    "projeto_2": "Exibe uma descrição detalhada do projeto email-sender.",
    "projeto_3": "Exibe uma descrição detalhada do projeto Shadow-Search.",
    "email": "Abre o endereço de e-mail do autor em uma nova aba.",
    "github": "Abre o perfil do GitHub do autor em uma nova aba.",
    "linkedin": "Abre o perfil do LinkedIn do autor em uma nova aba.",
    "google": "Pesquisa o termo no Google.",
    "youtube": "Pesquisa o termo no YouTube.",
    "duckduckgo": "Pesquisa o termo no DuckDuckGo.",
    "bing": "Pesquisa o termo no Bing.",
    "reddit": "Pesquisa o termo no Reddit.",
    "echo": "Repete os argumentos fornecidos.",
    "whoami": "Exibe o nome de usuário atual.",
    "ls": "Simula um comando básico 'ls' (não funcional).",
    "cd": "Simula um comando básico 'cd' (não funcional).",
    "date": "Exibe a data e hora atuais.",
    "sudo": "Exibe uma mensagem humorística em vez de executar um comando sudo.",
    "banner": "Exibe um banner de boas-vindas com a foto de perfil do autor e uma breve introdução."
  };

  const commands = Object.keys(commandDescriptions);
  const maxCommandLength = Math.max(...commands.map(command => command.length));

  let formattedCommands = '';
  for (const [command, description] of Object.entries(commandDescriptions)) {
    formattedCommands += `${command.padEnd(maxCommandLength)} : ${description}\n`;
  }

  return `Bem-vindo! Aqui estão todos os comandos disponíveis:

${formattedCommands}

[tab]: completar comando.
[ctrl+l]/clear: limpar terminal.

Digite 'sumfetch' para exibir um resumo.
`;
};


// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Oi, eu sou o ${config.name}. 
Bem vindo ao meu repositório!
Mais sobre mim

sumfetch - sumário pequeno.
resume - meu curriculo.
readme - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};



export const projetos = async (args: string[]): Promise<string> => {
  return `
Escolha o projeto e escreva: "projeto_'número do projeto'" 
  \n 
  <div class='projetos' style="display: flex; flex-wrap: wrap; flex-direction: column; gap:15px;">
  <div>
  1. Projeto Patrify: 
<img class="project-img"src="../../../patrify.png" width="230px">
  </div>
  <div>
2. Projeto email-sender: 
<img class="project-img"src="../../../emailsender.png" width="230px">
  </div>
  <div>
3. Projeto Shadow-Search: 
<img class="project-img"src="../../../shadowsearch.png" width="260px">
</div>     
</div> 
 <style>
    @media (max-width: 600px) {
      
      .project-img {
        width: 75vw;
      }
    }
  </style>`;
};



export const projeto_1 = async (args: string[]): Promise<string> => {
  return `
  <div class='projetos' style="display: flex; flex-wrap: wrap; flex-direction: column; gap:15px;">
 
Projeto Patrify: 
<img class="project-img"src="../../../patrify.png" width="530px">
  <p>
------------------------
Descrição
Patrify é um gestor de bens e ativos desenvolvido com Angular 16. 
Este projeto foi criado como parte do meu Trabalho de Conclusão de Curso (TCC) e 
tem como objetivo facilitar a gestão e monitoramento de propriedades e ativos.

------------------------

Função

Tive função como dev fullstack pois realizei a Integração de API, conexão entre Backend e Frontend, e criação do Backend.

------------------------

Funcionalidades:

Cadastro de Bens e Ativos: Permite adicionar, editar e remover bens e ativos.
Visualização de Informações: Exibe detalhes sobre cada bem ou ativo cadastrado.
Descarte: Função de descarte inteligente baseado no tipo do ativo que será desativado.
Gráficos: Gráficos que são atualizados em tempo real baseado no filtro definido.

------------------------

Tecnologias Utilizadas:

Angular 16: Framework principal para desenvolvimento da aplicação.
TypeScript: Linguagem de programação utilizada.
HTML5 & CSS3: Tecnologias para construção da interface do usuário.
Tailwind CSS: Framework CSS para estilização da aplicação.
Node.js: Servidor backend para API RESTful.
PostgreSQL: Linguagem de Banco de Dados utilizada para armazenamento de dados.

------------------------

Link do site

<u><a class="text-light-blue dark:text-dark-blue underline" href="https://patrify.vercel.app/patrify" target="_blank">site Patrify</a></u>
      
</div> 
 <style>
    @media (max-width: 600px) {
      
      .project-img {
        width: 75vw;
      }
    }
  </style>`;
};



export const projeto_2 = async (args: string[]): Promise<string> => {
  return `
  <div class='projetos' style="display: flex; flex-wrap: wrap; flex-direction: column; gap:15px;">
  
Projeto email-sender: 
<img class="project-img"src="../../../emailsender.png" width="530px">
   <p>
------------------------
Envio de e-mails:

Envia e-mails para vários destinatários de uma só vez.
Permite a personalização do assunto de cada e-mail.
Possibilita a inclusão de anexos nos e-mails.


------------------------

Funcionalidades Adicionais:

Interface de menu interativa para facilitar o uso.
Opção para selecionar destinatários de um arquivo de texto.
Possibilidade de personalizar o corpo do e-mail (opcional).

------------------------

Configuração:

As configurações de e-mail (servidor SMTP, porta, etc.) podem ser configuradas diretamente no script.
A senha do e-mail é armazenada em um arquivo separado (pws.txt) por motivos de segurança.

------------------------

Resumo:

Este script Python oferece uma ferramenta prática para enviar e-mails em massa com anexos, personalização 
de assuntos e seleção de destinatários de um arquivo de texto. A interface de menu interativa facilita o 
uso e torna o processo mais intuitivo.

------------------------

Link do repositório
<u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/keviwsilva/Email-sender" target="_blank">Github Shadow Search</a></u>
      
</div> 
 <style>
    @media (max-width: 600px) {
      
      .project-img {
        width: 75vw;
      }
    }
  </style>`;
};


export const projeto_3 = async (args: string[]): Promise<string> => {
  return `
  <div class='projetos' style="display: flex; flex-wrap: wrap; flex-direction: column; gap:15px; align-items:start;">
 
Projeto Shasow-search:
   <img class="project-img"src="../../../shadowsearch.png" width=530px">
   <b><h2>Descrição</h2></b>
   <p>
------------------------

O projeto utiliza APIs da Riot Games para obter informações sobre jogadores e partidas de LoL, 
utilizando o framework Angular para sua criação, ajudando em seu design e reponsividade.

------------------------

Funções:

Informações do Jogador: Nome, nível, conta e região.

Maestria: Nível de maestria com cada campeão.

Histórico de Partidas: IDs das 20 últimas partidas.

Detalhes da Partida: Estatísticas e eventos de uma partida específica.

Rank: Classificação em cada fila ranqueada.

------------------------

Observações:

Chave API da Riot Games necessária.
Limites de requisição e regras de uso.
Mudanças nas APIs podem ocorrer.

------------------------
Exemplo de Uso:

Site com estatísticas de jogadores (nível, maestria, partidas, rank).</p>

------------------------

Link do repositório
   <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/keviwsilva/Shadow-search--api-lol" target="_blank">Github Shadow Search</a></u>
      
</div> 
 <style>
    @media (max-width: 600px) {
      
      .project-img {
        width: 75vw;
      }
    }
  </style>`;
};





// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const youtube = async (args: string[]): Promise<string> => {
  window.open(`https://www.youtube.com/results?search_query=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `alguns
repositorios
que 
nunca
vão
existir
  `;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(() => {
    window.open('https://www.youtube.com/watch?v=jVmpzWwWU00', '_blank'); 
  }, 3000);
  return `Permissão negada: com pouco poder vem... nenhuma responsabilidade? escute a música de desenvolvedor fullstack`;
};


export const banner = (args?: string[]): string => {
  return `
  <div style="
    display: inline-flex; 
    align-items: center; 
    gap: 10px; 
    flex-wrap: wrap;
  ">
    <img src="../../../profile.jpeg" style="
      width: 15vw; 
      clip-path: circle(45%);
      min-width: 100px;
    ">
    <pre style="
      font-size: 1vw;
      white-space: pre-wrap;
      word-wrap: break-word;
      margin: 0;
    ">
██╗  ██╗███████╗██╗   ██╗██╗███╗   ██╗   
██║ ██╔╝██╔════╝██║   ██║██║████╗  ██║    
█████╔╝ █████╗  ██║   ██║██║██╔██╗ ██║    
██╔═██╗ ██╔══╝  ╚██╗ ██╔╝██║██║╚██╗██║   
██║  ██╗███████╗ ╚████╔╝ ██║██║ ╚████║    
╚═╝  ╚═╝╚══════╝  ╚═══╝  ╚═╝╚═╝  ╚═══╝     
    </pre>
  </div>
Olá sou desenvolvedor Júnior, que ama buscar mais conhecimentos sobre as 
ferramentas, tenho conhecimento com <b>Angular</b>, <b>React</b>, <b>NodeJs</b>,<b>JavaScript</b>,
<b>TypeScript</b>, <b>PHP</b>, <b>SQL</b>, <b>MySQL</b>, <b>PostgreSQL</b>, <b>HTML</b>, <b>CSS</b>, <b>SCSS</b>.
Integrações de APIs de terceiros, implementação de arquiteturas backend e frontend, layouts em HTML e CSS.
Conhecimento em controle de versão Git

Atualmete trabalho como jovem aprendiz em manutençao de computadores e trabalho como freelancer na criação de aplicações web

Um pouco dos comandos do site
  <p>Escreva 'help' para ver a lista todos os comandos disponíveis.</p>
  <p>Escreva 'sumfetch' para mostrar um Sumário.</p>
  <p>Escreva 'about' para saber o que existe aqui.</p>
  <p>Escreva 'repo' ou clique <u><a class="text-light-blue dark:text-dark-blue underline" href="\${config.repo}" target="_blank">aqui</a></u> para ir ao GitHub.</p>
  <style>
    @media (max-width: 600px) {
      pre {
        font-size: 3vw;
      }
      img {
        width: 25vw;
      }
    }

  </style>
  `;
};
