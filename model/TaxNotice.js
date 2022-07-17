class TaxNotice {
    constructor(enfants, revenus, deductions, reductions) {
        this.enfants = Number.parseInt(enfants);
        this.revenus = Number.parseInt(revenus);
        this.deductions = Number.parseInt(deductions);
        this.reductions = Number.parseInt(reductions);
    }

    isValid() {
        return Number.isInteger(this.enfants)
            && Number.isInteger(this.revenus)
            && Number.isInteger(this.deductions)
            && Number.isInteger(this.reductions)
    }
}