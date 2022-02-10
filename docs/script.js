for (let k = 0; k < 10; k++) {
   function makeid() {
      var text = "";
      var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 6; i++) {
         text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
   }
   let link = document.querySelectorAll('.mahmud_link');

   let qwe = 'https://prnt.sc/' + makeid();

   setTimeout(() => {
      link[k].href = qwe;
   }, 500);
}
