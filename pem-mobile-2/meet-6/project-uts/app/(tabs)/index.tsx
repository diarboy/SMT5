import { Image } from 'expo-image';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} bounces={false}>
      <ThemedView style={styles.mainSection}>
        <Image
          source={require('@/assets/images/profile.jpg')}
          style={styles.profileImage}
          contentFit="cover"
        />
        <ThemedView style={styles.profileInfo}>
          <ThemedText type="title">Karra</ThemedText>
          <ThemedText type="subtitle">Software Developer</ThemedText>
          <ThemedText style={styles.location}>📍 Jakarta, Indonesia</ThemedText>
          <ThemedText style={styles.about}>
          A passionate software developer with 5+ years of experience specializing in React Native and mobile development.
          I love creating beautiful and functional applications that solve real-world problems. My focus is on delivering
          high-quality, performant applications with great user experiences.
          </ThemedText>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.scrollableContent}>
        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">Skills</ThemedText>
          <ThemedView style={styles.skillsContainer}>
            {['React Native', 'JavaScript', 'TypeScript', 'Node.js', 'Git', 'Redux', 'React Query', 'AWS', 'Firebase', 'GraphQL'].map((skill) => (
              <ThemedView key={skill} style={styles.skillBadge}>
                <ThemedText>{skill}</ThemedText>
              </ThemedView>
            ))}
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">Work Experience</ThemedText>
          {[
            {
              title: 'Senior Mobile Developer',
              company: 'Tech Solutions Inc.',
              period: '2021 - Present',
              description: 'Lead developer for multiple React Native projects, managing a team of 5 developers. Improved app performance by 40% through optimization.',
              achievements: [
                'Implemented CI/CD pipeline reducing deployment time by 60%',
                'Mentored junior developers and conducted code reviews',
                'Successfully delivered 3 major client projects ahead of schedule'
              ]
            },
            {
              title: 'Mobile Developer',
              company: 'Digital Innovations Lab',
              period: '2019 - 2021',
              description: 'Developed and maintained cross-platform mobile applications using React Native and Flutter.',
              achievements: [
                'Built and launched 5 successful mobile applications',
                'Reduced app crash rate by 75% through robust error handling',
                'Integrated multiple third-party APIs and payment gateways'
              ]
            },
            {
              title: 'Frontend Developer',
              company: 'StartUp Hub',
              period: '2018 - 2019',
              description: 'Worked on web and mobile applications using React and React Native.',
              achievements: [
                'Developed responsive UI components used across multiple projects',
                'Implemented real-time features using WebSocket',
                'Optimized application load time by 50%'
              ]
            },
            {
              title: 'Mobile Development Intern',
              company: 'Mobile Tech Co',
              period: '2017 - 2018',
              description: 'Assisted in developing mobile applications and fixing bugs.',
              achievements: [
                'Contributed to the development of 2 major features',
                'Fixed over 50 bugs in existing applications',
                'Created documentation for codebase'
              ]
            },
            {
              title: 'Junior Developer',
              company: 'Code Academy',
              period: '2016 - 2017',
              description: 'Part-time developer while completing studies.',
              achievements: [
                'Developed educational mobile games',
                'Assisted in curriculum development',
                'Mentored student projects'
              ]
            }
          ].map((exp) => (
            <ThemedView key={exp.title} style={styles.experienceContainer}>
              <ThemedText type="defaultSemiBold">{exp.title}</ThemedText>
              <ThemedText style={styles.companyText}>{exp.company} • {exp.period}</ThemedText>
              <ThemedText>{exp.description}</ThemedText>
              <ThemedView style={styles.achievementsList}>
                {exp.achievements.map((achievement, index) => (
                  <ThemedText key={index} style={styles.achievementItem}>
                    • {achievement}
                  </ThemedText>
                ))}
              </ThemedView>
            </ThemedView>
          ))}
        </ThemedView>

        <ThemedView style={styles.sectionContainer}>
          <ThemedText type="subtitle">Education</ThemedText>
          {[
            {
              degree: 'Master of Computer Science',
              school: 'Stanford University',
              period: '2022 - 2024',
              focus: 'Specialization in Mobile Computing and AI'
            },
            {
              degree: 'Bachelor of Computer Science',
              school: 'University of Indonesia',
              period: '2018 - 2022',
              focus: 'Major in Software Engineering'
            },
            {
              degree: 'Mobile Development Certification',
              school: 'Google Developer Academy',
              period: '2021',
              focus: 'Android Development'
            },
            {
              degree: 'iOS Development Program',
              school: 'Apple Developer Academy',
              period: '2020',
              focus: 'iOS and Swift Development'
            }
          ].map((edu) => (
            <ThemedView key={edu.degree} style={styles.educationContainer}>
              <ThemedText type="defaultSemiBold">{edu.degree}</ThemedText>
              <ThemedText>{edu.school}</ThemedText>
              <ThemedText>{edu.period}</ThemedText>
              <ThemedText style={styles.focusText}>{edu.focus}</ThemedText>
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
  mainSection: {
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileInfo: {
    alignItems: 'center', 
    gap: 8,
    padding: 20,
    borderRadius: 16,
    backgroundColor: 'transparent',
  },
  location: {
    marginTop: 4,
    opacity: 0.8,
  },
  about: {
    textAlign: 'center',
    marginTop: 16,
    opacity: 0.9,
    lineHeight: 22,
  },
  scrollableContent: {
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  sectionContainer: {
    gap: 12,
    marginBottom: 24,
    padding: 16,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillBadge: {
    backgroundColor: '#A1CEDC',
    padding: 8,
    borderRadius: 16,
  },
  projectContainer: {
    gap: 8,
    padding: 16,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderRadius: 8,
    marginBottom: 12,
  },
  techStack: {
    fontSize: 12,
    opacity: 0.7,
    marginTop: 4,
  },
  experienceContainer: {
    gap: 8,
    padding: 16,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderRadius: 8,
    marginBottom: 16,
  },
  companyText: {
    fontSize: 14,
    opacity: 0.8,
    fontWeight: '500',
  },
  achievementsList: {
    marginTop: 8,
    paddingLeft: 8,
  },
  achievementItem: {
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 4,
  },
  educationContainer: {
    gap: 4,
    padding: 16,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderRadius: 8,
  },
  focusText: {
    fontSize: 14,
    opacity: 0.7,
    fontStyle: 'italic',
    marginTop: 4,
  },
});
