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
  ImageBackground,
} from 'react-native';

const App = () => {
  const [modalVisiblemercurio, setModalVisiblemercurio] = useState(false);
  const [modalVisiblevenus, setModalVisiblevenus] = useState(false);
  const [modalVisibletierra, setModalVisibletierra] = useState(false);
  const [modalVisiblemarte, setModalVisiblemarte] = useState(false);
  const [modalVisiblejupiter, setModalVisiblejupiter] = useState(false);
  const [modalVisiblesaturno, setModalVisiblesaturno] = useState(false);
  const [modalVisibleurano, setModalVisibleurano] = useState(false);
  const [modalVisibleneptuno, setModalVisibleneptuno] = useState(false);

  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblemercurio}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Mercurio:</Text>
              <Text style={{ color: 'white' }}>
                El planeta más cercano al Sol, con una superficie rocosa y
                escarpada. Tiene una órbita rápida alrededor del Sol y
                temperaturas extremadamente altas durante el día y
                extremadamente bajas durante la noche.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisiblemercurio(!modalVisiblemercurio);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblevenus}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Venus:</Text>
              <Text style={{ color: 'white' }}>
                Conocido como el planeta hermano de la Tierra debido a su tamaño
                y composición similares, Venus tiene una atmósfera densa y
                tóxica que atrapa el calor, lo que lo convierte en el planeta
                más caliente del sistema solar. Su superficie está cubierta de
                volcanes y llanuras.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisiblevenus(!modalVisiblevenus);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibletierra}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Tierra:</Text>
              <Text style={{ color: 'white' }}>
                Nuestro hogar, el único planeta conocido que alberga vida. Tiene
                una atmósfera rica en oxígeno, agua líquida en la superficie y
                una diversidad de ecosistemas.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibletierra(!modalVisibletierra);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblemarte}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Marte:</Text>
              <Text style={{ color: 'white' }}>
                Apodado el "Planeta Rojo" debido a su color característico,
                Marte tiene una atmósfera delgada y una superficie con cráteres,
                montañas y cañones. Es conocido por sus casquetes polares y su
                posible historia de agua líquida en el pasado.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisiblemarte(!modalVisiblemarte);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblejupiter}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Jupiter:</Text>
              <Text style={{ color: 'white' }}>
                El planeta más grande del sistema solar, Júpiter es un gigante
                gaseoso con una atmósfera compuesta principalmente de hidrógeno
                y helio. Tiene una gran mancha roja, una tormenta gigante que ha
                existido durante siglos.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisiblejupiter(!modalVisiblejupiter);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblesaturno}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Saturno:</Text>
              <Text style={{ color: 'white' }}>
                Con sus famosos anillos visibles desde la Tierra, Saturno es
                otro gigante gaseoso compuesto principalmente de hidrógeno y
                helio. Sus anillos están compuestos principalmente de partículas
                de hielo y roca.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisiblesaturno(!modalVisiblesaturno);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleurano}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Urano:</Text>
              <Text style={{ color: 'white' }}>
                Un gigante de hielo con una atmósfera compuesta principalmente
                de hidrógeno, helio y metano. Urano es único porque su eje de
                rotación está inclinado casi perpendicular a su plano orbital.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleurano(!modalVisibleurano);
                }}></Button>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleneptuno}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Neptuno:</Text>
              <Text style={{ color: 'white' }}>
                El planeta más alejado del Sol, Neptuno es otro gigante de hielo
                con una atmósfera similar a la de Urano. Es conocido por sus
                vientos extremadamente veloces y su Gran Mancha Oscura, una
                característica similar a la Gran Mancha Roja de Júpiter.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleneptuno(!modalVisibleneptuno);
                }}></Button>
            </View>
          </View>
        </Modal>

        <View style={styles.container}>
          <ScrollView>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={styles.banner}
                source={require('./src/space2.jpeg')}
              />
            </View>

            <Text style={styles.titulo}>Planetas del Sistema Solar</Text>
            <View style={styles.listado}>
              <View style={styles.listaItem}>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisiblemercurio(!modalVisiblemercurio);
                  }}>
                  <Image
                    style={styles.mejores}
                    source={require('./src/mercurio.jpg')}
                  />
                </TouchableHighlight>
              </View>

              <View style={styles.listaItem}>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisiblevenus(!modalVisiblevenus);
                  }}>
                  <Image
                    style={styles.mejores}
                    source={require('./src/venus.jpg')}
                  />
                </TouchableHighlight>
              </View>

              <View style={styles.listaItem}>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisibletierra(!modalVisibletierra);
                  }}>
                  <Image
                    style={styles.mejores}
                    source={require('./src/tierra.jpg')}
                  />
                </TouchableHighlight>
              </View>

              <View style={styles.listaItem}>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisiblemarte(!modalVisiblemarte);
                  }}>
                  <Image
                    style={styles.mejores}
                    source={require('./src/marte.jpg')}
                  />
                </TouchableHighlight>
              </View>

              <View style={styles.listaItem}>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisiblejupiter(!modalVisiblejupiter);
                  }}>
                  <Image
                    style={styles.mejores}
                    source={require('./src/jupiter.jpg')}
                  />
                </TouchableHighlight>
              </View>

              <View style={styles.listaItem}>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisiblesaturno(!modalVisiblesaturno);
                  }}>
                  <Image
                    style={styles.mejores}
                    source={require('./src/saturno.jpg')}
                  />
                </TouchableHighlight>
              </View>

              <View style={styles.listaItem}>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisibleurano(!modalVisibleurano);
                  }}>
                  <Image
                    style={styles.mejores}
                    source={require('./src/urano.jpg')}
                  />
                </TouchableHighlight>
              </View>

              <View style={styles.listaItem}>
                <TouchableHighlight
                  onPress={() => {
                    setModalVisibleneptuno(!modalVisibleneptuno);
                  }}>
                  <Image
                    style={styles.mejores}
                    source={require('./src/neptuno.jpg')}
                  />
                </TouchableHighlight>
              </View>

            
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
   backgroundColor: 'black'
  },
  banner: {
    height: 180,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
    color: 'white',
    textAlign: 'center',
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
    backgroundColor: 'black',
    margin: 30, 
    padding: 20,
    borderRadius: 10,
    alignItems: 'center', 
    justifyContent: 'center',
     marginTop: '80%',
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
    color: 'white',
  },
});

export default App;
