// Bathroom Details Screen
// Shows detailed information about a specific bathroom

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function BathroomDetailsScreen({ route }) {
  const { bathroom } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{bathroom.name}</Text>
        <Text style={styles.type}>{bathroom.type}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📍 Location</Text>
        <Text style={styles.text}>{bathroom.address}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⏰ Hours</Text>
        <Text style={styles.text}>{bathroom.hours || 'Not specified'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>⭐ Rating</Text>
        <Text style={styles.text}>{bathroom.rating || 'No ratings yet'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>♿ Accessibility</Text>
        <Text style={styles.text}>
          {bathroom.accessible ? 'Wheelchair accessible' : 'Not wheelchair accessible'}
        </Text>
      </View>

      <TouchableOpacity style={styles.reviewButton}>
        <Text style={styles.reviewButtonText}>Leave a Review</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
    paddingTop: 40,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  type: {
    fontSize: 16,
    color: '#e0e0e0',
  },
  section: {
    backgroundColor: '#fff',
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  reviewButton: {
    backgroundColor: '#34C759',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  reviewButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
