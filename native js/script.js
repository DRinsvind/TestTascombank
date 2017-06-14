//переменная где хранятся все наши заявки
var requests;
// функция по дабавлению значений из localStorage в переменную requests
function getRequests(){
	(localStorage.requests)?requests = JSON.parse(localStorage.requests): requests = [];	
}
//функция по обработки всего json масива значений requests и отправки отдельных request в функцию newTr
function fillTheTable(requests){
	requests.forEach(newTr);
}
//функция по отрисовки новых блоков tr в таблице с id = 'table', а также отоброжения колличества блоков в спане с id = 'count'
function newTr(data){
	var tr = document.createElement('tr');
	tr.innerHTML = "<td>"+data.id+"</td><td>"+data.name+"</td><td>"+data.comment+"</td><td>"+data.date+"</td>";
	table.appendChild(tr);
	count.textContent = requests.length;
}
//функция по валидации формы, при успешной валидации запускается функция newRequest
function validateForm(){

	if(!nameOfUser.value || !comment.value){
		err.style.display = 'block';
		err.textContent = "Заполните пожалуйста все поля";
	}else{
		err.style.display = 'none';
		newRequest();
	} 
	
}
//функция для формирования красивой даты
function getDate(date){
	var d = date;
	  d = [
	    '0' + d.getDate(),
	    '0' + (d.getMonth() + 1),
	    '' + d.getFullYear(),
	    '0' + d.getHours(),
	    '0' + d.getMinutes()
	  ];

	  for (var i = 0; i < d.length; i++) {
	    d[i] = d[i].slice(-2);
	  }

  	return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}
//функция по добавлению новой заявки
function newRequest(){
	var id = requests.length?requests.length:0;
	var newDate = getDate(new Date());
	var newReq = {
		id: id,
		name: nameOfUser.value,
		comment: comment.value,
		date: newDate
	}
	requests.push(newReq);
	localStorage.requests = JSON.stringify(requests);
	nameOfUser.value = '', comment.value = '';
	closeButton.click();
	newTr(newReq);
	getRequests();
	
}
//функция по стартовой инициализации переменной requests и начальной отрисовки таблицы 
function start(){
	getRequests();
	fillTheTable(requests);
}
start();