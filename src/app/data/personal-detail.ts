export class personaldetails{
    constructor(
        public firstname : string,
        public lastname : string,
        public email : string,
        public phoneno : string,
        public protfoliourl : string,
        public preferredjobrole:{
            name : string,
            selected : boolean
        }[],
        public referedemploye : string,
        public sendme : boolean
    ){}
}