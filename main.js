// JavaScript Document
//key: https://developer.nps.gov/api/v1/parks?stateCode=${city}&api_key=buvFtnCeh9v3RWlXVXSM5soBQgynNWJXhShlKvgk
//data[i].url or .name or .description 
function getParks(state){
	const url = `https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=buvFtnCeh9v3RWlXVXSM5soBQgynNWJXhShlKvgk`;
	
	console.log(url);
	
	fetch(url).then(response => {
		if(!response.ok){
			throw new Error (response.message);
		}else{
			return response.json();
		}
	}).then(responseJson => displayParks(responseJson)).catch(err => alert("Something went wrong!"));
}

function displayParks(responseJson){
	
	console.log(responseJson.data[0].url);
	
	for(let i = 0; i < responseJson.data.length; i++){
		
		$(".js-list").append(`<li><a href="${responseJson.data[i].url}">${responseJson.data[i].name}</a></li>
							<ul><li>${responseJson.data[i].description}</li>`);
		
	}
}

$("form").submit(e => {
	
	e.preventDefault();
	
	let state = $("#state").val().toUpperCase();
	
	console.log(state);
	getParks(state);
});