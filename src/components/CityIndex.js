import React, { PureComponent } from 'react'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import MUIDataTable from "mui-datatables"
import styled from 'styled-components'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import SvgIcon from '@material-ui/core/SvgIcon'

import SDGBar from './SDGBar'

const SDGIndexTable = styled(MUIDataTable)`
  && {
    overflow-x: auto;
  }

  .MuiTableCell-head {
    color: black;
    font-size: 1rem;
    border-top: 1px solid rgba(0,0,0,0.12);

    &:after{
      content:'';
      position:absolute;
      left: 0;
      bottom: 0;
      width:100%;
      border-bottom: 2px solid rgba(0,0,0,0.12);
    }
  }

  .MuiTableCell-body {
    color: #6c757d;
    font-size: 1rem;
  }
`

const SDGIndexTableHead = styled.th`
  && {
    border-top: 1px solid rgba(0,0,0,0.12);
    top: 0px;
    left: 0px;
    z-index: 100;
    position: sticky;
    background-color: #fff;
    padding: 0;

    &:after{
      content:'';
      position:absolute;
      left: 0;
      bottom: 0;
      width:100%;
      border-bottom: 2px solid rgba(0,0,0,0.12);
    }
  }

  button {
    width: 100%;
    padding: 20px 16px 20px 16px;
    justify-content: left;
    font-weight: bold;
    line-height: 24px;

    &:hover {
      background: #eee;
    }
  }
`

const customHead = ({index, sort, sortDirection, label}, sortColumn) => {
  const sortIndicator = (() => {
    switch(sortDirection) {
      case 'asc': return <ArrowUpwardIcon />
      case 'desc': return <ArrowDownwardIcon />
      default: return <SvgIcon />
    }
  })();

  return (
    <SDGIndexTableHead key={index}>
      <ButtonBase disabled={!sort} onClick={() => sortColumn(index)}>
        <Typography variant='body1' style={{fontWeight: 500}}>
          {label}
        </Typography>
        {sortIndicator}
      </ButtonBase>
    </SDGIndexTableHead>
  );
}

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
  sort: true,
  customFooter: (count, page, rowsPerPage, changeRowsPerPage, changePage) => {
    return <tbody></tbody>
  }
};

class CityIndex extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: [] };
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

  cityDataLoaded = cities => {
    const data =
      cities.map(city => {
        return [city['city'], city['region'],
               this.pluckFromJson(city, ['SDG1', 'SDG2', 'SDG3', 'SDG4', 'SDG5', 'SDG6', 'SDG7', 'SDG8', 'SDG9', 'SDG10', 'SDG11', 'SDG12', 'SDG13', 'SDG15', 'SDG16']),
               Number(city['rank']), Number(city['score'])]
      })

    this.setState({ data: data })
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

    const { showTooltip, hideTooltip } = this.props;

    const columns = [
      {
        name: "City",
        options: {
          sort: true,
          sortDirection: null,
          customHeadRender: customHead,
          customBodyRender: (value, tableMeta, updateValue) => {
            return <span style={{fontWeight: '500', color: 'black'}}>{value}</span>
          },
        },
      },
      {
        name: "Region",
        options: {
          sort: true,
          sortDirection: null,
          customHeadRender: customHead
        },
      },
      {
        name: "SDGs",
        options: {
          sort: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            return <SDGBar scores={value}
                           showTooltip={showTooltip}
                           hideTooltip={hideTooltip}/>;
          },
          customHeadRender: customHead
        },
      },
      {
        name: "Rank",
        options: {
          sort: true,
          sortDirection: 'asc',
          customHeadRender: customHead
        },
      },
      {
        name: "Score",
        options: {
          sort: false,
          customHeadRender: customHead
        },
      },
    ]

    return (
      <div>
        <Typography variant="h5" gutterBottom>
          The European Cities SDG Index
        </Typography>
        <Typography variant='body1' style={{color: '#6c757d'}} gutterBottom>
          Select a city to see its full profile.
        </Typography>

        <SDGIndexTable
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    );
  }
}

export default CityIndex
