export class DetallePqrs {
    constructor(
        public descripcion: string,
        public dpqrsId: string,
        public fechaCreacion: Date,
        public fechaModificacion: Date,
        public usuCreador: string,
        public usuModificador: string,
        public estaId_Estado: string,
        public pqrsId_Pqrs: string,
        public prioId_Priorida: string,
    ) { }
}