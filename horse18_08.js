/ функция коструктор для создания пробега лошади с учётом отдыха
function GetMassage() {
  this.run = function() {
      var miles = prompt('сколько км?', 0);
      console.log('total mileage ' + miles);
      var arr = miles.split('');
      if (miles > 100 || arr[0] == 0 || arr[0] > 1) {
        var m = arr[0];
        var timerId = setTimeout(function rest() {
          console.log('Лошадь отдыхает после пробега в 10 км 1 сек');
          if (m > 1) setTimeout(rest, 1000);
          --m;
        }, 1000);
      }
      var tired = arr[1];
      return console.log('horse tired ' + (+tired));

    } //else {
    //alert('Где ВЫ видели лошадь которая пробегает 1000км?!')
    // }
}



var h1 = new GetMassage()
h1.run()