import Header from "./Header";
import { Container, Card, CardBody, CardHeader, CardFooter } from 'reactstrap'
import { PDFViewer } from '@react-pdf/renderer';
import FractalDoc from "./FractalDoc";

export function LandingPage() {

  return (
    <>
      <Header />
      <Container>
        <Card style={{ fontSize: 35 }}>
          <CardHeader tag='h2'>
            <table className="table table-stripped table-hover">
              <tr>
                <td>Name:</td><td>Isha Ibraheem</td> <td style={{ paddingLeft: 100 }}></td> <td>Age</td> <td>18</td>
              </tr>
              <tr>
                <td>Lab No.:</td><td>QCP/21/2123</td> <td style={{ paddingLeft: 100 }}></td> <td>Gender</td> <td>Male</td>
              </tr>
            </table>
          </CardHeader>
          <CardBody>
            <Container>
            <PDFViewer style={{width:'100%', height:600}}>
              <FractalDoc />
            </PDFViewer>
            </Container>
          </CardBody>
          <CardFooter className="text-center">
            <button className="button btn-primary btn-lg">
              <span>Print</span> <i className="fa fa-print"></i>
            </button>
          </CardFooter>
        </Card>
      </Container>
    </>
  );
}
