import React from 'react'
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder="Titre du film" />
        <Button style={styles.buttonstyle} title="Rechercher" onPress={() => {}} />
        <FlatList
          data={films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container : {
    flex: 1,
    marginTop:50,
    marginLeft: 5,
    marginRight: 5
  },
  textinput: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    paddingLeft: 5,
    marginBottom: 10
  },
  buttonstyle: {
    height: 50,
  }
})

export default Search
