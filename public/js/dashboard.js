var name = "";
var day = "";
var time = "";
var appointArray = [];
var example = {};
var dataObject = {};

console.log("test 1" + appointArray);

// function getData() {
$.get("/api/all", function(dbPost) {

  var data = JSON.parse(JSON.stringify(dbPost));


  for(var i = 0; i < data.length; i ++) {

      name = data[i].name;
      day = data[i].day;
      time = data[i].time

      example = 

      {
            title: name, 
            start: day + "T" + time,
      }

      console.log(example);

      dataObject = JSON.parse(JSON.stringify(example));

      appointArray.push(dataObject);

      console.log("test!!!!" + appointArray);


  }

  $('#calendar').fullCalendar({
            weekends: false, // will hide Saturdays and Sundays
            editable: true,
            header: {
                left: "prev,next today",
                center: "title",
                right: 'month,agendaWeek,agendaDay'
              },
              events: appointArray
        });
});