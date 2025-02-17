import React, { Component } from "react";
import { connect } from "react-redux";
import { trackPromise } from "react-promise-tracker";
import Moment from "react-moment";
import "moment-timezone";
import { actShowNotify, actHideNotify } from "./../actions/index";
import { fetchWithDelay } from "./../api/fetch";
import { LoadingSpinnerComponent } from "./../components/LoadingSpinnerComponent";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      covid19Items: [],
    };
  }
  showCovid19List(covid19Items) {
    let covid19Html = null;
    if (covid19Items.length > 0) {
      let trHtml = null;
      trHtml = covid19Items.map((covid19Item, index) => {
        let covid19ItemDate = (
          <Moment format="MM/DD/YYYY">{covid19Item.Date}</Moment>
        );
        return (
          <tr key={index}>
            <td>{covid19Item.Cases}</td>
            <td>{covid19Item.City}</td>
            <td>{covid19Item.CityCode}</td>
            <td>{covid19Item.Country}</td>
            <td>{covid19Item.CountryCode}</td>
            <td>{covid19ItemDate}</td>
            <td>{covid19Item.Lat}</td>
            <td>{covid19Item.Lon}</td>
            <td>{covid19Item.Province}</td>
            <td>{covid19Item.Status}</td>
          </tr>
        );
      });
      covid19Html = (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Cases</th>
              <th scope="col">City</th>
              <th scope="col">CityCode</th>
              <th scope="col">Country</th>
              <th scope="col">CountryCode</th>
              <th scope="col">Date</th>
              <th scope="col">Lat</th>
              <th scope="col">Lon</th>
              <th scope="col">Province</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>{trHtml}</tbody>
        </table>
      );
    } else {
      covid19Html = <h3 className="text-center">No data</h3>;
    }
    return covid19Html;
  }
  setCovid19data(countrySlug) {
    if (countrySlug !== "") {
      let data = [];
      let url =
        "https://api.covid19api.com/country/" +
        countrySlug +
        "/status/confirmed";
      trackPromise(
        fetchWithDelay(url, "GET").then((covid19DataResponse) => {
          if (covid19DataResponse.message == null) {
            data = covid19DataResponse.map((item, index) => {
              return item;
            });
            this.setState({ covid19Items: data });
          } else {
            this.setState({ covid19Items: [] });
          }
        })
      );
    } else {
      this.setState({ covid19Items: [] });
    }
  }
  componentWillMount() {
    let { query_country_name } = this.props;
    this.setCovid19data(query_country_name);
  }



  componentWillReceiveProps(nextProps) {
    let { query_country_name } = nextProps;
    this.setCovid19data(query_country_name);        
  }
  render() {
    let { covid19Items } = this.state;    
    return (
      <div>
        <LoadingSpinnerComponent />
        {this.showCovid19List(covid19Items)}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    query_country_name: state.search,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showNotify: () => {
      dispatch(actShowNotify());
    },
    hideNotify: () => {
      dispatch(actHideNotify());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
