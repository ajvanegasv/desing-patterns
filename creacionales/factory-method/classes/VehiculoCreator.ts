import Vehiculo from '../interfaces/Vehiculo.d.ts';

export default abstract class VehiculoCreator {
    
    abstract public factoryMethod(): Vehiculo;

    public start(): void {
        const vehiculo = this.factoryMethod();
        vehiculo.start();
    }

    public stop(): void {
        const vehiculo = this.factoryMethod();
        vehiculo.stop();
    }
}