/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Vajda Balázs{" "}
                        <span>"Segítek megérteni és megoldani"</span>
                      </h1>
                      <p className="lead text-white">
                        Üdvözöllek! Alkalmazott matematikus diplomámmal és
                        magántanári tapasztalatommal segítek megérteni és
                        megszeretni a matematikát!
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 99"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-hat-3" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Tanítási szolgáltatások
                          </h6>
                          <p className="description mt-3">
                            <strong>Gimiseknek</strong>
                            <ul>
                              <li>8. - 12. osztály</li>
                            </ul>
                            <strong>Érettségire készülőknek</strong>
                            <ul>
                              <li>Közép / Emelt szint</li>
                            </ul>
                            <strong>Egyetemistáknak</strong>
                            <ul>
                              <li>Analízis</li>
                              <li>Algebra</li>
                              <li>Valszám</li>
                              <li>Statisztika</li>
                              <li>Végesmatek</li>
                              <li>Stb...</li>
                            </ul>
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              gimisek
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              érettségire készülők
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              egyetemistáknak
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-books" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Tanítási filozófia
                          </h6>
                          <p className="description mt-3">
                            Személyre szabott, jó hangulatú órák keretein belül
                            segítek, hogy elérd a céljaidat, akár átmenni
                            szeretnél a felmérésen, akár a lehető legjobb
                            eredményt elérni! Tanításom megértés alapú, mivel
                            így sokkal stabilabb tudásra tehetsz szert, mint
                            magolással a matematika világában. Várlak
                            szeretettel akár ONLINE akár személyesen!
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              innovatív
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              érdekes
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              diákközpontú
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-world" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Első óra ingyenes
                          </h6>
                          <p className="description mt-3">
                            Első óra ingyenes, várlak szeretettel! Tapasztald
                            meg az oktatásom minőségét és stílusát
                            kötelezettségek nélkül. Az első óra után rugalmas
                            időpontokat kínálok, hogy mindenki megtalálja a neki
                            leginkább megfelelő időt a tanuláshoz.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              ingyenes próbaóra
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              személyes órák
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              mentoronline órák
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/gyok.png")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Játék és szórakozás
                      </h4>
                      <p className="lead text-italic text-white">
                        A matematika egy izgalmas játék, amely tele van
                        felfedezési lehetőségekkel és kihívásokkal.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div
                      className="shadow rounded-circle mb-5 mx-auto"
                      style={{
                        width: "150px",
                        height: "150px",
                        overflow: "hidden",
                      }}
                    >
                      <CardImg
                        src={require("assets/img/prof_kep_2.jpeg")}
                        className="img-fluid"
                      />
                    </div>
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Vajda Balázs</span>
                        <small className="h6 text-muted">matematikus</small>
                      </h5>
                    </div>
                    <h3>Rólam</h3>
                    <p className="lead">
                      Szia kedves Érdeklődő! Balázs vagyok, 24 éves mesterszakos
                      hallgató. Általános iskola óta szenvedélyesen szeretem a
                      matematikát, és iskolás éveim alatt rendszeresen részt
                      vettem különböző matekversenyeken. Mindig is érdekesnek
                      találtam a matek fejtörők megoldását és a mögöttük rejlő
                      logika megértését. Alkalmazott matematikus diplomám során
                      mély és átfogó matematikai tudásra tettem szert, amit az
                      évek alatt szerzett magántanári tapasztalataimmal ötvözök.
                      Elsődleges célom, hogy a Te igényeidet és céljaidat szem
                      előtt tartva, személyre szabott órákat tartsak Neked!
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid rounded"
                      src={require("assets/img/stat.jpg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-money-coins" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">Óradíj</h5>
                          <p>
                            Az órák ára 6000 Ft / óra, amely tartalmazza a
                            személyre szabott tananyagot, a rugalmas
                            időbeosztást és az egyéni figyelmet, hogy a
                            matematika tanulás valóban hatékony és élvezetes
                            legyen számodra.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                    <Row className="justify-content-center align-items-center mt-4">
                      <i className="ni ni-money-coins text-success mr-2" />
                      <span className="h5 font-weight-bold">6000 Ft / óra</span>
                    </Row>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-archive-2" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Rugalmasság és Megértés
                          </h5>
                          <p>
                            Az oktatási módszerem rugalmas, alkalmazkodik a te
                            időbeosztásodhoz és tanulási igényeidhez. A célom,
                            hogy támogassalak a matematika kihívásaiban és
                            segítséget nyújtsak a céljaid elérésében.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>

          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">A csodás csapat</h2>
                  <p className="lead text-muted"></p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0 m-auto" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/prof_kep_2.jpeg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Vajda Balázs</span>
                        <small className="h6 text-muted">matematikus</small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="warning"
                          href="mailto:megertemmatek@gmail.com"
                        >
                          <i className="fa fa-envelope" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="https://www.linkedin.com/"
                        >
                          <i class="fa fa-linkedin" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="https://www.facebook.com"
                        >
                          <i className="fa fa-facebook-square" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/* <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                        We made website building easier for you.
                      </h3>
                      <p className="lead text-white mt-3">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture.
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                      >
                        Download React
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section> */}
          {/* <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Építs valamit</h2>
                  <p className="lead text-white">
                    A matematika alapvető fontosságú a mindennapi életben és a
                    tudományos fejlődésben. Segít abban, hogy megértsük a világ
                    működését, fejleszti a problémamegoldó képességeket és
                    hozzájárul a kritikai gondolkodás fejlődéséhez.
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Problémamegoldó eszközök</h5>
                  <p className="text-white mt-3">
                    A matematika tanulása során fejlesztjük a logikai
                    gondolkodást és az absztrakt problémák megoldására való
                    képességet, amelyek nélkülözhetetlenek a modern
                    társadalomban.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Szakmai fejlődés</h5>
                  <p className="text-white mt-3">
                    A matematika megértése és alkalmazása lehetővé teszi, hogy
                    mélyebb betekintést nyerjünk más tudományágakba is, és
                    hatékonyabban működjünk együtt más szakemberekkel.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Kreativitás és innováció</h5>
                  <p className="text-white mt-3">
                    A matematikai gondolkodás serkenti a kreativitást és az új
                    ötletek generálását, amelyek segítenek új megoldásokat
                    találni a kihívásokra.
                  </p>
                </Col>
              </Row>
            </Container>
            
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 99"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Matektudásom</h4>
                      <p>
                        Matematikai diplomával rendelkezem [Az egyetem neve],
                        ahol mélyebb megértést szereztem a különböző matematikai
                        fogalmakról, beleértve a differenciál- és
                        integrálszámítást, az algebrát és a statisztikát is.
                        Tanulmányaim során lenyűgözött a matematikai elvek
                        eleganciája és pontossága.
                      </p>
                      <p>
                        Oktatási háttérem segít abban, hogy hatékonyan tudjam
                        közvetíteni a bonyolult matematikai ötleteket minden
                        szintű diáknak. Hiszem, hogy a matematika alapos
                        megértése nemcsak a problémamegoldó képességeket
                        fejleszti, hanem kritikai gondolkodást és logikai
                        következtetési képességeket is, amelyek az élethosszig
                        tartó tanulás szempontjából alapvetőek.
                      </p>
                      <p>
                        Arra törekszem, hogy kiváló matematika oktatóvá váljak,
                        elkötelezett vagyok abban, hogy élvezetes tanulási
                        környezetet teremtsek, ahol a diákok felfedezhetik a
                        matematika szépségét és relevanciáját mindennapi
                        életükben. Izgatottan várom ezt az utat, hogy általános
                        iskolásokat segítsek a matematika oktatásában.
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section> */}
          {/* <Download /> */}
        </main>
        {/* <CardsFooter /> */}
        <div className="w-100 border text-center bg-gradient-secondary">
          <a href="http://ujjweb.hu/ujjweb" target="_blank">
            Készítette: Ujj Norbert
          </a>
        </div>
      </>
    );
  }
}

export default Landing;
