import React, { useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { Trophy } from 'lucide-react-native';

const WelcomeLoading = ({ navigation }: any) => {
  const pulseAnim = new Animated.Value(1);

  useEffect(() => {
    // Pulse animation for the trophy
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.1, duration: 800, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      ])
    ).start();

    // Redirect to Dashboard after 2.5 seconds
    setTimeout(() => {
      navigation.replace('Dashboard');
    }, 2500);
  }, []);

  return (
    <View className="flex-1 bg-[#020617] items-center justify-center">
      <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
        <Trophy size={70} color="#8b5cf6" />
      </Animated.View>
      <Text className="text-white text-xl font-bold mt-6 tracking-[6px]">NXG ARENA</Text>
      <Text className="text-slate-500 text-[10px] font-bold mt-10 tracking-[3px]">SYNCING SYSTEM...</Text>
    </View>
  );
};

export default WelcomeLoading;
