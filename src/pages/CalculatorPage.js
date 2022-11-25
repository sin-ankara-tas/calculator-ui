import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import { withTranslation } from "react-i18next";
import axios from "axios";

class CalculatorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryNumber: "",
      secondaryNumber: "",
      resultValue: "",
      resultStatus: "",
      calculationType: "",

      errors: {},
    };

    this.primaryNumberChanged = this.primaryNumberChanged.bind(this);
    this.secondNumberChanged = this.secondNumberChanged.bind(this);
  }

  calculate() {
    this.doPostRequest(process.env.REACT_APP_CALCULATOR_SERVICE_URL);
  }

  doPostRequest(calculatorServiceUrl) {
    const body = JSON.stringify({
      firstNumberText: this.state.primaryNumber,
      secondNumberText: this.state.secondaryNumber,
      calculationType: this.state.calculationType,
    });

    const headers = {
      "Content-Type": "application/json;  charset=utf-8",
    };

    axios.post(calculatorServiceUrl, body, { headers }).then((response) => {
      this.setState({ resultValue: response.data.result });
      this.setState({ resultStatus: response.data.status });
    });
  }

  handleCTypeChange = (event) => {
    this.setState({ calculationType: event.target.value });
  };

  primaryNumberChanged(event) {
    console.log(event.target);
    this.setState({ primaryNumber: event.target.value });
  }

  secondNumberChanged(event) {
    this.setState({ secondaryNumber: event.target.value });
  }

  render() {
    const { t } = this.props;

    return (
      <div className="Checkout">
        <body className="Checkout-body">
          <div>
            <TextField
              type="input"
              value={this.state.primaryNumber}
              onChange={this.primaryNumberChanged}
              id="primaryNumber"
              label={t("PrimaryNumber")}
            />
          </div>

          <div>
            <TextField
              type="input"
              value={this.state.secondaryNumber}
              onChange={this.secondNumberChanged}
              id="secondaryNumber"
              label={t("SecondaryNumber")}
            />
          </div>

          <InputLabel>{t("CalculationType")}</InputLabel>

          <Select
            id="calculationType"
            value={this.state.calculationType}
            label={t("Addition")}
            onChange={this.handleCTypeChange}
            defaultValue="Default Value"
          >
            <MenuItem id={"ADDITION"} value={"ADDITION"} divider={true}>
              {t("Addition")}
            </MenuItem>
            <MenuItem id={"SUBTRACTION"} value={"SUBTRACTION"} divider={true}>
              {t("Subtraction")}
            </MenuItem>
            <MenuItem id={"DIVISION"} value={"DIVISION"} divider={true}>
              {t("Division")}
            </MenuItem>
            <MenuItem
              id={"MULTIPLICATION"}
              value={"MULTIPLICATION"}
              divider={true}
            >
              {t("Multiplication")}
            </MenuItem>
          </Select>

          <Button
            id="calculateBtn"
            onClick={() => {
              this.calculate();
            }}
            variant="contained"
          >
            {t("Calculate")}
          </Button>
          <form noValidate autoComplete="off">
            <TextField
              type="output"
              value={this.state.resultValue}
              id="resultValue"
              label={t("ResultValue")}
              shrink="true"
            />
            <TextField
              type="output"
              shrink="true"
              value={this.state.resultStatus}
              id="resultMessage"
              label={t("ResultMessage")}
            />
          </form>
        </body>
      </div>
    );
  }
}

export default withTranslation()(CalculatorPage);
