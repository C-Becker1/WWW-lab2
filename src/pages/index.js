import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      
        Christian Sepúlveda, Camilo Farah, Sebastián Rojas
      {", "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const IndexPage = () => (
  <div>
  <Layout>
    <Seo title="Home" />
    <Container>
      <Typography variant="h4" style={{textAlign: 'center'}}>
        ¡Bienvenido a tu visualizador de imágenes!
      </Typography>
    </Container>
    <br/>
    <Container>
      <Typography variant="h6" style={{textAlign: 'justify'}}>
        En esta página web podrás acceder a todas tus imágenes, tanto locales como en la nube!
      </Typography>
    </Container>
    <Copyright></Copyright>

  </Layout>
</div>
)

export default IndexPage
