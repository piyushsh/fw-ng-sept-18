
function toTitleCase(s) {
    return s.replace(/\w\S*/g, function(word){
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
}
