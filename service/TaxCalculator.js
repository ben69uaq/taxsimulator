class TaxCalculator {

    static tranche1 = 11498;
    static tranche2 = 29316;
    static tranche3 = 83824;
    static tranche4 = 180294;
    static maximumDecote = 3191;

    static calculate (taxnotice) {
        let impotSansPlafond = TaxCalculatorWithoutCap.calculate(taxnotice);
        let impotAvecPlafond = TaxCalculatorWithCap.calculate(taxnotice);
        let impotSansDecote = impotSansPlafond > impotAvecPlafond ? impotSansPlafond : impotAvecPlafond;
        let decote = this.calculateDecote(impotSansDecote);
        let impotAvecDecote = impotSansDecote - decote;
        let reduction = taxnotice.reductions * 0.66;
        let impotFinal = impotAvecDecote > reduction ? impotAvecDecote - reduction : 0;
        return new TaxAmount(impotSansPlafond, impotAvecPlafond, impotSansDecote, impotAvecDecote, impotFinal);
    }

    static getParts(enfants) {
        if (enfants == 0) {
            return 2;
        }
        if (enfants == 1) {
            return 2.5;
        }
        return 2 + enfants -1;
    }

    static calculateRevenuNet(revenus, deduction) {
        return revenus * 0.9 - deduction;
    }

    static calculateImpotQuotient(quotient) {
        let impot = 0;
        if (quotient < this.tranche1) {
            return impot;
        }
        if (quotient < this.tranche2) {
            return 0.11 * (quotient - this.tranche1);
        }
        impot += 0.11 * (this.tranche2 - this.tranche1);
        if (quotient < this.tranche3) {
            return impot + 0.30 * (quotient - this.tranche2);
        }
        impot += 0.30 * (this.tranche3 - this.tranche2);
        if (quotient < this.tranche4) {
            return impot + 0.41 * (quotient - this.tranche3);
        }
        impot += 0.41 * (this.tranche4 - this.tranche3);
        return impot + 0.45 * (quotient - this.tranche4);
    }

    static calculateDecote(impot) {
        if(impot < this.maximumDecote) {
            return 1444 - impot * 0.4525;
        }
        return 0;
    }

}

