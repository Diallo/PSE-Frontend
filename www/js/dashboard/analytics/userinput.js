var timeframeSliderObj = $("#timeframe-slider").slider({
	id: "timeframe-slider", 
	orientation: 'horizontal', 
	min: 1, 
	max: 24, 
	range: true, 
	value: [8, 16]
});

var daysSliderObj = $("#days-slider").slider({
	id: "days-slider", 
	orientation: 'horizontal', 
	min: 2, 
	max: 365,
	value: 10
});

var songsSliderObj = $("#songs-slider").slider({
	id: "songs-slider", 
	orientation: 'horizontal', 
	min: 2, 
	max: 1000,
	value: 10
});

$("#timeframe-slider-div").toggle()
$("#songs-slider-div").toggle()