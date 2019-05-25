import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import MUIDataTable from "mui-datatables"

import SDGBar from './SDGBar'

const columns = [
  {
    name: "City",
    options: {
      sort: true
    },
  },
  {
    name: "Region",
    options: {
      sort: true
    },
  },
  {
    name: "SDGs",
    options: {
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return <SDGBar scores={value} />;
      }
    },
  },
  {
    name: "Rank",
    options: {
      sort: true
    },
  },
  {
    name: "Score",
    options: {
      sort: false
    },
  },
]

const options = {
  download: false,
  viewColumns: false,
  print: false,
  filter: false,
  responsive: 'none',
  selectableRows: 'none',
  elevation: 0,
  rowsPerPage: 500,
  search: false,
  customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage) => {}
};

class CityIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    fetch('/data/cities.json')
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(data => this.cityDataLoaded(data));
  }

  cityDataLoaded = (cities) => {
    this.setState({
      data:
        cities.map(city => {
        return [city['city'], city['region'],
               this.pluckFromJson(city, ['SDG1', 'SDG2', 'SDG3', 'SDG4', 'SDG5', 'SDG6', 'SDG7', 'SDG8', 'SDG9', 'SDG10', 'SDG11', 'SDG12', 'SDG13', 'SDG15', 'SDG16']),
               Number(city['rank']), Number(city['score'])]
      })

    })
  }

  pluckFromJson(json, keys) {
    var output = {}
    keys.forEach(key => {
      output[key] = json[key]
    })
    return output
  }

  render() {
    const { data } = this.state

    return (
      <div>
        <Typography variant="h4" gutterBottom>
          The European Cities SDG Index
        </Typography>
        <Typography variant='body1'>
          Select a city to see its full profile.
        </Typography>

        <MUIDataTable
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}

export default CityIndex
