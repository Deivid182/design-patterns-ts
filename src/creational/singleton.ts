/**
 * Patrón Singleton
 *
 * Garantiza que una clase tenga una única instancia y provee
 * un punto de acceso global a ella.
 *
 * Uso típico: gestores de configuración, conexiones a BD, loggers.
 */
export class Singleton {
  private static instance: Singleton | undefined;
  private value = 0;

  // El constructor privado impide el uso de "new Singleton()" desde fuera.
  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  setValue(value: number): void {
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }
}
