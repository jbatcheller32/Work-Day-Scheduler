
$(function () {

  $(':button').on('click', function () { // this click even targets all buttons by using the :buttons

    var userInput = $(this).prev('textarea').val(); // This uses .prev to target the most recent text area and get the value of what was entered 

    var timeBlockId = $(this).closest('.time-block').attr('id');// this searches for the closest time-clock class that has the "attr", or id that = in this example #hour-9

    localStorage.setItem(timeBlockId, userInput); // this will store these using the id as the key and the user input as the value


    var savedUserInput = localStorage.getItem(userInput); // Getting the user input from localStorage


    if (savedUserInput) {
      var userInput = JSON.parse(savedUserInput); // Check if there is any saved user input

      $("textarea").each(function () {   // this will Loop through each textarea element

        var id = $(this).attr("id");  // Gets the id of the current textarea element
        if (userInput.hasOwnProperty(id)) {   // Check if the id exists in the userInput
          $(this).val(userInput[id]);
        }
      });
    }



  });

  function addClasses() {

    var timeOfDay = dayjs().format('[hour-]h')
    console.log('Current hour: ' + timeOfDay)

    $('.time-block').each(function () {   //Compares the current hour of the day to each planner div and applies a class to each

      var domTimeBlock = $(this).attr('id');   // Fetches time block id
      console.log(domTimeBlock);

      if (timeOfDay === domTimeBlock) {    // Determines what class to add to each block
        $(this).addClass('present');
      } else if (timeOfDay > domTimeBlock) {
        $(this).addClass('past');
      } else {
        $(this).addClass('future');
      }
    });
  }
  addClasses();





  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));   // This is the code to display the current date in the header of the page.

});


