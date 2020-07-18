import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, Card, CardItem, Body, Text, Left} from 'native-base';

import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
import { View } from '../components/Themed';


// type Props = { age: number } & typeof defaultProps;
type Props = {} & typeof defaultProps;

const defaultProps = {
  props1: "hello",
  jobs: [
    {
      id: 0,
      title: "Job Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      salary_type: "Өдрийн",
      salary: 10000,
      currency: "₮",
      date: "6/30 19:50",
      company_name: "VX Space ХХК",      
    },
    {
      id: 1,
      title: "Job Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et pellentesque dui. In porta vulputate velit, vitae egestas nisi auctor ut.",
      salary_type: "Өдрийн",
      salary: 10000,
      currency: "₮",
      date: "6/30 19:50",
      company_name: "VX Space ХХК",      
    },
    {
      id: 2,
      title: "Job Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et pellentesque dui. ",
      salary_type: "Өдрийн",
      salary: 10000,
      currency: "₮",
      date: "6/30 19:50",
      company_name: "VX Space ХХК",      
    },
    {
      id: 3,
      title: "Job Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et pellentesque dui. In porta vulputate velit, vitae egestas nisi auctor ut.",
      salary_type: "Өдрийн",
      salary: 10000,
      currency: "₮",
      date: "6/30 19:50",
      company_name: "VX Space ХХК",
    },
  ],
};

const TabFourScreen = (props: Props) => {

  const jobs_list = props.jobs.map((job) => {
    return (
      <Card key={job.id}>
        <CardItem header>
          <Text>{job.title}</Text>
        </CardItem>
        <CardItem>
          <Body>
            {/*  */}
            <Text>
              {job.description}
            </Text>
          </Body>
        </CardItem>
        <CardItem footer button onPress={()=>console.log("done")}>
          <Text>{`${job.salary_type} ${job.salary}${job.currency} ${job.date} ${job.company_name}`}</Text>
        </CardItem>
      </Card>
    )
  })

  return (
    <ScrollView style={styles.container}>
      {jobs_list}
    </ScrollView>
  // </Container>
  );
}

TabFourScreen.defaultProps = defaultProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default TabFourScreen;