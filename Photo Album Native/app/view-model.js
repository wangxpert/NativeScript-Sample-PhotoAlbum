var observable = require("data/observable");
var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");
var observableArrayModule = require("data/observable-array");

var __extends = this.__extends || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var array = new observableArrayModule.ObservableArray();

var directory = "/res/"
var img1 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + "01.jpg"));
var img2 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + "02.jpg"));
var img3 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + "03.jpg"));
var img4 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + "04.jpg"));
var img5 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + "05.jpg"));
var img6 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + "06.jpg"));

array.push([img1, img2, img3, img4, img5, img6]);

var img7 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + "07.jpg"));
var img8 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + "08.jpg"));

var PhotoAlbumModel = (function (_super) {
    __extends(PhotoAlbumModel, _super);

    function PhotoAlbumModel() {
        _super.call(this);

        this.set("message", "Add new images");
    }

    Object.defineProperty(PhotoAlbumModel.prototype, "photoItems", {
        get: function () {
            return array;
        },
        enumerable: true,
        configurable: true
    });

    PhotoAlbumModel.prototype.tapAction = function () {
        array.push(img7);
        array.push(img8);

        this.set("message", "Images added. Total images: " + array.length);
    };

    return PhotoAlbumModel;
})(observable.Observable);

exports.PhotoAlbumModel = PhotoAlbumModel;