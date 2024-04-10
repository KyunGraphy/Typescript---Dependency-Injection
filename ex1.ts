// Định nghĩa một interface cho Service
interface DataService {
    getData(): string;
}

// Implement DataService interface
class DatabaseService implements DataService {
    getData(): string {
        return "Data from database";
    }
}

// Implement APIService interface
class APIService implements DataService {
    getData(): string {
        return "Data from API";
    }
}

// Định nghĩa một service khác sử dụng DataService
class DataConsumer {
    private dataService: DataService;

    // Constructor chấp nhận một DataService instance
    constructor(dataService: DataService) {
        this.dataService = dataService;
    }

    // Phương thức sử dụng DataService
    useDataService(): string {
        return this.dataService.getData();
    }
}

// Tạo một instance của DataService, ví dụ APIService hoặc DatabaseService
const dataService = new DatabaseService();

// Inject DataService instance vào DataConsumer
const dataConsumer = new DataConsumer(dataService);

// Sử dụng DataConsumer
console.log(dataConsumer.useDataService()); // Output: Data from database
