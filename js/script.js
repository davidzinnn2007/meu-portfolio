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

const modal=$("#pdfModal"), modalTitle=$("#modalTitle"), modalMeta=$("#modalMeta"), modalOpen=$("#modalOpen"), modalDownload=$("#modalDownload"), documentPreview=$("#documentPreview");

function openCert(i){
  const c=certs[i];
  const preview=c.file.replace("assets/certificados/","assets/previews/").replace(".pdf",".jpg");
  documentPreview.src=preview;
  documentPreview.alt=`Pré-visualização de ${c.title}`;
  modalTitle.textContent=c.title;
  modalMeta.innerHTML=`<span>${c.issuer}</span><span>${c.meta}</span>`;
  modalOpen.href=c.file;
  modalDownload.href=c.file;
  modalDownload.setAttribute("download",c.file.split("/").pop());
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
}
function closeModal(){
  modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); documentPreview.src=""; document.body.style.overflow="";
}
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-cert]"); if(b)openCert(+b.dataset.cert);
  if(e.target.matches("[data-close-modal]"))closeModal();
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});


const output=$("#terminalOutput"), form=$("#terminalForm"), input=$("#termInput");
const commands={
 help:"whoami · skills · projects · certificates · contact · clear",
 whoami:"David Rodrigues<br>Computer Science Student<br>Full Stack Developer em formação",
 skills:"Python · Git · GitHub · HTML · CSS · Linux · Systems",
 projects:"library-system · finance-manager · professional-todo<br><span style='color:#526772'>status: planned</span>",
 certificates:"6 certificates available",
 contact:"davidzin0321@gmail.com · Recife, PE",
 "sudo hire david":"Permission granted.<br>Let's talk."
};
function addTerm(cmd,res){const line=document.createElement("div");line.className="term-line";line.innerHTML=`<span class="prompt">david@portfolio:~$</span> ${cmd}`;output.appendChild(line);if(res){const r=document.createElement("div");r.className="term-result";r.innerHTML=res;output.appendChild(r)}output.scrollTop=output.scrollHeight}
form.addEventListener("submit",e=>{e.preventDefault();const cmd=input.value.trim().toLowerCase();if(!cmd)return;if(cmd==="clear"){output.innerHTML="";input.value="";return}addTerm(cmd,commands[cmd]||`command not found: ${cmd}<br>Type <b>help</b> for available commands.`);input.value=""});
$("#terminalClear").onclick=()=>output.innerHTML="";


const menuBtn=$("#menuBtn"),mobileMenu=$("#mobileMenu");
menuBtn.onclick=()=>{const open=mobileMenu.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open);mobileMenu.setAttribute("aria-hidden",!open)};
$$(".mobile-menu a").forEach(a=>a.onclick=()=>{mobileMenu.classList.remove("open");menuBtn.setAttribute("aria-expanded","false")});
$("#topBtn").onclick=()=>scrollTo({top:0,behavior:"smooth"});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
$$(".reveal").forEach(el=>observer.observe(el));

addEventListener("scroll",()=>{const h=document.documentElement;$(".scroll-progress").style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%"},{passive:true});
addEventListener("pointermove",e=>{
  const glow=$(".cursor-glow");
  if(glow){glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px";}
  const card=$("#profileCard");
  if(card && matchMedia("(hover: hover) and (pointer: fine)").matches){
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    card.style.setProperty("--rx", `${(-y*4).toFixed(2)}deg`);
    card.style.setProperty("--ry", `${(x*5).toFixed(2)}deg`);
  }
},{passive:true});
const profileCard=$("#profileCard");
if(profileCard){profileCard.addEventListener("pointerleave",()=>{profileCard.style.setProperty("--rx","0deg");profileCard.style.setProperty("--ry","0deg")});}

