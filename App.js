import React from 'react';
import { View, ScrollView, Text  } from 'react-native';
import AddEntry from './components/AddEntry';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <ScrollView>
                  <AddEntry/>
                </ScrollView>
            </Provider>
        )
    }
}
