$(document).ready(function () {
  // employee status widget
  $.getJSON('../data/employees.json', function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data,function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML)
  }); // end getJSON
  
  
 //meeting room status widget
  $.getJSON('../data/rooms.json', function (data) {
    var roomStatusHTML = '<ul class="rooms">';
    $.each(data,function (index, room) {
      if (room.available === true) {
        roomStatusHTML +='<li class="full">';
      } else {
        roomStatusHTML +='<li class="empty">';
      }
      roomStatusHTML += room.room + '</li>';
    });
    roomStatusHTML += '</ul>';
    $('#roomList').html(roomStatusHTML)
  }); // end getJSON
}); // end ready