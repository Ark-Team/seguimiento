export class Pqrs {
    constructor(
        public asunto: string,
        public celular: number,
        public cuidad: string,
        public departamento: string,
        public descripcion: string,
        public direccion: string,
        public email: string,
        public estado: string,
        public fax: number,
        public fechaAsunto: Date,
        public fechaCreacion: Date,
        public identificacion: number,
        public lugar: string,
        public municipio: string,
        public nombre: string,
        public pqrsId: string,
        public telefono: number,
        public areaId_Area: string,
        public clieId_Cliente: string,
        public compId_Compania: string,
        public formId_Formulario: string,
        public genId_Genero: string,
        public prosId_Proceso: string,
        public tcdocId_TipoDocumento: string,
        public tpqrsId_TipoPqrs: string
    ) { }
}