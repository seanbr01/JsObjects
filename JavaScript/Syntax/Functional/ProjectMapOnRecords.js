//From here: http://jhusain.github.io/learnrx/

Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
		var result = projectionFunction(itemInArray);
		results.push(result);
	});
	return results;
};

function go() {
	var presidents = [ {
		"presidentName" : "George Washington",
		"termStart" : "1789",
		"termEnd" : "1797",
		"born" : "1732",
		"died" : "1799"
	}, {
		"presidentName" : "John Adams",
		"termStart" : "1797",
		"termEnd" : "1801",
		"born" : "1735",
		"died" : "1826"
	}, {
		"presidentName" : "Thomas Jefferson",
		"termStart" : "1801",
		"termEnd" : "1809",
		"born" : "1743",
		"died" : "1826"
	}, {
		"presidentName" : "James Madison",
		"termStart" : "1809",
		"termEnd" : "1817",
		"born" : "1751",
		"died" : "1836"
	}, {
		"presidentName" : "James Monroe",
		"termStart" : "1817",
		"termEnd" : "1825",
		"born" : "1758",
		"died" : "1831"
	}, {
		"presidentName" : "John Quincy Adams",
		"termStart" : "1825",
		"termEnd" : "1829",
		"born" : "1767",
		"died" : "1848"
	} ];

	// Discover id and title for each item with map
	var idTitleMap = presidents.map(function(item) {
		return {
			name : item.presidentName,
			birthYear : item.born
		};
	});

	return idTitleMap;
}

console.log(go());