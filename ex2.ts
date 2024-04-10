// Định nghĩa một interface cho service tính toán
interface CalculationService {
    calculateArea(width: number, height: number): number;
    calculatePerimeter(width: number, height: number): number;
}

// Implement CalculationService interface
class RectangleCalculationService implements CalculationService {
    calculateArea(width: number, height: number): number {
        return width * height;
    }

    calculatePerimeter(width: number, height: number): number {
        return 2 * (width + height);
    }
}

// Đối tượng Rectangle sử dụng Dependency Injection
class Rectangle {
    private width: number;
    private height: number;
    private calculationService: CalculationService;

    constructor(width: number, height: number, calculationService: CalculationService) {
        this.width = width;
        this.height = height;
        this.calculationService = calculationService;
    }

    getWidth(): number {
        return this.width;
    }

    setWidth(width: number): void {
        this.width = width;
    }

    getHeight(): number {
        return this.height;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    getArea(): number {
        return this.calculationService.calculateArea(this.width, this.height);
    }

    getPerimeter(): number {
        return this.calculationService.calculatePerimeter(this.width, this.height);
    }
}

// Tạo một instance của CalculationService
const calculationService = new RectangleCalculationService();

// Sử dụng Dependency Injection để tạo một instance của Rectangle
const rectangle = new Rectangle(5, 10, calculationService);

// Sử dụng đối tượng Rectangle
console.log("Width:", rectangle.getWidth());
console.log("Height:", rectangle.getHeight());
console.log("Area:", rectangle.getArea());
console.log("Perimeter:", rectangle.getPerimeter());

// Cập nhật width và height
rectangle.setWidth(8);
rectangle.setHeight(12);
console.log("Updated Width:", rectangle.getWidth());
console.log("Updated Height:", rectangle.getHeight());
console.log("Updated Area:", rectangle.getArea());
console.log("Updated Perimeter:", rectangle.getPerimeter());
