//Задание 1
function addItemInfoDecorator(target: Object, method: string, descriptor: PropertyDescriptor) {
    // console.log(target);
    // console.log(method);
    // console.log(descriptor);
    let originalFunc = descriptor.value;
    descriptor.value = function () {
        let origResult = originalFunc.apply(this);
        info: 'this.name + this.price';
        return {
            info: this.name + "- $" + this.price,
            date: new Date()
        }
    }
}
class Item {
    public price: number;
    public name: string;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    @addItemInfoDecorator
    public getItemInfo() {
        return {
            name: this.name,
            price: this.price
        };
    }
}
let item = new Item('Apple', 100);
console.log(item.getItemInfo());
//Задание 2
function MyUser() {
    return function (targetClass) {
        return class {
            public type = 'user' || 'admin';
            public createDate = new Date;
            getUserInfo() {
                return this.type, this.createDate;
            }
        }
    }
}

@MyUser()
class PublicUser {
}
const pubUser = new PublicUser();
console.log(pubUser);
//Задание 3
namespace USA {
    export interface INews {
        id: number;
        title: string;
        text: string;
        author: string;
    }
    export class NewsService {
        protected apiurl: string = 'https://news_api_usa_url'
        public getNews() { }
    }
}
namespace Ukraine {
    export interface INews2 {
        uuid: string;
        title: string;
        body: string;
        author: string;
        date: string;
        imgUrl: string;
    }
    export class NewsService2 {
        protected apiurl: string = 'https://news_api_2_url'
        public getNews() { } // method get all news
        public addToFavorite() { } // method add to favorites
    }
}
//Задание 4
class Junior {
    doTasks() {
        console.log('Actions!!!');
    }
}

class Middle {
    createApp() {
        console.log('Creating!!!');
    }
}

class Senior implements Junior, Middle {
    public doTasks(): void {
        console.log('Actions!!!');
    }
    public createApp(): void {
        console.log('Creating!!!');
    }
    public createArchitecture(): void {
        console.log('Creation completed successfully!')
    }
}
function applyMixin(targetClass, baseClasses) {
    baseClasses.forEach((baseClass) => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach((propName) => {
            targetClass.prototype[propName] = baseClass.prototype[propName];
        });
    });
}
applyMixin(Senior, [Junior, Middle]);