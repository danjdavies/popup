DD.StaffPopup = function()
{
		var staffListItem 	= $('.staff-list li'),
			overlay 		= $('#overlay'),
			profileIcon		= $('.profile-btn'),
			closeButton		= $('a.close'),
			profileText		= $('.profile-text');

			profileIcon.click(function(){
				overlay.show();
				$(this).next().show();
			})

			//When overlay is clicked
			overlay.click(function(){
			  //Hide the overlay
			  overlay.hide();
			  profileText.hide();
			});

			closeButton.click(function(){
				overlay.hide();
			  	profileText.hide();
			})
}
