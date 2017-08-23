$.backstretch("images/bbs.jpg");



//create local variable to store the value of email and password
var customerTimeSelected = "";
var dateSelected = "";
var bookedTimes = ["10:00AM","11:30AM","12:00PM","1:30PM","4:00PM","6:00PM"]; //stored booked times in an array, eventually this should come from database
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today', // Created a button which selects today's date
    clear: 'Clear', //Creates a button which clears the currently selected date
    close: 'Ok', // Creates a button called OK which closes the window,
    format: 'yyyy/mm/dd', // specifies the format of the date selected
    closeOnSelect: false, // Doesn't close upon selecting a date,
    min: new Date(2017, 7, 20), //Sets a minimum date which you can pick
    max: new Date(2020, 12, 31), //Sets a maximum date which you can pick
    onStart: function () {
        console.log('Hello there :)');
        $('.morningTime').hide();
        $('.afternoonTime').hide();
        $('#reservationInfo').hide();
    },
    onRender: function () {
        console.log('Whoa.. rendered anew');
    },
    onOpen: function () {
        console.log('Opened up');
    },
     // you want to update on date
     // ok button calendat
    onClose: function () {
        console.log('Closed now');
        dateSelected = picker.get('select', 'yyyy/mm/dd');        
        $('.morningTime').show();
        $('.afternoonTime').show();
        //Put code here to check all times in database with a matching dateSelected and assign the booked times into the array 
        
        // everytime button on page
        $(".timeButton").each(function () { //Loops through all the time buttons
            for(var i in bookedTimes){
                if ($(this).val() == bookedTimes[i]) { //Checks if the value of the button matches a booked value in the database
                    $(this).prop('disabled', true); //disables the button from clicking, preventing a registration
                }
                else if($(this).prop('disabled') == true){
                    $(this).prop('disabled', true); //Keeps a previously disabled box disabled                    
                }
                else{
                    $(this).prop('disabled', false); // enables the button, indicating open reservation
                }
            }
        });        
    },
    onStop: function () {
        console.log('See ya.');
    },
    onSet: function (context) {  
        console.log("Value set.");
    }
  });
// http://amsul.ca/pickadate.js/api/#method-get
var $input = $('.datepicker').pickadate();
// Use the picker object directly.
var picker = $input.pickadate('picker');
$('.timeButton').on('click',function(){
    event.preventDefault();
    customerTimeSelected = $(this).val(); //stores the customer's selected time in a local variable
    console.log(customerTimeSelected);
});
$('#schedule').on('click',function(){
    //Get date and user info and place into database when clicked on the booked time
    $('#reservationTime').text(customerTimeSelected + " at " + dateSelected);
    $('.morningTime').hide();
    $('.afternoonTime').hide();
    $('#reservationInfo').show();
    //Put code below assigning customer to the assigned timeslot
});
//refresh the button disable :false
$('#resetSchedule').on('click', function () {
    customerTimeSelected="";
    dateSelected='';
    $('.morningTime').hide(); //hides all divs
    $('.afternoonTime').hide();
    $('#reservationInfo').hide();
    $('.timeButton').prop('disabled', false); 
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
