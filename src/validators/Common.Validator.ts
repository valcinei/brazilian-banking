


export class CommonValidator{
    
    constructor(){}

    public agencyNumberIsValid(agencyNumber: string):boolean{
        return /^(?!0000)([0-9]{4})$/.test(agencyNumber);
    }



}