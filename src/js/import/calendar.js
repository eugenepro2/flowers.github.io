import $ from 'jquery';
import datapicker from 'air-datepicker';

//Добавление новой функции в класс Date
Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
var date = new Date();

//Инициализация AirDatapicker(Календарь)
let picker = $('#datepicker').datepicker({
  minDate: date.addDays(1)
}).data('datepicker');
//Вывод даты в значение инпута
if($('#datepicker').length) {
  picker.selectDate(date.addDays(1));
}

