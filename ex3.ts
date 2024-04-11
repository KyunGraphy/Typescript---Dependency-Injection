interface Method {
    test(): void
}

class UserRepository implements Method {
    test(): void {
        console.log("User Repo Test")
    }
}

class AccountRepository implements Method {
    test(): void {
        console.log("Account Repo Test")
    }
}

class Injector {
    private container = new Map();

    constructor(private providers: any[] = []) {
        this.providers.forEach(service => this.container.set(service, new service()))
    }

    get(serviceKey: any) {
        const serviceInstance = this.container.get(serviceKey);

        if(!serviceInstance) {
            throw Error("No provider found")
        }
        return serviceInstance
    }
}

const injector = new Injector([UserRepository, AccountRepository])
const userService = injector.get(UserRepository)
userService.test()

const accountService = injector.get(AccountRepository)
accountService.test()
