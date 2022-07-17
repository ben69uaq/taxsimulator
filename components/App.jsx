class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleTaxChange = this.handleTaxChange.bind(this);
    this.state = {
      taxnotice: new TaxNotice(3, 84867, 0, 0), // default values
    };
  }

  handleTaxChange(newTaxnotice) {
    this.setState({ taxnotice: newTaxnotice });
  }

  render() {
    return (
      <div>
        <div id="topline">
          <h1>simulateur pour un couple</h1>
          <div id="leftcolumn">
            <TaxForm taxnotice={this.state.taxnotice} onTaxChange={this.handleTaxChange}></TaxForm>
          </div>
          <div id="rightcolumn">
            <TaxDetails taxnotice={this.state.taxnotice}></TaxDetails>
          </div>
        </div>
        <div id="bottomline">
          <TaxChart taxnotice={this.state.taxnotice} selected="revenus"></TaxChart>
        </div>
      </div>
    );
  }
}
