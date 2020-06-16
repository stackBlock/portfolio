import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { Button, Container, Row, Col } from "reactstrap";
import Typed from "react-typed";
import { useGetUser } from "../actions/user";
import { useGetPostById } from "../actions";

const ROLES = [
  "Developer",
  "Tech Lover",
  "Team player",
  "Courser Creator",
  "React.js",
  "Angular",
  "Python",
];
const Index = () => {
  const { user, userLoading } = useGetUser();

  return (
    <BaseLayout user={user} userLoading={userLoading} className="cover">
      {/* <BasePage> */}
      <div className="main-section">
        <div className="background-image">
          <img src="/images/background-index.png" />
        </div>

        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper`}>
                  <div className="back">
                    <div className="hero-section-content">
                      <h2> Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Have a look at my portfolio and job history.
                      </div>
                    </div>
                    <img className="image" src="/images/section-1.png" />
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>
                  Welcome to the portfolio website of Anthony Stachowitz. Get
                  informed, collaborate and discover projects I was working on
                  through the years!
                </h1>
              </div>
              <Typed
                loop
                strings={ROLES}
                typeSpeed={50}
                backSpeed={70}
                backDelay={1000}
                loopCount={0}
                showCursor
                className="self-typed"
                cursorChar="_"
              ></Typed>
              <div className="hero-welcome-bio">
                <h1>Let's take a look on my work.</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* </BasePage> */}
    </BaseLayout>
  );
};

export default Index;
