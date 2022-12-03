import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

import DefaultButton from "../../Components/Common/DefaultButton";
import Explanationcard from "../../Components/Explanation/ExplanationCard";

export default function AppExplanation() {

    function handleSetShowHome(){
      console.log("Botão clicado!")
    }

    return (
      <View style={styles.container}>
          <ScrollView>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.title}>
                Antes, deixa {"\n"} eu te explicar
              </Text>
              <Explanationcard/>
              <Text style={styles.descriptionCta}>
                  Pronto(a) para subir de nível na vida?
              </Text>
              <Text style={styles.description}>
                  Na próxima tela você vai poder escolher {"\n"} seus 4 hábitos de forma
                  individual.
              </Text>
              <DefaultButton
                buttonText={"Continuar"}
                handlePress={handleSetShowHome}
                width={250}
                height={50}
              />
            </View>
          </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21,21,21,0.98)",
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#FFF",
    textAlign: 'center',
    marginVertical: 40,
    marginTop: 60,
  },
  descriptionCta: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  description: {
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 30,
  }
})