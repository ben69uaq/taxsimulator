class TaxDetails extends React.Component {

  render() {
    let taxamount = TaxCalculator.calculate(this.props.taxnotice);
    return (
      <div className="taxdetails">
        <div>
          <span className={this.isImpotPlafond(taxamount) ? 'amount hidden' : 'amount'}>{taxamount.impotSansPlafond}€</span> impot sans plafonnement
        </div>
        <div>
          <span className={this.isImpotPlafond(taxamount) ? 'amount' : 'amount hidden'}>{taxamount.impotAvecPlafond}€</span> impot avec plafonnement <abbr title="plafonnement des effets de l'avantage procuré par du quotient famillial">?</abbr>
        </div>
        <div>
          <span className="amount">{taxamount.impotSansDecote}€</span> impot sans la décote
        </div>
        <div>
          <span className={this.isImpotDecote(taxamount) ? 'amount' : 'amount hidden'}>{taxamount.impotAvecDecote}€</span> impot avec la décote <abbr title="décote applicable lorsque l'impot est inférieur à 3 191€ en 2024">?</abbr>
        </div>
        <div>
          <span className="amount highlight">{taxamount.impotFinal}€</span> impot final
        </div>
      </div>
    );
  }

  isImpotPlafond(taxamount) {
    return taxamount.impotAvecPlafond > taxamount.impotSansPlafond;
  }

  isImpotDecote(taxamount) {
    return taxamount.impotAvecDecote != taxamount.impotSansDecote;
  }
}
