class TaxCalculatorWithCap extends TaxCalculator{
    static plafond = 1592;

    static calculate(taxnotice) {
        let part = super.getParts(taxnotice.enfants);
        let revenuNet = super.calculateRevenuNet(taxnotice.revenus , taxnotice.deductions);

        let partsNonPlafonnees = 2;
        let demiPartsPlafonnees = (part - partsNonPlafonnees) * 2; 

        let quotient = revenuNet / partsNonPlafonnees;
        let impotQuotient = super.calculateImpotQuotient(quotient);
        let impot = impotQuotient * partsNonPlafonnees - (this.plafond * demiPartsPlafonnees);
        return impot > 0 ? impot : 0;
    }
}