$(document).ready(function() {

  $.ajax({
		url: "https://flynn.boolean.careers/exercises/api/array/music",
		method: "GET",
		success: function (data){

			for (var i = 0; i < data.response.length; i++){

        var selettore, template, canzoni, html;

        selettore = $(".cd-global").text()
				template = Handlebars.compile(selettore)

				canzoni = {
					img : data.response[i].poster,
					title : data.response[i].title,
					author : data.response[i].author,
					genre : data.response[i].genre,
					year : data.response[i].year
				}

				output = template(canzoni);

				$(".cds-container.container").append(output)
			}

		},
		error: function (errore){
			alert(errore);
		}
    
	});

});
