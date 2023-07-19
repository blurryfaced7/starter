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
    // private
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
        items: {
            inc: [],
            exp: []
        },

        totals: {
            inc: 1000,
            exp: 500
        }
    };

    return {
        addItem: function(type, desc, val) {
            var item;
            var id;
            // 

            if(data.items[type].length === 0) {
                id = 1;
            }
            else {
                id = data.items[type][data.items[type].length - 1].id + 1;
            }

            if (type === "inc") {
                item = new Income(id, desc, val);
            } else {
                // type === "exp"
                item = new Expense(id, desc, val);
            }
            data.items[type].push(item);
        },
        seeData: function() {
            return data;
        }
    };

})();


// Holboj ajillah controller
var appController = (function(uiController, fnController) {
    
    var ctrlAddItem = function() {
        // oruulah ugudliig delgetsnees olj avna.
        var input = uiController.getInput();

        // olj avsan ugugdluu sanhuugiin controllert damjuulj hadgalna.

        financeController.addItem(input.type, input.description, input.value);
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