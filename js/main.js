//Dropdown select
for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
  dropdown.addEventListener('click', function() {
      this.querySelector('.custom-select').classList.toggle('open');
  })
}

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
  }

window.addEventListener('click', function(e) {
  for (const select of document.querySelectorAll('.custom-select')) {
      if (!select.contains(e.target)) {
          select.classList.remove('open');
      }
  }
});

// <!-- Simple Timer -->

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline="September 09 2021 00:00:00 GMT+0300";
initializeClock('countdown', deadline);
initializeClock('countdowntwo', deadline);

$(document).ready(function () {
  /* Фильтр */
  $('.button[data-filter]').click(function () {
     if ($(this).attr('data-val') == 'off') {
        $('.button[data-filter]').attr('data-val', 'off').removeClass('focused');
        $(this).attr('data-val', 'on').addClass('focused');
        $('.filter > div').hide(300);
        $('.filter > div[data-filter=' + $(this).attr('data-filter') + ']').show(300);
        if ($(this).attr('data-filter') == 'all') {
           $('.button[data-filter]').attr('data-val', 'off').removeClass('focused');
           $(this).attr('data-val', 'on').addClass('focused');
           $('.filter > div').show(300);
        }
  }
  });
 
// Burger menu аккордеон меню
$('.icon-menu_btn').on('click', function(){
  $('.accordeon').slideToggle();
});

$(".categories-item_link").click(function (e) {
	e.preventDefault();
	
  let menu = $(this).closest('.accordeon');
  console.log(menu)
  
	if (false == $(this).next().is(':visible')) {
		menu.find('li').removeClass('slide active');
    menu.find('ul').slideUp(); 
	}
  $(this).next().slideToggle();
  $(this).parent().addClass('slide');
  $(this).parent().toggleClass('rotate');

}); 

  });