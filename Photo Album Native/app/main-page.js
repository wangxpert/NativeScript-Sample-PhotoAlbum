var modelModule = require("./view-model");
var model = new modelModule.PhotoAlbumModel();

function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = model;
}

function buttonClick(args) {
    model.tapAction();
}

exports.onPageLoaded = onPageLoaded;
exports.buttonClick = buttonClick;