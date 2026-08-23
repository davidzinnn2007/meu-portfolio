# David Rodrigues — Portfólio

Portfólio single-page estático, responsivo e pronto para testar localmente e publicar em hospedagem estática.

## Requisitos

Nenhuma instalação de framework é necessária para a versão de teste. O projeto usa HTML, CSS e JavaScript moderno, mantendo a experiência leve e fácil de estudar.

## Executar localmente

### Opção 1 — abrir diretamente
Abra `index.html` no navegador.

### Opção 2 — servidor local recomendado
Com Python instalado:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

Usar servidor local é recomendado para testar o comportamento dos PDFs e caminhos relativos de forma semelhante a uma hospedagem.

## Estrutura

```text
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── curriculo/
│   │   └── Curriculo_David_Rodrigues_ATS_2026.pdf
│   ├── certificados/
│   │   ├── Python_Fundamental_1.pdf
│   │   ├── Python_Fundamental_2.pdf
│   │   ├── Sistemas_Operacionais.pdf
│   │   ├── Manutencao_Computadores_1.pdf
│   │   ├── Manutencao_Computadores_2.pdf
│   │   └── Logica_de_Programacao.pdf
│   ├── profile/
│   └── images/
└── README.md
```

## Currículo

O currículo real já está em:

`assets/curriculo/Curriculo_David_Rodrigues_ATS_2026.pdf`

Os botões **Ver currículo** e **Baixar PDF** apontam para esse caminho relativo.

## Certificados

Os seis PDFs fornecidos estão em `assets/certificados/`.

Para substituir um certificado, mantenha o nome do arquivo ou atualize o campo `file` correspondente no array `certs` em `js/script.js`.

O visualizador usa um `iframe` nativo do navegador. Os botões do modal abrem e baixam o mesmo arquivo real.

## Foto de perfil

Coloque sua foto real em:

`assets/profile/profile.jpg`

A área do Hero já está reservada para ela. Para exibir a foto, substitua o conteúdo da `.profile-placeholder` no `index.html` por uma imagem, por exemplo:

```html
<img src="assets/profile/profile.jpg" alt="Foto profissional de David Rodrigues">
```

Não há foto fictícia no projeto.

## Adicionar um projeto real

Os projetos atuais estão marcados como `PLANNED` e não afirmam que já existem.

Quando tiver um projeto real, altere o card correspondente no `index.html`. A estrutura visual foi preparada para receber:

- status `LIVE`;
- link GitHub;
- Live Demo;
- Case Study;
- tecnologias;
- problema;
- solução;
- arquitetura;
- screenshots;
- desafios;
- aprendizados.

## Links

O GitHub atual está configurado para:

`https://github.com/davidzinnn2007`

O e-mail usa `mailto:davidzin0321@gmail.com`.

## Command palette

- Windows/Linux: `Ctrl + K`
- macOS: `Cmd + K`

Comandos disponíveis: Home, Sobre, Stack, Projetos, Certificados, Jornada, Contato, Currículo e GitHub.

## Terminal

Comandos:

```text
help
whoami
skills
projects
certificates
contact
clear
sudo hire david
```

## Publicar

Como o site é estático, pode ser publicado em GitHub Pages, Netlify, Vercel, Cloudflare Pages ou outro serviço de hospedagem estática.

Faça upload de **todos os arquivos mantendo a estrutura de pastas**. Os PDFs são referenciados com caminhos relativos, então não dependem de `C:/`, `/mnt/data/` ou `sandbox:/`.

## Observações

- O site não inventa experiência profissional.
- Os três projetos iniciais estão explicitamente como `PLANNED`.
- A stack é apresentada como conhecimento em construção, não como domínio avançado.
- Não há dependência de React/Next.js nesta versão para manter o projeto extremamente simples de testar no celular.
- A fonte é carregada do Google Fonts quando houver internet; se não houver, o sistema usa fontes de fallback.
