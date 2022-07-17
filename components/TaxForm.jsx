class TaxForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let newTaxNotice = new TaxNotice(
      event.target.enfants.value,
      event.target.revenus.value,
      event.target.deductions.value,
      event.target.reductions.value);

    if (newTaxNotice.isValid()) {
      this.props.onTaxChange(newTaxNotice);
    }
    else {
      alert("corrigez le formulaire");
    }
  }

  render() {
    return (
      <div className="taxform">
        <form onSubmit={this.handleSubmit} >
          <label>nombre d'enfants à charge <input type="text" name="enfants" defaultValue={this.props.taxnotice.enfants} /></label><br />
          <label>revenus du foyer <input type="text" name="revenus" defaultValue={this.props.taxnotice.revenus} /></label><br />
          <label><abbr title="par exemple versement PER">?</abbr> charges déductibles <input type="text" name="deductions" defaultValue={this.props.taxnotice.deductions} /></label><br />
          <label><abbr title="par exemple don à un organisme">?</abbr> réduction d'impot <input type="text" name="reductions" defaultValue={this.props.taxnotice.reductions} /></label><br />
          <input type="submit" value="calculer" />
        </form>
      </div>);
  }
}