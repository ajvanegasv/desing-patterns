import VehiculoCreator from './VehiculoCreator.ts';
import Vehiculo from '../interfaces/Vehiculo.d.ts';

export default class MotoCreator extends VehiculoCreator {

    public isOn: Boolean = false;

    public factoryMethod(): Vehiculo {
        return new MotoCreator();
    }

    public start(): void {
        this.isOn = true;
    }

    public stop(): void {
        this.isOn = false;
    }
}