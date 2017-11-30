// ESTA FUNCIÓN LO QUE HACE ES CAMBIAR EL CSS DEL HTML. VAMOS A CAMBIARLO POR UNA FUNCIÓN QUE CAMBIE LAS CLASES NADA MÁS.
function swapClasses(design, width = window.innerWidth, height = window.innerHeight) {
  $('.element').each(function(){
    // console.log(this);
    this.className ='';
    $(this).addClass('element');
    $(this).addClass('ratio_' + design);
    if(design == '300x250') {
      $('#pre-headline').css('font-size', width*0.024);
      $('#headline').css('font-size', width*0.067);
      $('#subheadline').css('font-size', width*0.0554);
      $('#single-charge').css('font-size', width*0.024);
      $('#cta').css('font-size', width*0.036);
      $('#legal').css('font-size', width*0.017);
    }
    if(design == '700x700') {
      $('#pre-headline').css('font-size', width*0.024);
      $('#headline').css('font-size', width*0.065);
      $('#subheadline').css('font-size', width*0.0528);
      $('#single-charge').css('font-size', width*0.016);
      $('#cta').css('font-size', width*0.032);
      $('#legal').css('font-size', width*0.011);
    }
    if(design == '700x525') {
      $('#pre-headline').css('font-size', width*0.024);
      $('#headline').css('font-size', width*0.065);
      $('#subheadline').css('font-size', width*0.0528);
      $('#single-charge').css('font-size', width*0.016);
      $('#cta').css('font-size', width*0.025);
      $('#legal').css('font-size', width*0.011);
    }
    if(design == '700x350') {
      $('#pre-headline').css('font-size', width*0.023);
      $('#headline').css('font-size', width*0.068);
      $('#subheadline').css('font-size', width*0.055);
      $('#single-charge').css('font-size', width*0.019);
      $('#cta').css('font-size', width*0.026);
      $('#legal').css('font-size', width*0.009);
    }
    if(design == '700x175') {
      $('#pre-headline').css('font-size', width*0.018);
      $('#headline').css('font-size', width*0.033);
      $('#subheadline').css('font-size', width*0.025);
      $('#single-charge').css('font-size', width*0.013);
      $('#cta').css('font-size', width*0.018);
      $('#legal').css('font-size', width*0.009);
    }
    if(design == '525x700') {
      $('#pre-headline').css('font-size', width*0.023);
      $('#headline').css('font-size', width*0.068);
      $('#subheadline').css('font-size', width*0.055);
      $('#single-charge').css('font-size', width*0.022);
      $('#cta').css('font-size', width*0.036);
      $('#legal').css('font-size', width*0.012);
    }
    if(design == '350x700') {
      $('#pre-headline').css('font-size', width*0.043);
      $('#headline').css('font-size', width*0.098);
      $('#subheadline').css('font-size', width*0.085);
      $('#single-charge').css('font-size', width*0.042);
      $('#cta').css('font-size', width*0.056);
      $('#legal').css('font-size', width*0.016);
    }
    if(design == '175x700') {
      $('#pre-headline').css('font-size', width*0.043);
      $('#headline').css('font-size', width*0.098);
      $('#subheadline').css('font-size', width*0.085);
      $('#single-charge').css('font-size', width*0.042);
      $('#cta').css('font-size', width*0.072);
      $('#legal').css('font-size', width*0.056);
    }
    if(design == '1050x175') {
      $('#pre-headline').css('font-size', width*0.013);
      $('#headline').css('font-size', width*0.023);
      $('#subheadline').css('font-size', width*0.018);
      $('#single-charge').css('font-size', width*0.012);
      $('#cta').css('font-size', width*0.017);
      $('#legal').css('font-size', width*0.008);
    }
    if(design == '728x90') {
      $('#pre-headline').css('font-size', width*0.013);
      $('#headline').css('font-size', width*0.029);
      $('#subheadline').css('font-size', width*0.023);
      $('#single-charge').css('font-size', width*0.013);
      $('#cta').css('font-size', width*0.013);
      $('#legal').css('font-size', width*0.009);
    }
    if(design == '320x100') {
      $('#binge-watch').css('font-size', width*0.06);
      $('#shop').css('font-size', width*0.05);
      $('#company').css('font-size', width*0.024);
    }
    if(design == '320x50') {
      $('#binge-watch').css('font-size', width*0.049);
      $('#shop').css('font-size', width*0.045);
      $('#company').css('font-size', width*0.0245);
    }
  });
}
// ESTA FUNCIÓN LO QUE HACE ES MEDIR EL VIEWPORT Y SELECCIONA QUE LAYOUT USAMOS.
function get_design(base,altura){
    ratio = base/altura;
    var options = [0.25, 0.5, 0.75, 1, 1.2, 1.33, 2, 3.2, 4, 6, 6.4, 8.08];
    var closest = null;
    var design = null;
    var img_base = null;
    var img_altura = null;
    $.each(options, function(){
      if (closest == null || Math.abs(this - ratio) < Math.abs(closest - ratio)) {
          closest = this;
      }
    });
    closest_num = Number(closest)
    switch(closest_num){
      case 0.25:
        design = '175x700';
        break;
      case 0.5:
        design = '350x700';
        break;
      case 0.75:
        design = '525x700';
        break;
      case 1:
        design = '700x700';
        break;
      case 1.2:
        design = '300x250';
        break;
      case 1.33:
        design = '700x525';
        break;
      case 2:
        design = '700x350';
        break;
      case 3.2:
        design = '320x100';
        break;
      // case 3.23:
      //   design = '970x300';
      //   break;
      case 4:
        design = '700x175';
        break;
      case 6:
        design = '1050x175';
        break;
      case 6.4:
        design = '320x50';
        break;
      case 8.08:
        design = '728x90';
        break;
    }
    return design;
}

$(document).ready(function(){
    width = window.innerWidth;
    height = window.innerHeight;
    var design = get_design(width,height);
    swapClasses(design, width, height);
    var onresize = function(e) {
       width = e.target.innerWidth;
       height = e.target.innerHeight;
       var design = get_design(width,height);
       swapClasses(design, width, height);
    }
    window.addEventListener("resize", onresize);

    var query = window.location.search.substring(1);
    var vars = query.split("&");
    var lang = vars[0].split("=");

    $.getJSON("lang/"+lang[1]+".json", function(json) {
        var textos = json;
        $('#pre-headline').html(textos.content.pre_headline);
        $('#headline').html(textos.content.headline);
        $('#subheadline').html(textos.content.subheadline);
        $('#binge-watch').html(textos.content.short_subheadline);
        $('#single-charge').html(textos.content.single_charge);
        $('#cta').html(textos.content.cta);
        $('#legal').html(textos.content.legal);
        $('#shop').html(textos.content.shop);
        $('#company').html(textos.content.copyright);
    });
});     