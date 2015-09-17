/*****************************/
/* nao esta mais sendo usada */
/*****************************/
function setCurrent(obj, menu, current)
{
  var cells = document.getElementsByClassName(current); 
  var len = cells.length; 
  for(var i = 0; i < len; i++) 
  { 
     cells[i].className = menu;
  } 
  obj.className = current;
}
/*****************************/

//Abre Janela Pop-Up
function NovaJanela(url, w, h, instancia, redimensionar, status, scroll) {
    winl = (screen.width - w) / 2;
    wint = (screen.height - h) / 2;

    winprops = 'height=' + h + ',width=' + w + ',top=' + wint + ',left=' + winl + ', toolbar=no, location=no, directories=no, status=' + status + ', menubar=no, scrollbars= '+ scroll +',resizable=' + redimensionar;

    win = window.open(url, instancia, winprops);
    window.win.focus();
}

//Abre Janela em Tela Cheia
function NovaJanelaFullScreen(url, instancia) {
    winprops = 'fullscreen=yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes';
    win = window.open(url, instancia, winprops);
    window.win.focus();
}

function AbrirOpiniao(pag) {
    Url = 'popups/opiniao.aspx?Uri=' + pag;
    NovaJanela(Url, 320, 300, 'Opiniao', 'no', 'no', 'no');
}