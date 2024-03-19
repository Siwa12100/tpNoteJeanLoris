// ValidationError.js
export class ValidationErreur extends Error {

    constructor(message, field) {
        
        super(message);
        this.name = "ValidationErreur";
        this.field = field;
    }
}
