// Delgetstei ajillah controller

var uiController = (function() {


})();

// Sanhuutei ajillah controller
var financeController = (function() {

})();


// Holboj ajillah controller
var appController = (function(uiController, fnController) {

    var ctrlAddItem = function() {
        // oruulah ugudliig delgetsnees olj avna.

        // olj avsan ugugdluu sanhuugiin controllert damjuulj hadgalna.

        // olj avsan ugugdluudiig web deeree tohiroh hesegt gargana

        // tusuviig tootsoolno

        // Etssiin uldegdel tootsoog delgetsend gargana
        console.log("qwertrytu");
    }

    document.querySelector(".add__btn").addEventListener('click', function() {
        ctrlAddItem();        
    })

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13  || event.which === 13) {
            ctrlAddItem();
        }
    })

})(uiController, financeController);