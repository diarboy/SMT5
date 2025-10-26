import { ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { projects } from '@/app/data/projectData';

export default function ProjectDetailScreen() {
  const { id } = useLocalSearchParams();
  const projectId = Number(id);

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Project not found!</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Mengatur judul header secara dinamis */}
      <Stack.Screen options={{ title: project.title }} />
      
      <Image
        source={{ uri: project.image }}
        style={styles.projectImage}
        contentFit="cover"
      />
      
      <ThemedView style={styles.contentContainer}>
        <ThemedText type="title">{project.title}</ThemedText>
        <ThemedText style={styles.yearText}>Tahun: {project.year}</ThemedText>
        
        <ThemedText style={styles.descriptionText}>
          {project.description}
        </ThemedText>

        <ThemedText type="subtitle" style={styles.techTitle}>Technologies Used</ThemedText>
        <ThemedView style={styles.techStack}>
          {project.technologies.map((tech, index) => (
            <ThemedView key={index} style={styles.techBadge}>
              <ThemedText style={styles.techText}>{tech}</ThemedText>
            </ThemedView>
          ))}
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  projectImage: {
    width: '100%',
    height: 250,
  },
  contentContainer: {
    padding: 16,
    gap: 12,
  },
  yearText: {
    opacity: 0.8,
    fontStyle: 'italic',
  },
  descriptionText: {
    lineHeight: 24,
    textAlign: 'justify',
  },
  techTitle: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 16,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techBadge: {
    backgroundColor: '#A1CEDC',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  techText: {
    fontSize: 14,
  },
});