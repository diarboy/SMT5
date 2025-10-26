import { projects } from '@/app/data/projectData';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';

export default function ProjectsScreen() {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const isDesktop = width >= 768; // Breakpoint for desktop

    const handleProjectPress = (projectId: number) => {
        router.push({
            pathname: "/project/[id]",
            params: { id: projectId }
        });
    };
    
    return (
        <ScrollView style={styles.container}>
            <ThemedText type="title" style={styles.pageTitle}>My Projects</ThemedText>
            
            <ThemedView style={styles.introContainer}>
                <ThemedText style={styles.introText}>
                    Welcome to my project portfolio! Here you'll find a collection of my most significant work 
                    in mobile and web development. Each project represents unique challenges and innovative solutions, 
                    showcasing my expertise in modern development technologies and best practices.
                </ThemedText>
            </ThemedView>
            
            <ThemedView style={[styles.projectsGrid, { flexDirection: isDesktop ? 'row' : 'column' }]}>
                {projects.map((project) => (
                    <Pressable 
                        key={project.id} 
                        onPress={() => handleProjectPress(project.id)}
                        style={[
                            styles.projectWrapper,
                            { width: isDesktop ? '48.5%' : '100%' }
                        ]}
                    >
                        <ThemedView style={styles.projectCard}>
                            <Image
                                source={{ uri: project.image }}
                                style={styles.projectImage}
                                contentFit="cover"
                            />
                            <ThemedView style={styles.projectInfo}>
                                <ThemedText type="subtitle">{project.title}</ThemedText>
                                <ThemedText numberOfLines={2}>{project.description}</ThemedText>
                                <ThemedView style={styles.techStack}>
                                    {project.technologies.map((tech, index) => (
                                        <ThemedView key={index} style={styles.techBadge}>
                                            <ThemedText style={styles.techText}>{tech}</ThemedText>
                                        </ThemedView>
                                    ))}
                                </ThemedView>
                                <ThemedText style={styles.year}>{project.year}</ThemedText>
                            </ThemedView>
                        </ThemedView>
                    </Pressable>
                ))}
            </ThemedView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    pageTitle: {
        marginBottom: 20,
        textAlign: 'center',
    },
    projectsGrid: {
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 16,
    },
    projectWrapper: {
        marginBottom: 20,
    },
    projectCard: {
        flex: 1,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: 'rgba(161, 206, 220, 0.1)',
    },
    projectImage: {
        width: '100%',
        height: 200,
    },
    projectInfo: {
        padding: 16,
        gap: 8,
    },
    techStack: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 8,
    },
    techBadge: {
        backgroundColor: '#A1CEDC',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
    },
    techText: {
        fontSize: 12,
    },
    year: {
        marginTop: 8,
        opacity: 0.7,
    },
    introContainer: {
        marginBottom: 24,
        padding: 16,
        backgroundColor: 'rgba(161, 206, 220, 0.1)',
        borderRadius: 12,
    },
    introText: {
        lineHeight: 24,
        textAlign: 'justify',
    },
});