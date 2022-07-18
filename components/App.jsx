class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleTaxChange = this.handleTaxChange.bind(this);
    this.handleChartChange = this.handleChartChange.bind(this);
    this.state = { // default values
      taxnotice: new TaxNotice(3, 100000, 2000, 1000),
      selected: "revenus"
    };
  }

  handleTaxChange(newTaxnotice) {
    this.setState({ taxnotice: newTaxnotice });
  }

  handleChartChange(e) {
    this.setState({ selected: e.target.value });
}

  render() {
    return (
      <div id="container">
        <h1>impot pour un couple</h1>
        <div id="topline">
          <div id="leftcolumn">
            <TaxForm taxnotice={this.state.taxnotice} onTaxChange={this.handleTaxChange}></TaxForm>
          </div>
          <div id="rightcolumn">
            <TaxDetails taxnotice={this.state.taxnotice}></TaxDetails>
          </div>
        </div>
        <h2>impot en fonction des
                    <select value={this.state.selected} onChange={this.handleChartChange}>
                        <option value="enfants">enfants</option>
                        <option value="revenus">revenus</option>
                        <option value="deductions">déductions</option>
                        <option value="reductions">réductions</option>
                    </select>
                </h2>
        <div id="bottomline">
          <TaxChart taxnotice={this.state.taxnotice} selected={this.state.selected}></TaxChart>
        </div>
      </div>
    );
  }
}
