$.backstretch("images/bbs.jpg");


<<<<<<< HEAD


//create local variable to store the value of email and password
var customerTimeSelected = "";
var dateSelected = "";

$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    format: 'yyyy/mm/dd',
    closeOnSelect:false,//close upon selecting a date,
    min: new Date(2017, 7, 20),
    max: new Date(2020, 12, 31),
    //when you start the page is will show Hello there , and hide morningTime and afternoonTime
    onStart: function(){
        console.log('Hello there :)');
        $('.morningTime').hide();
        $('.afternoonTime').hide();
        $('#reservationInfo').hide();
    },
    //this is when you click schedule button
    onRender:function(){
        console.log('whoa.. rendered anew');
    },
    //this is when you click the schedule 
    onOpen: function(){
        console.log('opened up');
    },
    //click ok it will show close now 
    onClose: function(){
        console.log('Close now');
        $('.morningTime').show();
        $('.afternoonTime').show();
    },


    // http://amsul.ca/pickadate.js/api/
    //when you pick the date on the datepicker
    //get the the date pick
    onSet: function(context){
    	dateSelected = picker.get('select', 'yyyy/mm/dd');
    }
 });   
// http://amsul.ca/pickadate.js/api/
var $input = $('.datepicker').pickadate();
//Use the picker object directly.
var picker = $input.pickadate('picker');

$('.timeButton').on('click', function(){
	//prevent button to go somewhere else
	event.preventDefault();
	//stores the customer's selected time in a local variable
	customerTimeSelected = $(this).val();
	console.log(customerTimeSelected);
});
//schedule button on click 
$('#schedule').on('click', function(){
	//Get date and user info and place into database when clicked on the booked time
	$('#reservationTime').text(customerTimeSelected + " at " + dateSelected);
	$('.morningTime').hide();
	$('.afternoonTime').hide();
	$('#reservationInfo').show();
});

//reset button on click 
$('#resetSchedule').on('click', function(){
	customerTimeSelected ="";
	dateSelected="";
	$('morningTime').hide();
	$('.afternoonTime').hide();
	$('#reservationInfo').hide();
});







// $('.timepicker').pickatime({
//     default: 'now', // Set default time: 'now', '1:30AM', '16:30'
//     fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
//     twelvehour: true, // Use AM/PM or 24-hour format
//     donetext: 'OK', // text for done-button
//     cleartext: 'Clear', // text for clear-button
//     canceltext: 'Cancel', // Text for cancel-button
//     autoclose: false, // automatic close timepicker
//     ampmclickable: true, // make AM PM clickable
//     aftershow: function(){} //Function for after opening timepicker
// });

// $("#schedule").click(function() {
//     $('.datepicker').show();
// });

// $("#time").click(function() {
//     $('.timepicker').show();
// });
=======
>>>>>>> 7fac69eec67ca5c8dfecdab4dda7e3a951e444a2
