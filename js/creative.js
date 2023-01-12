(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('.portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
  });
  $('.pay').magnificPopup({
    delegate: 'a',
    type: 'iframe',
    iframe: {
      markup: '<div style="background-color: white;    height: 700px;">'+
                '<div class="mfp-close"></div>'+
                '<iframe src="https://pay.hotmart.com/F77669918A" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>'+
              '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
    }    
  });

  


})(jQuery); // End of use strict

//const myTimeout = setTimeout(popup, 1000*60);
function popup() {
  Swal.fire({
    icon: 'question',
    title: 'O que você está esperando para se inscrever no melhor plano de estudos da UFPel?',
    html: '<span style="font-size: small;font-family: sans-serif;">Selecione a opção que melhor descreve sua situação atual:</span><br><br><a onclick="Swal.close()" class="js-scroll-trigger" href="#como_acessar_drive">Você poderia me explicar como funciona o acesso às plataformas? Eu tenho algumas perguntas sobre isso.</a><br><br><a onclick="des()" href="#">Há descontos disponíveis? Eu me inscreveria se houvesse um desconto!<a>',
    footer: '<a target="_blank" href="https://wa.me/message/WJV533TB2KGXO1">Não encontrou sua pergunta? Pergunte-me no WhatsApp!</a>'
  })
}
function des() {
  Swal.fire({
    icon: 'success',
    title: 'Você acaba de receber um desconto exclusivo!',
    html: '<div class=\"pay\"><a target="_blank" href=\"https://pay.hotmart.com/F77669918A?off=063v3pxw\">Aja agora e receba 50% de desconto em sua assinatura!</a></div>',
    showCloseButton: false,
    showConfirmButton: false,
    footer: '<a target="_blank" href="https://wa.me/message/WJV533TB2KGXO1">Não encontrou sua pergunta? Pergunte-me no WhatsApp!</a>'
  })
}
function test(){
Swal.fire({
  title: '',
  html: '<iframe src="https://odontoclub.club.hotmart.com/signup" width="100%" height="500px" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>',
  showCloseButton: true,
  showConfirmButton: false,
  footer: '<a target="_blank" href="https://wa.me/message/WJV533TB2KGXO1">Dúvidas? Pergunte-me no WhatsApp!</a>'
})}
function mensal(){
Swal.fire({
  title: '',
  html: '<iframe src="https://pay.hotmart.com/R78321412L?off=l36flcfa" width="100%" height="500px" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>',
  showCloseButton: true,
  showConfirmButton: false,
  footer: '<a target="_blank" href="https://wa.me/message/WJV533TB2KGXO1">Dúvidas? Pergunte-me no WhatsApp!</a>'
})}
function trimestral(){
Swal.fire({
  title: '',
  html: '<iframe src="https://pay.hotmart.com/R78321412L?off=0tsr6hm5" width="100%" height="500px" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>',
  showCloseButton: true,
  showConfirmButton: false,
  footer: '<a target="_blank" href="https://wa.me/message/WJV533TB2KGXO1">Dúvidas? Pergunte-me no WhatsApp!</a>'
})}