import React, { Component } from "react";
import {Link} from "react-router-dom";
import API from "../../utils/API.js";
import { Button, Card, CardTitle, Col, Row, Container } from "react-materialize";
import Nav from "../../components/Navbar";
import StudentCard from "../../components/StudentCard";
import TutorCard from "../../components/Tutor";
import "./Tutors.css";

class Tutors extends Component {

state = {
  studentResults: [
    {
      name: "Mike Bechtel",
      picture: "public/Images/downloadTest.jpg",
      description: "I like turtles",
    }
  ],
  teacherName:"Mike Bechtel",
  teacherPic:"public/downloadTest.jpg",
  contract:"",
  totalStudents:"",
  teacherKey:""
};



// componentDidMount(){
//   this.loadStudents();
// };

// loadStudents = () => {
//   API.getStudents()
//     .then(res =>
//       this.setState({ studentResults: res.data })
//     )
//     .catch(err => console.log(err));
// };

//counts the number of students the tutor has taught/input
countStudents = () =>{
  let len = this.state.studentResults.length;
  for (let i = 0; i < len; i++) {
    this.state.totalStudents++;
  }
  return this.state.totalStudents;
}

  render(){
    return(
      <div>
      <Nav />
        <Container>
          <Row>
            <Col s={12}>
              <Row>
                <Col s={6}>
                  <TutorCard
                    header={this.state.teacherPic}
                    title={this.state.teacherName}>

                    <Link to={"/account/"}>
                      <strong>Edit My Account Details</strong>
                    </Link>

                  </TutorCard>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr/>
          <Row>

          {this.state.studentResults.map(result => (
            <StudentCard
              header={result.picture}
              reveal={result.description}
              title={result.name}
            />
          ))}

          </Row>
        </Container>
      </div>
    );
  };
}; // end class

export default Tutors;
