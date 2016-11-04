
function renderSearchResultForMap(data){
    var template = $("#search-map-result").html();
    var compiledCode = Handlebars.compile(template);
    var result = compiledCode(data);
    $("#search-result-container").html(result);
    $(".ui.rating").rating();
}