export class educationdetails{
    constructor(
        public percentage : number,
        public yearofpassing : {
            [key:string] : string
        },
        public selectedyear : string,
        public qualification : {
            [key : string] : string
        },
        public selectqualification : string,
        public stream : {
            [key : string] : string
        },
        public selectstream : string,
        public college : {
            [key : string] : string
        },
        public selectcollege : string,
        public othername : string,
        public location : string,
        public choose:{
            name : string,
            value : string,
            selected : boolean
        }[],
        public typeselected : string
    ){}
}