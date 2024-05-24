const getTheTitles = function(books) {
    titles = []
    for(item of books){
        titles.push(item.title)
    }
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
