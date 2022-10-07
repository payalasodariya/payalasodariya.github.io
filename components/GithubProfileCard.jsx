import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

const GithubProfileCard = ({ prof }) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Col>
            <img
              src={prof.avatar_url}
              style={{ width: "150px" }}
              alt=""
              className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
            />
          </Col>
          <Row>
            <Col lg="4"></Col>
            <Col lg="8" className="">
              <Col className="">
                <h2 className="text-white">Reach Out to me!</h2>
                <div class="footer-center">
                  <div>
                    <i className="fa fa-map-marker"></i>
                    <p>
                      <span>{prof.location}</span>
                    </p>
                  </div>

                  <div>
                    <i className="fa fa-phone"></i>
                    <p>+1 (613) 602 0476</p>
                  </div>

                  <div>
                    <i className="fa fa-envelope"></i>
                    <p>
                      <a href="mailto:payalasodariya30@gmail.com">
                        payalasodariya30@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                {/* <h2 className="text-white">Reach Out to me!</h2>
							<p className="lead text-white mt-3">
							<i className="ni ni-email-83 mr-2" /> payalasodariya30@gmail.com
							<i className="ni ni-mobile-button mr-2" /> (613)602-0476
							</p>
							<p className="text-white mt-3">{prof.bio}</p>
							<div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
								<i className="ni ni-pin-3 text-info mr-2" />
								{prof.location}
							</div> */}
              </Col>
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
