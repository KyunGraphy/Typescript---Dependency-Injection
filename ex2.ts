class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
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
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// Sử dụng đối tượng Rectangle
const rectangle = new Rectangle(5, 10);
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
