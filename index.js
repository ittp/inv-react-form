import React, { Component } from 'react';
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
const edd = (a) => (
  <Paragraph
    editable={{
      tooltip: false,
      text: '111',
      onChange: (title) => {
        console.log(title);
      },
    }}
  >
    {a}
  </Paragraph>
);
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      types: {},
      dbs: [
        {
          key: 1,
          org: 1,
          year: 2021,
          db: 'db.db',
        },
      ],
    };
  }

  render() {
    return (
      <Layout>
        <Header></Header>
        <Form>
          <PageHeader title={<Input />} extra={<Button>V</Button>} />
        </Form>
        <Content>
          <Table>
            <tr>
              <td>1</td>
            </tr>
          </Table>
        </Content>
        <Footer>
          <h3>Config</h3>
        </Footer>
      </Layout>
    );
  }
}

render(<App />, document.getElementById('root'));
