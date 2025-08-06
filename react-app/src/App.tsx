import Card, { CardBody } from "./components/Card";
import List from "./components/List";
function App() {
  const list = ["GOKU", "MASTER CHIEF", "METRO"];
  return (
    <Card>
      <CardBody title="Hola mundo" text="Este es el texto" />
      <List data={list}></List>
    </Card>
  );
}
export default App;
