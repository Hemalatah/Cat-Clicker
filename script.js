$(function() {
	var model = {
		data: [
			{
				name: "kitten1",
				count: 0,
				url: "images/kitten1.jpg",
				petNames: ["a1", "a2", "a3"] 
			},
			{
				name: "kitten2",
				count: 0,
				url: "images/kitten2.jpg",
				petNames: ["b1", "b2", "b3"]
			},
			{
				name: "kitten3",
				count: 0,
				url: "images/kitten3.jpg",
				petNames: ["c1", "c2", "c3"] 
			},
			{
				name: "kitten4",
				count: 0,
				url: "images/kitten4.jpg",
				petNames: ["d1", "d2", "d3"] 
			},
			{
				name: "kitten5",
				count: 0,
				url: "images/kitten5.jpg",
				petNames: ["e1", "e2", "e3"] 
			}
		],
		init: function() {
			$('#elem').html('');
			$('#admin-list').hide();	
		},
		update: function() {
			$('#list').html('');
			$.each(model.data, function(index, value) {
				$('#list').append('<li id ="item' + (index) + '">' + value.name + '</li>')
			});

		}
	};

	var octopus = {
		init: function() {
			model.init();
			model.update();
			view.init();
		},
		getName: function(i) {
			return model.data[i].name;
		},
		getUrl: function(i) {
			return model.data[i].url;
		},
		getCount: function(i) {
			return model.data[i].count;
		},
		putCount: function(i) {
			model.data[i].count += 1;
		},
		putName: function(i) {
			var name = $('#name').val();
			model.data[i].name = name;
			$('#item'+i).text(name);
		},
		getTitle: function(count) {
			if(count <= 5) {
				title = "Newborn";
			}
			else if(count <= 10) {
				title = "Infant";
			}
			else if(count <= 15) {
				title = "Child";
			}
			else if(count <= 20) {
				title = "Teen";
			}
			else if(count <= 25) {
				title = "Adult";
			}
			else {
				title = "Ninja";
			}
			return title;
		},
		getPetNames: function(i) {
			return model.data[i].petNames;
		}
	};

	var view = {
		init: function() {
			var item, i;
			$('li').on("click", function() {
				item = $(this).attr('id');
				i = parseInt(item.slice(-1));
				view.render(i);
			});
			$('#admin').on("click", function() {
				$('#admin-list').show();
				view.render(i);	
			});
		},
		render: function(i) {
			$('#elem').html('');
			var name = octopus.getName(i);
			$('#name').val(name);
			var url = octopus.getUrl(i);
			$('#imgurl').val(url);
			var count = octopus.getCount(i);
			var title = octopus.getTitle(count);
			$('#clicks').val(count);
			$('#elem').append('<h1>' + name + '</h1>' + '<h2 id = "title">' + title + '</h2>' + '<h3> No.of clicks: <input type="text" value = "' + count + '" id = "count"></h3>' + '<img src="' + url + '" id="img' + i + '">' + '<ul id = "petList">' + '<strong>PetNames</strong>' + '</ul>');

			var petList = octopus.getPetNames(i);
			for(var k = 0; k < petList.length; k++) {
				$('#petList').append('<li>' + petList[k] + '</li>');
			}
			
			$('img').on("click", function() {		
				count++;
				$('#clicks').val(count);
				$('#count').val(count);
				title = octopus.getTitle(count);
				$('#title').text(title);
				octopus.putCount(i);
			});	

			$('#save').on("click", function() {
				var url = $('#imgurl').val();
				url = url.split('.');
				var i = url[0].slice(-1);
				octopus.putName(i-1);
				$('#admin-list').hide();	
			});

			$('#cancel').on("click", function() {
				$('#admin-list').hide();
			});
		}
	};
	octopus.init();
});





