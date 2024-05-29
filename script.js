let bas = document.querySelector('.bas');
let bas1 = document.querySelector('.bas1');
let bas2 = document.querySelector('.bas2');
let cas = document.querySelector('.cas');
let cas1 = document.querySelector('.cas1');
let cas2 = document.querySelector('.cas2');
let chu = document.querySelector('.chu');
let chu1 = document.querySelector('.chu1');
let chu2 = document.querySelector('.chu2');
let cor = document.querySelector('.cor');
let cor1 = document.querySelector('.cor1');
let cor2 = document.querySelector('.cor2');
let skt = document.querySelector('.skt');
let skt1 = document.querySelector('.skt1');
let skt2 = document.querySelector('.skt2');
let c1 = document.querySelector('.c1');
let c3 = document.querySelector('.c3');
let c5 = document.querySelector('.c5');
let basc = document.querySelector('#basc');
let chuc = document.querySelector('#chuc');
let corc = document.querySelector('#corc');
let casc = document.querySelector('#casc');
let sktc = document.querySelector('#sktc');


let enviar = document.querySelector('#enviar')
enviar.addEventListener('click', verificar)

function verificar(){
        bas.style.display = "none";
        bas1.style.display = "none";
        bas2.style.display = "none";
        chu2.style.display = "none";
        chu.style.display = "none";
        chu1.style.display = "none";
        cor.style.display = "none";
        cor1.style.display = "none";
        cor2.style.display = "none";
        skt.style.display = "none";
        skt1.style.display = "none";
        skt2.style.display = "none";
        cas2.style.display = "none";   
        cas.style.display = "none"; 
        cas1.style.display = "none";  
        

        if (basc.checked){
                bas.style.display = "flex";
                bas1.style.display = "flex";
                bas2.style.display = "flex";
        }

        if (casc.checked){
                cas.style.display = "flex";
                cas1.style.display = "flex";
                cas2.style.display = "flex";
        }

        if (chuc.checked){
                chu.style.display = "flex";
                chu1.style.display = "flex";
                chu2.style.display = "flex";
        }

        if (corc.checked){
                cor.style.display = "flex";
                cor1.style.display = "flex";
                cor2.style.display = "flex";
        }

        if (sktc.checked){
                skt.style.display = "flex";
                skt1.style.display = "flex";
                skt2.style.display = "flex";
        }
}

window.addEventListener("scroll", function(){
        let header = this.document.querySelector('.nav')
        let header1 = this.document.querySelector('.nav1')

        header.classList.toggle('rolagem', window.scrollY > 0)
        header1.classList.toggle('rolagem1', window.scrollY > 0)
})

function menuShow() {
        let menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            document.querySelector('.icon').src = "img/menu_white_36dp.svg";
        } else {
            menuMobile.classList.add('open');
            document.querySelector('.icon').src = "img/close_white_36dp.svg";
        }
}