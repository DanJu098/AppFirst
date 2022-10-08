import * as react from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';

export default function App(){
  return(
    <View style={estilo.container}>
      
      <Text style={estilo.titulo}>Series Legais</Text>
      <Text style={estilo.subTitulo}>Estas são as melhores das melhores</Text>
      <ScrollView>


      <Text style={estilo.serie}>Simpson</Text>
      <View style={estilo.imagem}>
         <Image style={estilo.img} source={require("./assets/simpson.jpeg")}/>
      </View>



      <Text style={estilo.serie}>Perseus and Medusa</Text>
      <View style={estilo.imagem}>
      <Image style={estilo.img} source={require("./assets/Perseus.jpg")}/>
      </View>


      <Text style={estilo.serie}>God od War</Text>
      <View style={estilo.imagem}>
      <Image style={estilo.img} source={require("./assets/god.jpg")}/>
      </View>


      <Text style={estilo.serie}>Cbum</Text>
      <View style={estilo.imagem}>
      <Image style={estilo.img} source={require("./assets/cbum.jpg")}/>
      </View>

      </ScrollView>
    </View>  );
}

const estilo = StyleSheet.create({
  container:{
  flex: 1,
  backgroundColor: '#45adef',
  justifyContent: 'center',
  },

  titulo:{
    fontSize:40,
    color:"#fff",
    fontWeight:"900",
    marginBottom:10,
    marginTop:30,
    textAlign:"center",
  },

  subTitulo:{
    fontSize:25,
    paddingBottom:10,
    color:"#ffa",
    marginHorizontal:2,
    textAlign:"center",
  },

  img:{
    width:300,
    height:400,
  },

  serie:{
    fontSize:19,
    marginTop:20,
    marginBottom:10,
    textAlign:"left",
    color:"#fff",
  },
  imagem:{
    alignItems:"center",
  }
})