// $(document).ready(function() {

	

//     // page is now ready, initialize the calendar...

//     $('#calendar').fullCalendar({
//     	weekends: false, // will hide Saturdays and Sundays
//     	editable: true,
//     	header: {
//     		left: "prev,next today",
//     		center: "title",
//     		right: 'month,agendaWeek,agendaDay'
//     	},
//     	events: [
//   		// all day event
//   			{
//     		title  : 'Meeting',
//     		start  : '2017-08-23T10:30:00',
//     		end	   : '2017-08-23T11:30:00'
//   			},

//   			{
//   				title: 'Workshop',
//   				start: '2017-08-23T11:30:00',
//     			end: '2017-08-23T17:30:00'
//   			},

//   			{
//   				title: "Test Event",
//   				start: "2017-08-25T06:00:00",
//   				end: "2017-08-25T07:00:00"
//   			}
// 		]
//     })

// });


// $('.button-collapse').sideNav();

// 	$('.collapsible').collapsible();

// 	$('select').material_select();


// // function for date/time concat
// function dateTime() {
// 	var date = "2017-08-24";
// 	var startTime = "11:30:00";
// 	var endTime = "17:30:00"


// 	var dateTime = date + "T" + time;
// }

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

      name +=i;
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
            // weekends: false, // will hide Saturdays and Sundays
            editable: true,
            header: {
                left: "prev,next today",
                center: "title",
                right: 'month,agendaWeek,agendaDay'
              },
              events: appointArray
        });
});

