$(document).ready(function () {
  $('.slide').slick({
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '250px',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  })
});



$(function () {
			$('#supported').text('Supported/allowed: ' + !!screenfull.isEnabled);

			if (!screenfull.isEnabled) {
				return false;
			}

			$('#request').click(function () {
				screenfull.request($('#container')[0]).then(function () {
					console.log('Browser entered fullscreen mode')
				})
				// Does not require jQuery. Can be used like this too:
				// screenfull.request(document.getElementById('container'));
			});

			$('#exit').click(function () {
				screenfull.exit().then(function () {
					console.log('Browser exited fullscreen mode')
				});
			});

			$('#toggle').click(function () {
				screenfull.toggle($('#container')[0]).then(function () {
					console.log('Fullscreen mode: ' + (screenfull.isFullscreen ? 'enabled' : 'disabled'))
				});
			});

			$('#request2').click(function () {
				screenfull.request();
			});

			$('#demo-img').click(function () {
				screenfull.toggle(this);
			});

			function fullscreenchange() {
				var elem = screenfull.element;

				$('#status').text('Is fullscreen: ' + screenfull.isFullscreen);

				if (elem) {
					$('#element').text('Element: ' + elem.localName + (elem.id ? '#' + elem.id : ''));
				}

				if (!screenfull.isFullscreen) {
					$('#external-iframe').remove();
					document.body.style.overflow = 'auto';
				}
			}

			screenfull.on('change', fullscreenchange);

			// Set the initial values
			fullscreenchange();
		});
		</script>
		<script>
			var _gaq=[['_setAccount','UA-25562592-1'],['_trackPageview'],['_trackPageLoadTime']];
			(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
			g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
			s.parentNode.insertBefore(g,s)}(document,'script'));
