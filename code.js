//! Post Click 
const icons =document.querySelectorAll('a');
[].forEach.call(icons, (e)=>{e.addEventListener('click', function() {
    if ( ! this.classList.contains('clicked')) {
        this.classList.add('clicked');
    }
});}) 

//! Selector 
const selector = document.getElementById('select');
const submitselect = document.getElementById('submit-select');
var selectedOption = ' '

selector.addEventListener('change', function(){
     selectedOption = this.options[select.selectedIndex];
});

submitselect.addEventListener('click', function(){
    if(selectedOption.value == 'ing'){
        window.open('https://tramites.copnia.gov.co/Copnia_Microsite/CertificateOfGoodStanding/CertificateOfGoodStandingStart', '_blank');
    }
    if(selectedOption.value == 'med'){
        window.open('https://web.sispro.gov.co/THS/Cliente/ConsultasPublicas/ConsultaPublicaDeTHxIdentificacion.aspx', '_blank');
    }
    if(selectedOption.value == 'con'){
        window.open('https://sgr.jcc.gov.co:8181/apex/f?p=138:1:0:::::', '_blank');
    }
    if(selectedOption.value == 'abo'){
        window.open('https://sirna.ramajudicial.gov.co/Paginas/Certificado.aspx', '_blank');
    }
    if(selectedOption.value == 'vig'){
        window.open('https://www.supervigilancia.gov.co/documentos/1060/listado-de-credenciales/', '_blank');
    }
    if(selectedOption.value == 'ele'){
        window.open('https://www.consejoprofesional.org.co/validar-matricula.php?p=7', '_blank');
    }
    if(selectedOption.value == 'ar'){
        window.open('https://cpnaa.gov.co/es/content/validacion-de-autenticidad-del-certificado-de-vigencia-profesional-digital', '_blank');
    }
    if(selectedOption.value == 'adm'){
        window.open('https://tramites.cpae.gov.co/tramites/#', '_blank');
    }
    if(selectedOption.value == 'conte'){
        window.open('https://www.conte.org.co/matriculassc/control/', '_blank');
    }
});
