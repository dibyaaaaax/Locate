var accessToken = 'YOUR_ACCESS_TOKEN';
var url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + accessToken;

document.getElementById('button').addEventListener("click", function(){
	mainLoop(northEast, southWest);
});	

function liesInBoundary(lat, long, northEast, southWest){
		if ((lat>=southWest.lat() && lat<=northEast.lat()) &&
			(long>=southWest.lng() && long<=northEast.lng())){
			return true;
		}
		else{
			return false;
		}
}

function mainLoop(northEast, southWest){

	$.getJSON(url, function(data){
		for (i=0; i<Object.keys(data.data).length;i++){
			var id = "img"+ i.toString();
			if (data.data[i].location === null) {continue;}

			const longitude = data.data[i].location.longitude;
			const latitude = data.data[i].location.latitude;

			if (liesInBoundary(latitude, longitude, northEast, southWest)){
				const instaLink = data.data[i].link;

				var div = document.createElement("div");
				div.setAttribute('class', 'pictures');
				div.setAttribute('id', id);
				var link = document.createElement("a");
				link.href = instaLink;
				link.setAttribute('target', '_blank');
				var image = document.createElement("img");
				image.src = data.data[i].images.standard_resolution.url;
				var parent =  document.getElementById("images");


				link.appendChild(image)
				div.appendChild(link)
				parent.appendChild(div)
			}
		}
	});

}

