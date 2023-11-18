
$(function () {

  $(':button').on('click', function () { // this click even targets all buttons by using the :buttons

    var userInput = $(this).prev('textarea').val(); // This uses .prev to target the most recent text area and get the value of what was entered 

    var timeBlockId = $(this).closest('.time-block').attr('id');// this searches for the closest time-clock class that has the "attr", or id that = in this example #hour-9

    localStorage.setItem(timeBlockId, userInput); // this will store these using the id as the key and the user input as the value


  });


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?



  function addClasses() {

    var currentTime = dayjs().format('h'); // this will display the current time in the console
    console.log(currentTime);

    $('.time-block').each(function () {

      var blockTime = parseInt($(this).attr('id').split('-')[1]);   //this took foreeever to figure out, but this uses parseInt 

      if (blockTime < currentTime) {
        $(this).addClass('past');
      } else if (blockTime === currentTime) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });


  }

  addClasses();
































  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));

});


