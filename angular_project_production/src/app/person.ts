export class person {
    id: number = 0;
    name: string = "default_name";
    address: string = "default_address";
    phone: string = "default_phone";
    birthyear: number = 1950;

    //No argument constructor
    constructor(){}

    //Getters
    getName(): string{
        return this.name;
    }

    getAddress(): string{
        return this.address;
    }

    getNumber(): string{
        return this.phone;
    }

    getBirthyear(): number{
        return this.birthyear;
    }

    //Setters
    setName(inputNa: string){
        this.name = inputNa;
    }

    setAddress(inputA: string){
        this.address = inputA;
    }

    setPhone(inputNu: string){
        this.phone = inputNu;
    }

    setBirthyear(inputB: number){
        this.birthyear = inputB;
    }


}