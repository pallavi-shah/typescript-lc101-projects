import { Payload} from './Payload';
import { Cargo} from './Cargo';
import { Astronaut} from './Astronaut';

export class Rocket implements Payload{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[];
    astronauts: Astronaut[];   
    massKg: number;
    constructor(name: string,totalCapacityKg: number){
        this.name=name;
        this.totalCapacityKg=totalCapacityKg;
        this.astronauts = [];
        this.cargoItems=[];
    }

    sumMass (items: Payload[]): number {
        let total=0;
       for(let i=0;i<items.length;i++){
            total+=items[i].massKg;
        }
        return total;
    }

    currentMassKg(): number{
        
        let totalCurrentMass=this.sumMass(this.astronauts)+this.sumMass(this.cargoItems);
        return totalCurrentMass;
    }

    canAdd(item: Payload): boolean{
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg)
        return true;
    }

    addCargo(cargo: Cargo){
        if(this.canAdd(cargo)===true){
            this.cargoItems.push(cargo);
            return true;
        }else
        return false;
    }

    addAstronaut(astronaut: Astronaut){
        if(this.canAdd(astronaut)===true){
            this.astronauts.push(astronaut);
            return true;
        }else
        return false;
    }

}