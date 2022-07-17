class TaxDetails extends React.Component {

  render() {
    let taxamount = TaxCalculator.calculate(this.props.taxnotice);
    return (
      <div class="taxdetails">
        <div>
          <span class={this.isImpotPlafond(taxamount) ? 'amount' : 'amount hidden'}>{taxamount.impotSansPlafond}€</span> impot sans plafonnement
        </div>
        <div>
          <span class={this.isImpotPlafond(taxamount) ? 'amount hidden' : 'amount'}>{taxamount.impotAvecPlafond}€</span> impot avec plafonnement <abbr title="plafonnement des effets de l'avantage procuré par du quotient famillial">?</abbr>
        </div>
        <div>
          <span class="amount">{taxamount.impotSansDecote}€</span> impot sans la décote
        </div>
        <div>
          <span class={this.isImpotDecote(taxamount) ? 'amount' : 'amount hidden'}>{taxamount.impotAvecDecote}€</span> impot avec la décote <abbr title="décote applicable lorsque l'impot est inférieur à 2 848€ en 2021">?</abbr>
        </div>
        <div>
          <span class="amount highlight">{taxamount.impotFinal}€</span>impot final
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