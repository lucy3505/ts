var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Component = /** @class */ (function () {
    function Component(width, height) {
        this.width = width;
        this.height = height;
    }
    Component.prototype.display = function () {
        console.log("displaying");
        console.log(this.height);
    };
    return Component;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //如果没有extends Component那就要实现Component里的内容  比如写成class Button implements Widget
    Button.prototype.hide = function () {
        console.log("hiding");
    };
    Button.prototype.display = function () {
        console.log("ddd");
    };
    return Button;
}(Component));
var w = new Button(1, 2);
console.log(w);
w.display();
var Button2 = /** @class */ (function () {
    function Button2(width, height) {
        this.width = width;
        this.height = height;
    }
    Button2.prototype.display = function () {
        console.log("displaying");
        console.log(this.height);
    };
    Button2.prototype.hide = function () {
        console.log("hiding");
    };
    return Button2;
}());
var w2 = new Button2(1, 2);
console.log(w2);
w2.display();
