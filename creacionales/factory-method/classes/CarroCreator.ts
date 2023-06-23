import VehiculoCreator from './VehiculoCreator.ts';
import Vehiculo from '../interfaces/Vehiculo.d.ts';

export default class CarroCreator extends VehiculoCreator {

    public isOn: Boolean = false;

    public factoryMethod(): Vahiculo {
        return new CarroCreator();
    }

    public start(): void {
        this.isOn = true;
    }

    public stop(): void {
        this.isOn = false;
    }
}