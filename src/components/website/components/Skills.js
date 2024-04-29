import React from 'react';
import MediaQuery from 'react-responsive';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import javaImg from '../resources/Java.png';
import androidImg from '../resources/Android.png';
import cImg from '../resources/C.png';
import cppImg from '../resources/C++.png';
import pythonImg from '../resources/Python.png';
import sqlImg from '../resources/SQL.png';
import javascriptImg from '../resources/Javascript.png';
import reactImg from '../resources/React.png';
import * as skillsText from './text/skillsText';

const styles = {
  skillSection: {
    margin: '0px',
    padding: '0px',
    position: 'relative',
    textAlign: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    backgroundColor: '#f5b23f',
    zIndex: 1,
    width: '100%',
    maxWidth: '100%',
    minHeight: '100vh',
  },

  skillsCard: {
    margin: '10px',
    padding: '10px',
    width: '190px',
    height: '215px',
    objectFit: 'cover',
    alignItems: 'center',
    borderRadius: '15px',
  },

  cardRow: {
    display: 'flex',
    flexFlow: 'row wrap',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  skillImage: {
    objectFit: 'scale-down',
    margin: 'auto',
  },

  smallSkillImage: {
    width: '90%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    objectFit: 'scale-down',
    marginTop: '5%',
    marginBottom: '5%',
  },
};

/**
 * The Skills Page
 * @return {JSX.Element} Skills Page
 */
export default function Skills() {
  return (
    <div>
      <MediaQuery minWidth={769}>
        <div style={styles.skillSection}>
          <h1>{skillsText.HEADER}</h1>
          <div>
            <CardGroup style={styles.cardRow}>
              <Card style={styles.skillsCard}>
                <Card.Img
                  data-testid="jsImage"
                  src={javascriptImg}
                  style={styles.skillImage}
                />
                <Card.Text style={styles.text}>{skillsText.JS}</Card.Text>
              </Card>
              <Card style={styles.skillsCard}>
                <Card.Img
                  data-testid="reactImage"
                  src={reactImg}
                  style={styles.skillImage}
                />
                <Card.Text style={styles.text}>{skillsText.REACT}</Card.Text>
              </Card>
              <Card style={styles.skillsCard}>
                <Card.Img
                  data-testid="javaImage"
                  src={javaImg}
                  style={styles.skillImage}
                />
                <Card.Text style={styles.text}>{skillsText.JAVA}</Card.Text>
              </Card>
              <Card style={styles.skillsCard}>
                <Card.Img
                  data-testid="androidImage"
                  src={androidImg}
                  style={styles.skillImage}
                />
                <Card.Text style={styles.text}>{skillsText.ANDROID}</Card.Text>
              </Card>
            </CardGroup>
          </div>

          <div>
            <CardGroup style={styles.cardRow}>
              <Card style={styles.skillsCard}>
                <Card.Img
                  data-testid="pythonImage"
                  src={pythonImg}
                  style={styles.skillImage}
                />
                <Card.Text style={styles.text}>{skillsText.PYTHON}</Card.Text>
              </Card>
              <Card style={styles.skillsCard}>
                <Card.Img
                  data-testid="sqlImage"
                  src={sqlImg}
                  style={styles.skillImage}
                />
                <Card.Text style={styles.text}>{skillsText.SQL}</Card.Text>
              </Card>
              <Card style={styles.skillsCard}>
                <Card.Img
                  data-testid="cImage"
                  src={cImg}
                  style={styles.skillImage}
                />
                <Card.Text style={styles.text}>{skillsText.C}</Card.Text>
              </Card>
              <Card style={styles.skillsCard}>
                <Card.Img
                  data-testid="cppImage"
                  src={cppImg}
                  style={styles.skillImage}
                />
                <Card.Text style={styles.text}>{skillsText.CPP}</Card.Text>
              </Card>
            </CardGroup>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={768}>
        <div style={styles.skillSection}>
          <h1>{skillsText.HEADER}</h1>
          <div style={styles.cardRow}>
            <Card style={styles.skillsCard}>
              <Card.Img
                data-testid="jsImageMobile"
                src={javascriptImg}
                style={styles.smallSkillImage}
              />
              <Card.Text style={styles.text}>{skillsText.JS}</Card.Text>
            </Card>
            <Card style={styles.skillsCard}>
              <Card.Img
                data-testid="reactImageMobile"
                src={reactImg}
                style={styles.smallSkillImage}
              />
              <Card.Text style={styles.text}>{skillsText.REACT}</Card.Text>
            </Card>
            <Card style={styles.skillsCard}>
              <Card.Img data-testid="javaImageMobile" src={javaImg}/>
              <Card.Text style={styles.text}>{skillsText.JAVA}</Card.Text>
            </Card>
            <Card style={styles.skillsCard}>
              <Card.Img data-testid="androidImageMobile" src={androidImg}/>
              <Card.Text style={styles.text}>{skillsText.ANDROID}</Card.Text>
            </Card>
            <Card style={styles.skillsCard}>
              <Card.Img
                data-testid="pythonImageMobile"
                src={pythonImg}
                style={styles.smallSkillImage}/>
              <Card.Text style={styles.text}>{skillsText.PYTHON}</Card.Text>
            </Card>
            <Card style={styles.skillsCard}>
              <Card.Img
                data-testid="sqlImageMobile"
                src={sqlImg}
                style={styles.smallSkillImage}
              />
              <Card.Text style={styles.text}>{skillsText.SQL}</Card.Text>
            </Card>
            <Card style={styles.skillsCard}>
              <Card.Img
                data-testid="cImageMobile"
                src={cImg}
                style={styles.smallSkillImage}
              />
              <Card.Text style={styles.text}>{skillsText.C}</Card.Text>
            </Card>
            <Card style={styles.skillsCard}>
              <Card.Img
                data-testid="cppImageMobile"
                src={cppImg}
                style={styles.smallSkillImage}
              />
              <Card.Text style={styles.text}>{skillsText.CPP}</Card.Text>
            </Card>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}
