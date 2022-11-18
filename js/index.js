//If you want to add more words, it must be done starting with a symbol or with - so that an empty div does not appear
var words = ['-Bienvenido a Equasystems', '-Desarrollo de software', '-Manejo de software', '-Paginas web', '-El mejor servicio te espera...'],
    part,
    i = 0,
    offset = 1,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 100;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 1;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(1, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});