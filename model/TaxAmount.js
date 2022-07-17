class TaxAmount {
    constructor(impotSansPlafond, impotAvecPlafond, impotSansDecote, impotAvecDecote, impotFinal) {
        this.impotSansPlafond = Math.round(impotSansPlafond);
        this.impotAvecPlafond = Math.round(impotAvecPlafond);
        this.impotSansDecote = Math.round(impotSansDecote);
        this.impotAvecDecote = Math.round(impotAvecDecote);
        this.impotFinal = Math.round(impotFinal);
    }
}