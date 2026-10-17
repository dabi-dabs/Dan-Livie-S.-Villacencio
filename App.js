import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

const QUOTES = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  }
];

export default function App() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * QUOTES.length);
    
    while (randomIndex === currentQuoteIndex && QUOTES.length > 1) {
      randomIndex = Math.floor(Math.random() * QUOTES.length);
    }

    setCurrentQuoteIndex(randomIndex);
  };

  const activeQuote = QUOTES[currentQuoteIndex];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Daily Motivation</Text>

      <View style={styles.card}>
        <Text style={styles.quoteText}>“{activeQuote.text}”</Text>
        <Text style={styles.authorText}>— {activeQuote.author}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={getRandomQuote}>
        <Text style={styles.buttonText}>New Quote</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 25,
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 30,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#374151',
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 15,
  },
  authorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4f46e5',
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#4f46e5',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 2,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});