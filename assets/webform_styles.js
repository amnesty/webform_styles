jQuery(document).ready(function () {

	//on load, we sync the swiper with his dropdown
	jQuery('.swiper-container').each(function( index ) {

		var swiper = new Swiper ('#'+jQuery(this).attr('id'), {
			direction: 'horizontal',
			loop: true,
			spaceBetween: 10,
			centeredSlides: true,
			paginationClickable: true
		});

		sync_swipe_and_select(jQuery(this).attr('id'));

		//on change slide on a swiper, we sync the swiper with its dropdown
		swiper.on('slideChangeStart', function () {
			sync_swipe_and_select(jQuery(swiper.container.selector + ' .swiper-slide-active').parents('.swiper-container').attr('id'));
		});
	});

});

function sync_swipe_and_select(swiper_id) {
	var swiper_value_selected = jQuery('#'+swiper_id+' .swiper-slide-active input').attr('id');
	var select_id = swiper_id.replace('swiper-', '');
	var $select = jQuery('#'+select_id);
	$select.val(swiper_value_selected).change();
}