var Everlive = require('./everlive.all.min');
var everlive = new Everlive("tgfrG0zznuwAxaLc");
var observable = require("data/observable");
var observableArrayModule = require("data/observable-array");
var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");

var array = new observableArrayModule.ObservableArray();
var directory = "/res/";

function imageFromSource(imageName) {
    return imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + imageName));
};

var item1 = {
    itemImage: imageFromSource("01.jpg")
};
var item2 = {
    itemImage: imageFromSource("02.jpg")
};
var item3 = {
    itemImage: imageFromSource("03.jpg")
};
var item4 = {
    itemImage: imageFromSource("04.jpg")
};
var item5 = {
    itemImage: imageFromSource("05.jpg")
};
var item6 = {
    itemImage: imageFromSource("06.jpg")
};
array.push([item1, item2, item3, item4, item5, item6]);
var item7 = {
    itemImage: imageFromSource("07.jpg")
};
var item8 = {
    itemImage: imageFromSource("08.jpg")
};

var __extends = this.__extends || function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};

var PhotoAlbumModel = (function (_super) {
    __extends(PhotoAlbumModel, _super);

    function PhotoAlbumModel() {
        _super.call(this);

        this.set("message", "Add new images");
    }

    var backendArray = new observableArrayModule.ObservableArray();
    Object.defineProperty(PhotoAlbumModel.prototype, "photoItems", {
        get: function () {
            everlive.Files.get().then(function (data) {
                    data.result.forEach(function (fileMetadata) {
                        imageSourceModule.fromUrl(fileMetadata.Uri).then(function (result) {
                            var item = {
                                itemImage: result
                            };
                            backendArray.push(item);
                        });
                    });
                },
                function (error) {});

            return backendArray;
        },
        enumerable: true,
        configurable: true
    });

    PhotoAlbumModel.prototype.tapAction = function () {
        array.push(item7);
        array.push(item8);

        this.set("message", "Images added. Total images: " + array.length);

        var that = this;

        for (i = 0; i < array.length; i++) {
            var file = {
                "Filename": Math.random().toString(36).substring(2, 15) + ".jpg",
                "ContentType": "image/jpeg",
                "base64": array.getItem(i).itemImage.toBase64String("JPEG", 100)
            };

            everlive.Files.create(file,
                function (data) {
                    that.set("message", "File " + file.Filename + "added.")
                },
                function (error) {});
        }
    };

    return PhotoAlbumModel;
})(observable.Observable);

exports.PhotoAlbumModel = PhotoAlbumModel;