import React from 'react';
import { Button, Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isReady: false,
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });

    this.setState({ isReady: true })
  }
 
  render() {
    const { isReady } = this.state
    if (!isReady) {
      return <Expo.AppLoading />
    }
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   A native base card
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Button light><Text> Light </Text></Button>
          <Button primary><Text> Primary </Text></Button>
          <Button success><Text> Success </Text></Button>
          <Button info><Text> Info </Text></Button>
          <Button warning><Text> Warning </Text></Button>
          <Button danger><Text> Danger </Text></Button>
          <Button dark><Text> Dark </Text></Button>
        </Content>
      </Container>
    );
  }
}
