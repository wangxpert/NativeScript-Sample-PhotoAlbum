var modelModule = require("./modules/model");

var pageModule = require("ui/page");
var buttonModule = require("ui/button");
var gridModule = require("ui/panels/grid-panel");
var listViewModule = require("ui/list-view");

var enums = require("ui/enums");
var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");
var imageModule = require("ui/image");

function createPage() {
    var model = new modelModule.PhotoAlbumModel();
    var items = model.items;

    // var img1 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, "res/01.jpg"));
    // var img2 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, "res/02.jpg"));
    // var img3 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, "res/03.jpg"));
    // var img4 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, "res/04.jpg"));
    // var img5 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, "res/05.jpg"));
    // var img6 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, "res/06.jpg"));
    // var img7 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, "res/07.jpg"));
    // var img8 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, "res/08.jpg"));

    // var items = [img1, img2, img3, img4, img5, img6, img7];

    var listView = new listViewModule.ListView();
    
    listView.on("itemLoading", function (args) {
        var image = args.view;
        if (!image) {
            image = new imageModule.Image();
            image.stretch = enums.Stretch.aspectFill;

            args.view = image;
        }
        image.source = items[args.index];
    });

    listView.items = items;
    
    // items.Push(img8);

    //Setup the message label.
    var button = new buttonModule.Button();
    button.text = "Add a new image";
    button.on("click", function () {
        
        //model.tapAction();
        //items.Push(img8);
        //button.text = items.length;
       
    });

    var gridPanel = new gridModule.GridPanel();

    gridPanel.addChild(listView);
    gridPanel.addChild(button);

    // Specify in which column button should be placed.
    gridModule.GridPanel.setColumn(listView, 0);
    gridModule.GridPanel.setColumn(button, 0);

    // Specify in which row button should be placed.
    gridModule.GridPanel.setRow(listView, 0);
    gridModule.GridPanel.setRow(button, 1);

    // Create GridLength object with star size (take remaining space)
    var starGridLength = new gridModule.GridLength(1, gridModule.GridUnitType.star);

    // Create GridLength object with auto size (size to content)
    var autoGridLength = gridModule.GridLength.auto;

    // Create RowDefiniton object and set its height to auto width.
    var firstRowDefinition = new gridModule.RowDefinition();
    firstRowDefinition.height = starGridLength;

    // Create RowDefiniton object and set its height to star width.
    var secondRowDefinition = new gridModule.RowDefinition();
    secondRowDefinition.height = autoGridLength;

    // Add rowDefiniton objects to gridPanel.
    gridPanel.addRowDefinition(firstRowDefinition);
    gridPanel.addRowDefinition(secondRowDefinition);

    // Create and return the page.    
    var mainPage = new pageModule.Page();
    mainPage.content = gridPanel;
    
    //??
    mainPage.bindingContext = model;
    
    //mainPage.css = " button { font-size: 42 } .title { font-size: 30 } .message { font-size: 20; color: #284848; }";
    return mainPage;
}

exports.createPage = createPage;