class TaxChart extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            selected: this.props.selected
        };
    }

    handleChange(e) {
        this.setState({selected:e.target.value});
      }

    render() {
        return (
            <div className="taxchart">
                <h2>impot en fonction des
                    <select value={this.state.selected} onChange={this.handleChange}>
                        <option value="enfants">enfants</option>
                        <option value="revenus">revenus</option>
                        <option value="deductions">déductions</option>
                        <option value="reductions">réductions</option>
                    </select>
                </h2>
                <div className="chart">
                    <canvas id="deductionchart"></canvas>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let arrayRange = this.getRange(this.props.taxnotice[this.state.selected]);
        let arrayImpot = this.getImpot(this.props.taxnotice, arrayRange);
        this.chart = new Chart(document.getElementById('deductionchart'), {
            type: 'line',
            data: {
                labels: arrayRange,
                datasets: [{
                    data: arrayImpot,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    componentDidUpdate() {
        let arrayDeductions = this.getRange(this.props.taxnotice[this.state.selected]);
        let arrayImpot = this.getImpot(this.props.taxnotice, arrayDeductions);
        this.chart.data.labels = arrayDeductions;
        this.chart.data.datasets[0].data = arrayImpot;
        this.chart.update();
    }

    getRange(maxrange) {
        let step = this.getStep(maxrange);
        let unitmaxrange = Math.floor(maxrange / step) + 5; // 10300€ -> 21
        let unitrange = [...Array(unitmaxrange).keys()]; // 0, 1, 2, ... , 21
        return unitrange.map(u => u * step); // 0, 500, 1000, ... , 10500
    }

    getImpot(taxnotice, rangeDeductions) {
        return rangeDeductions
            .map(d => new TaxNotice(
                this.state.selected == "enfants" ? d : taxnotice.enfants,
                this.state.selected == "revenus" ? d : taxnotice.revenus,
                this.state.selected == "deductions" ? d : taxnotice.deductions,
                this.state.selected == "reductions" ? d : taxnotice.reductions))
            .map(n => TaxCalculator.calculate(n))
            .map(a => a.impotFinal);
    }

    getStep(maxrange) {
        if (maxrange > 100000) {
            return 5000;
        }
        if (maxrange > 50000) {
            return 2000;
        }
        if (maxrange > 25000) {
            return 1000;
        }
        if (maxrange > 5000) {
            return 500;
        }
        if (maxrange > 2000) {
            return 100;
        }
        if (maxrange > 1000) {
            return 50;
        }
        if (maxrange >= 500) {
            return 20;
        }
        if (maxrange > 250) {
            return 10;
        }
        if (maxrange > 100) {
            return 5;
        }
        if (maxrange >= 50) {
            return 2;
        }
        return 1;
    }

}