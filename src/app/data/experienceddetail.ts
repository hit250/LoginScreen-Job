export class experiencedetails{
    constructor(
        public yearofexperience : number,
        public cctc : number,
        public exctc : number,
        public technologyex:{
            name : string,
            selected : boolean
        }[],
        public othertechnology : string,
        public technologyfamilier:{
            name : string,
            selected : boolean
        }[],
        public othertechnologyfa : string,
        public notice:{
            name : string,
            value : string
        }[],
        public noticeselected : string,
        public date : string,
        public durationonotice : {
            [key : string] : string
        },
        public selecteduration : string,
        public testappereance:{
            name : string,
            value : string
        }[],
        public textappearenceselected : string,
        public applyrole : string
    ){}
}