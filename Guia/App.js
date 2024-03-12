import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';

const App = () => {
  const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
  const [modalVisibleplatillo, setModalVisibleplatillo] = useState(false);
  const [modalVisibleRuta, setModalVisibleRuta] = useState(false);

  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleplaya}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la playa</Text>
              <Text>
                El Salvador cuenta con hermosas playas a nivel Centroamérica.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleplaya(!modalVisibleplaya);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleplatillo}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Pupusas</Text>
              <Text>
                Las pupusas son tortillas hechas de masa de maíz o de arroz
                rellenas con queso, chicharrón (extracción de la carne de
                cerdo), frijoles y a las que llamamos “revueltas” (chicharrón
                con frijoles y queso), camarón y pescado, entre otras opciones.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleplatillo(!modalVisibleplatillo);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleRuta}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Concepción de Ataco</Text>
              <Text>
                Es un pueblo de origen precolombino. sus fascinantes paisajes,
                su valor cultural y sus calles empedradas fueron suficientes
                para nombrarla parte de la Ruta de las Flores.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleRuta(!modalVisibleRuta);
                }}></Button>
            </View>
          </View>
        </Modal>

        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.banner} source={require('./src/img/bg.jpg')} />
          </View>

          <View style={styles.contenedor}>
            <Text style={styles.titulo}>Que hacer en El Salvador</Text>
            <ScrollView horizontal>
              <View>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisibleplaya(!modalVisibleplaya);
                  }}>
                  <Image
                    style={styles.ciudad}
                    source={require('./src/img/actividad1.jpg')}
                  />
                </TouchableHighlight>
              </View>

              <View>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/actividad2.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/actividad3.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/actividad4.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/actividad5.jpg')}
                />
              </View>
            </ScrollView>

            <Text style={styles.titulo}>Platillos Salvadoreños</Text>
            <View>
              <View>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisibleplatillo(!modalVisibleplatillo);
                  }}>
                  <Image
                    style={styles.mejores}
                    source={require('./src/img/mejores1.jpg')}
                  />
                </TouchableHighlight>
              </View>

              <View>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/mejores2.jpg')}
                />
              </View>

              <View>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/mejores3.jpg')}
                />
              </View>
            </View>

            <Text style={styles.titulo}>Rutas Turisticas</Text>
            <View style={styles.listado}>
              <View style={styles.listaItem}>
               <TouchableHighlight
                  onPress={() => {
                    setModalVisibleRuta(!modalVisibleRuta);
                  }}>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/ruta1.jpg')}
                />
                </TouchableHighlight>
              </View>

              <View style={styles.listaItem}>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/ruta2.jpg')}
                />
              </View>

              <View style={styles.listaItem}>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/ruta3.jpg')}
                />
              </View>

              <View style={styles.listaItem}>
                <Image
                  style={styles.mejores}
                  source={require('./src/img/ruta4.jpg')}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },

  listaItem: {
    flexBasis: '49%',
  },

  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  },
});

export default App;
