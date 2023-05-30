//打印机A
var PrinterA = /** @class */ (function () {
    function PrinterA() {
    }
    PrinterA.prototype.printLandscape = function () {
        console.log("printing in landscape");
    };
    PrinterA.prototype.type = function () {
        return "landscape";
    };
    return PrinterA;
}());
//打印机B
var PrinterB = /** @class */ (function () {
    function PrinterB() {
    }
    //肖像画
    PrinterB.prototype.printPortrait = function () {
        console.log("printing in portrait");
    };
    return PrinterB;
}());
function doprint(pt) {
    if (pt.pageOrientation === "landscape") {
        pt.printLandscape();
    }
    else if (pt.pageOrientation === "portrait") {
        pt.printPortrait();
    }
    else {
        var unknowPrinter = pt; //因为不是PrinterA | PrinterB，就不是我们所期待的参数，用never
    }
}
function getEmployeeSalary(emp) {
    switch (emp.empType) {
        case "FullType":
            return emp.annualSalary;
        case "PartTime":
            return emp.monthlySalary;
        case "Contractor":
            return emp.hourlySalary;
        default:
            var temp = emp;
            return temp;
    }
}
//enum
var ShapeType;
(function (ShapeType) {
    ShapeType[ShapeType["TRIANGLE"] = 0] = "TRIANGLE";
    ShapeType[ShapeType["RECTANGLE"] = 1] = "RECTANGLE";
})(ShapeType || (ShapeType = {}));
function getArea(shape) {
    switch (shape.shapeType) {
        case ShapeType.TRIANGLE:
            return (shape.base * shape.height) / 2;
        case ShapeType.RECTANGLE:
            return shape.length * shape.width;
        default:
            var temp = shape;
            return temp;
    }
}
var shape = { shapeType: ShapeType.RECTANGLE, length: 5, width: 5 };
var area = getArea(shape);
console.log(area);
