class TaxCalculatorWithoutCap extends TaxCalculator{
    static calculate(taxnotice) {
        let parts = super.getParts(taxnotice.enfants);
        let revenuNet = super.calculateRevenuNet(taxnotice.revenus , taxnotice.deductions);
        let quotient = revenuNet / parts;
        let impotQuotient = super.calculateImpotQuotient(quotient);
        let impot = impotQuotient * parts;
        return impot > 0 ? impot : 0;
    }
}