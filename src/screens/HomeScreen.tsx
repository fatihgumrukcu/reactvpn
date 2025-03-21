import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, ImageBackground, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get("window");

const HomeScreen: React.FC = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handleConnect = () => {
    setIsConnecting(true);

    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      setIsConnecting(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/word-map.png')}
        style={styles.background}
        resizeMode="contain"
      >
        <View style={styles.overlay}>
          {/* Başlıklar en üstte ortalı */}
          <View style={styles.header}>
            <Text style={styles.title}>Güven VPN</Text>
            <Text style={styles.subtitle}>Güvenle Bağlan</Text>
          </View>

          {/* Bağlan butonu */}
          <View style={styles.buttonContainer}>
            <LinearGradient colors={["#3B82F6", "#9333EA"]} style={styles.gradientCircle}>
              <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <TouchableOpacity style={styles.button} onPress={handleConnect} disabled={isConnecting}>
                  <Text style={styles.buttonText}>{isConnecting ? "Bağlanıyor..." : "Bağlan"}</Text>
                  
                </TouchableOpacity>
              </Animated.View>
            </LinearGradient>
          </View>
        </View>
        <Text style={styles.autoConnectText}>Otomatik Bağlan</Text>
      </ImageBackground>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D4D4D4",
        justifyContent: "space-evenly", // Tüm öğeleri ekranın içinde eşit dağıt
        alignItems: "center",
        paddingVertical: height * 0.05, // Ekran içindeki boşlukları optimize et
      },
  background: {
    width: width * 0.9,
    height: height * 0.5,
    position: "absolute",
    top: height * 0.12,
    left: width * 0.05,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 1,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 300, // Butonu daha aşağı al
  },
  gradientCircle: {
    width: 220, // Butonu yatay genişlet
    height: 60, // Daha ince yükseklik
    borderRadius: 30, // Daha az yuvarlak yap
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'transparent',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 10,
    width: 220, // Butonu biraz daha genişlettik
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center",
    minWidth: 150, // Buton yazısının sığması için minimum genişlik
    flexWrap: "nowrap", // Taşmayı engelle
  },
  autoConnectText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
    textAlign: "center",
    marginTop: 10, // Butondan biraz boşluk bırak
  },
  shadowEffect: {
    borderRadius: 50,
    position: "absolute",
    bottom: -20,
    alignSelf: "center",
  },
});

export default HomeScreen;