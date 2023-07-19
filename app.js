// Delgetstei ajillah controller

var uiController = (function() {

    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        addBtn: ".add__btn"
    }

    var x = 1234;
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    }

})();

// Sanhuutei ajillah controller
var financeController = (function() {

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            inc: [],
            exp: []
        },

        totals: {
            inc: 1000,
            exp: 500
        }
    };

    
})();


// Holboj ajillah controller
var appController = (function(uiController, fnController) {
    
    var ctrlAddItem = function() {
        // oruulah ugudliig delgetsnees olj avna.

        console.log(uiController.getInput());
        // olj avsan ugugdluu sanhuugiin controllert damjuulj hadgalna.

        // olj avsan ugugdluudiig web deeree tohiroh hesegt gargana

        // tusuviig tootsoolno

        // Etssiin uldegdel tootsoog delgetsend gargana

    }

    var setupEventListeners = function() {
        var DOM = uiController.getDOMstrings();
        
        document.querySelector(DOM.addBtn).addEventListener('click', function() {
            ctrlAddItem();        
        })
        
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13  || event.which === 13) {
                ctrlAddItem();
            }
        })
    }

    return {
        init: function() {
            console.log("App started...");
            setupEventListeners();
        }
    }

})(uiController, financeController);

appController.init();