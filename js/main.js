
$(document).ready(function (e) {
    $('.dropdown-toggle').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});



$(document).ready(function () {
    $(".sub-menu a.parent").on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
        
    });
});


$(document).ready(function () {
    $togglebtn = $('.toggle-collapes');
    $aside = $('.aside');
    $navcolapes = $('.nav-colapes');

    $togglebtn.click(function () {
        $aside.toggleClass('close');
    
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      defaultDate: '2020-03-12',
      navLinks: true, // can click day/week names to navigate views
      businessHours: true, // display business hours
      editable: true,
      events: [
        {
          title: 'Business Lunch',
          start: '2020-03-03T13:00:00',
          constraint: 'businessHours'
        },
        {
          title: 'Meeting',
          start: '2020-03-13T11:00:00',
          constraint: 'availableForMeeting', // defined below
          color: '#257e4a'
        },
        {
          title: 'Conference',
          start: '2020-03-18',
          end: '2020-03-20'
        },
        {
          title: 'Party',
          start: '2020-03-29T20:00:00'
        },

        // areas where "Meeting" must be dropped
        {
          groupId: 'availableForMeeting',
          start: '2020-03-11T10:00:00',
          end: '2020-03-11T16:00:00',
          rendering: 'background'
        },
        {
          groupId: 'availableForMeeting',
          start: '2020-03-13T10:00:00',
          end: '2020-03-13T16:00:00',
          rendering: 'background'
        },

        // red areas where no events can be dropped
        {
          start: '2020-03-24',
          end: '2020-03-28',
          overlap: false,
          rendering: 'background',
          color: '#ff9f89'
        },
        {
          start: '2020-03-06',
          end: '2020-03-08',
          overlap: false,
          rendering: 'background',
          color: '#ff9f89'
        }
      ]
    });

    calendar.render();
  });


  $(document).ready(function () {
    $('.nav-colapes').niceScroll({ cursorwidth: '2px', autohidemode: false, zindex: 999, background : '#2f323a', cursorcolor :'#4ECDC4', cursorborder :'none'});
});