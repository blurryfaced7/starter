// Delgetstei ajillah controller

var uiController = (function() {

    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        addBtn: ".add__btn",
        incomeList: ".income__list",
        expenseList: ".expenses__list"
    }

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
        },

        clearFields: function() {
            var fields =document.querySelectorAll(DOMstrings.inputDescription + ", " + DOMstrings.inputValue);
            
            // convert list to array
            var fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(el, index, array) {
                el.value = "";
            });

            fieldsArr[0].focus();
        },

        addListItem: function(item, type) {
            // Orlogo zarlagiin elementiig aguulsan html-iig beltgene.
            var html,list;
            if(type === "inc") {
                list = DOMstrings.incomeList;
                html = `<div class="item clearfix" id="income-%id%"><div class="item__description">$$DESCRIPTION$$</div><div class="right clearfix">
                        <div class="item__value">$$VALUE$$</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline">
                        </i></button></div></div></div>`;                
            } else {
                list = DOMstrings.expenseList;
                html = `<div class="item clearfix" id="expense-%id%"><div class="item__description">$$DESCRIPTION$$</div>
                            <div class="right clearfix"><div class="item__value">$$VALUE$$</div><div class="item__percentage">21%</div>
                                <div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
                                </div></div></div>`;
            }
            // ter html dotroo orlogo zaarlagiin utguudiig replace ashiglaj uurchilj ugnu.
            html = html.replace("%id%", item.id);
            html = html.replace("$$DESCRIPTION$$", item.description);
            html = html.replace("$$VALUE$$", item.value);
            // Beltgesen html-ee DOM ruu hiij ugnu.
            document.querySelector(list).insertAdjacentHTML('beforeend', html);//html-iin oiroltsoo elementiig bairluulj ugnu (such as: beforeend) 
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

            return item;
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
        var item = financeController.addItem(
            input.type, 
            input.description,
            input.value
        );
        // olj avsan ugugdluudiig web deeree tohiroh hesegt gargana.
        uiController.addListItem(item, input.type);
        uiController.clearFields();
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