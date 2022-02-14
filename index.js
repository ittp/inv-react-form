import React, { Component, setState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {
  
  Typography,
  Table,
  Layout,
  Space,
  Button,
  Grid,
  PageHeader,
  Input,
  InputNumber,
  Select,
  Form,
  AutoComplete,
  Upload,
  List,
} from 'antd';
import FormBuilder from 'antd-form-builder';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
const { Sidebar, Header, Content, Footer } = Layout;
import swr from 'swr';
const {} = List;
// const { Header } = ;

const { Paragraph } = Typography;

const columns = {
  id: 'ID',
  key: 'УНО',
  type: 'Тип',
  manufacturer: 'Производитель',
  model: 'Модель',
  serial: 'SN',
  inventory: 'Инв. номер',
  year: 'Год',
  place: 'Место',
};

const createColumns = async (config) => {
  return Object.keys(config).map((i, key) => {
    const column = { key, dataIndex: i, title: columns[i] }
    console.log(column);
    return column
  });
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      columns: [
        { key: 1, title: 1, dataIndex: 'key'}
      ],
      dataSource: []
    };
  }

  handleUpdate(data) {
    console.log(data)
  }

  handleSave() {

  }

  handleImport() {

  }
  
  handleExport() {

  }

  handleSearch() {
    
  }

  createColumns(config)
 
  columns = {
    id: 'ID',
    key: 'УНО',
    type: 'Тип',
    manufacturer: 'Производитель',
    model: 'Модель',
    serial: 'SN',
    inventory: 'Инв. номер',
    year: 'Год',
    place: 'Место',
  };
  
  createColumns = async (config) => {
    return Object.keys(config).map((i, key) => {
      const column = { key, dataIndex: i, title: columns[i] }
      console.log(column);
      return column
    });
  }
  
  
  render() {
    let cols = createColumns(columns)
    this.setState({ columns: [{ key:1, title: "we"}]})

    let state = this.state
    state.setState
    console.log(state)
    return (
      <Layout>
        <Header></Header>
        <Form>
          <PageHeader title={<Input />} extra={<Button>+</Button>} />
        </Form>
        <Content>
          <Table columns={this.state.columns}></Table>
        </Content>

        <Footer>
          <h3>Config</h3>
        </Footer>
      </Layout>
    );
  }
}

render(<App />, document.getElementById('root'));
