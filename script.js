const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];

const certs=[
 {title:"Python Fundamental 1",issuer:"Instituto Federal de Santa Catarina — Aprenda Mais",meta:"20 HORAS · 2026",file:"assets/certificados/Python_Fundamental_1.pdf",content:["Introdução à programação e Python","Dados e operadores","Variáveis","Interação com usuário","Estruturas condicionais"]},
 {title:"Python Fundamental 2",issuer:"Instituto Federal de Santa Catarina — Aprenda Mais",meta:"20 HORAS · 2026",file:"assets/certificados/Python_Fundamental_2.pdf",content:["Operações lógicas e bit-a-bit","Listas","Estruturas de repetição","Matrizes"]},
 {title:"Sistemas Operacionais",issuer:"Instituto Federal do Rio Grande do Sul — Aprenda Mais",meta:"20 HORAS · 2026",file:"assets/certificados/Sistemas_Operacionais.pdf",content:["Estrutura e funções de sistemas operacionais","Multiprogramação","Escalonamento","Memória","Sistemas de arquivos"]},
 {title:"Manutenção de Computadores: hardware, software e evolução",issuer:"Instituto Federal do Rio Grande do Sul — Aprenda Mais",meta:"20 HORAS · 2026",file:"assets/certificados/Manutencao_Computadores_2.pdf",content:["Hardware","Software","Evolução dos computadores","Componentes do computador"]},
 {title:"Manutenção de Computadores: simuladores, sistemas operacionais e montagem",issuer:"Instituto Federal do Rio Grande do Sul — Aprenda Mais",meta:"20 HORAS · 2026",file:"assets/certificados/Manutencao_Computadores_1.pdf",content:["Simuladores","Sistemas operacionais","Montagem de computadores"]},
 {title:"Algoritmos e Lógica de Programação",issuer:"Curso em Vídeo",meta:"40 HORAS · 2026",file:"assets/certificados/Logica_de_Programacao.pdf",content:["Curso em videoaula","Atividades e avaliações","Aproveitamento superior a 70%"]}
];

const certGrid=$("#certGrid");
certGrid.innerHTML=certs.map((c,i)=>`<article class="cert-card reveal"><div class="cert-icon">0${i+1}</div><h3>${c.title}</h3><div class="issuer">${c.issuer}</div><div class="cert-meta"><span>${c.meta}</span></div><ul class="cert-content">${c.content.slice(0,4).map(x=>`<li>${x}</li>`).join("")}</ul><button class="btn cert-btn" data-cert="${i}">Ver certificado ↗</button></article>`).join("");

const modal=$("#pdfModal"), frame=$("#pdfFrame"), modalTitle=$("#modalTitle"), modalMeta=$("#modalMeta"), modalOpen=$("#modalOpen"), modalDownload=$("#modalDownload");
function openCert(i){
 const c=certs[i]; frame.src=c.file; modalTitle.textContent=c.title; modalMeta.innerHTML=`<span>${c.issuer}</span><span>${c.meta}</span>`; modalOpen.href=c.file; modalDownload.href=c.file; modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");frame.src="";document.body.style.overflow=""}
document.addEventListener("click",e=>{const b=e.target.closest("[data-cert]");if(b)openCert(+b.dataset.cert);if(e.target.matches("[data-close-modal]"))closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal();closePalette()}});

const output=$("#terminalOutput"), form=$("#terminalForm"), input=$("#termInput");
const commands={
 help:"whoami · skills · projects · certificates · contact · clear",
 whoami:"David Rodrigues<br>Computer Science Student<br>Backend Developer in Progress",
 skills:"Python · Git · GitHub · HTML · CSS · Linux · Systems",
 projects:"library-system · finance-manager · professional-todo<br><span style='color:#526772'>status: planned</span>",
 certificates:"6 certificates available",
 contact:"davidzin0321@gmail.com · Abreu e Lima — PE",
 "sudo hire david":"Permission granted.<br>Let's talk."
};
function addTerm(cmd,res){const line=document.createElement("div");line.className="term-line";line.innerHTML=`<span class="prompt">david@portfolio:~$</span> ${cmd}`;output.appendChild(line);if(res){const r=document.createElement("div");r.className="term-result";r.innerHTML=res;output.appendChild(r)}output.scrollTop=output.scrollHeight}
form.addEventListener("submit",e=>{e.preventDefault();const cmd=input.value.trim().toLowerCase();if(!cmd)return;if(cmd==="clear"){output.innerHTML="";input.value="";return}addTerm(cmd,commands[cmd]||`command not found: ${cmd}<br>Type <b>help</b> for available commands.`);input.value=""});
$("#terminalClear").onclick=()=>output.innerHTML="";

const palette=$("#palette"), paletteInput=$("#paletteInput"), paletteList=$("#paletteList");
const items=[
 ["Home","#home"],["Sobre","#about"],["Stack","#stack"],["Projetos","#projects"],["Certificados","#certificates"],["Jornada","#journey"],["Contato","#contact"],
 ["Currículo","assets/curriculo/Curriculo_David_Rodrigues_ATS_2026.pdf"],["GitHub","https://github.com/davidzinnn2007"]
];
let selected=0;
function renderPalette(filter=""){const f=filter.toLowerCase();const list=items.filter(x=>x[0].toLowerCase().includes(f));paletteList.innerHTML=list.map((x,i)=>`<button class="palette-item ${i===selected?"selected":""}" data-target="${x[1]}">${x[0]}<span>↵</span></button>`).join("")}
function openPalette(){palette.classList.add("open");palette.setAttribute("aria-hidden","false");paletteInput.value="";selected=0;renderPalette();setTimeout(()=>paletteInput.focus(),30)}
function closePalette(){palette.classList.remove("open");palette.setAttribute("aria-hidden","true")}
function choosePalette(target){closePalette();if(target.startsWith("#"))document.querySelector(target)?.scrollIntoView({behavior:"smooth"});else window.open(target,"_blank","noopener")}
document.addEventListener("click",e=>{if(e.target.matches("[data-close-palette]"))closePalette();const item=e.target.closest(".palette-item");if(item)choosePalette(item.dataset.target)});
paletteInput.addEventListener("input",()=>{selected=0;renderPalette(paletteInput.value)});
paletteInput.addEventListener("keydown",e=>{const n=paletteList.querySelectorAll(".palette-item");if(e.key==="ArrowDown"){e.preventDefault();selected=Math.min(selected+1,n.length-1);renderPalette(paletteInput.value)}if(e.key==="ArrowUp"){e.preventDefault();selected=Math.max(selected-1,0);renderPalette(paletteInput.value)}if(e.key==="Enter"&&n[selected])choosePalette(n[selected].dataset.target)});
document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();openPalette()}});
$("#mobilePalette").onclick=openPalette;

const menuBtn=$("#menuBtn"),mobileMenu=$("#mobileMenu");
menuBtn.onclick=()=>{const open=mobileMenu.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open);mobileMenu.setAttribute("aria-hidden",!open)};
$$(".mobile-menu a").forEach(a=>a.onclick=()=>{mobileMenu.classList.remove("open");menuBtn.setAttribute("aria-expanded","false")});
$("#topBtn").onclick=()=>scrollTo({top:0,behavior:"smooth"});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
$$(".reveal").forEach(el=>observer.observe(el));

addEventListener("scroll",()=>{const h=document.documentElement;$(".scroll-progress").style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%"},{passive:true});
addEventListener("pointermove",e=>{$(".cursor-glow").style.left=e.clientX+"px";$(".cursor-glow").style.top=e.clientY+"px"},{passive:true});
