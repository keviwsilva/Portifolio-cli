// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' \n';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
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
Mais sobre mim:
'sumfetch' - sumário pequeno.
'resume' - meu curriculo.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};



export const projetos = async (args: string[]): Promise<string> => {
  return `
Escolha o projeto e escreva: "project 'número do projeto'" 
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
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
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
  <p>Escreva 'help' para ver a lista de comandos disponíveis.</p>
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
