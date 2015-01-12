var observable = require("data/observable");
var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var img7 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, "./res/07.jpg"));  
var img8 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, "./res/08.jpg"));

var PhotoAlbumModel = (function (_super) {
    __extends(PhotoAlbumModel, _super);

    function PhotoAlbumModel() {
        _super.call(this);
        // Initialize default values.

        //this.counter = 42;
        //this.set("message", this.counter + " taps left");
    }
    
     Object.defineProperty(PhotoAlbumModel.prototype, "items", {
        get: function () {
            var _this = this;
            if (!this._items) {
                
                var img1 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, "res/01.jpg"));
                var img2 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, "res/02.jpg"));
                var img3 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, "res/03.jpg"));
                var img4 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, "res/04.jpg"));
                var img5 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, "res/05.jpg"));
                var img6 = imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, "res/06.jpg"));
                             
                this._items = [img1, img2, img3, img4, img5, img6];           
            }
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    
    PhotoAlbumModel.prototype.tapAction = function () {
        // this.counter--;
        // if (this.counter <= 0) {
        //     this.set("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
        // } else {
        //     this.set("message", this.counter + " taps left");
        // 
        this.items.push(img7);
        this.items.push(img8);
    };

    return PhotoAlbumModel;
})(observable.Observable);

exports.PhotoAlbumModel = PhotoAlbumModel;

//???
exports.model = new PhotoAlbumModel();