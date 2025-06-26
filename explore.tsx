import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>Explore the history, challenges, and contact information of Sebastian Luca Abrajan Manzanarez</ThemedText>
      <Collapsible title="About Sebastian">
        <ThemedText>
          Sebastian Abrajan is a rising senior at Animo Ralph Bunche Charter High School who plans to apply and attend either UC Irvine or UC Berkeley. He enjoys drawing, reading manga, and attempting to improve his skills daily. He often takes time out of his day to ensure his projects are done in a timely manner and are done with his maximum effort.
        </ThemedText>

      </Collapsible>
      <Collapsible title="Challenges">
        <ThemedText>
          One of the biggest challenges I have faced in the program is the lack of experience in coding in HTML, CSS, and JS. This was made apparent when I began working on the Light Bulb Challenge and how lost I was in the beginning. I eventually began solving this problem by looking at videos and seeing others' code as an example to build off on. After using these resources, I was finally able to finish the assignment. - Sebastian L. Abrajan
        </ThemedText>
      </Collapsible>
      <Collapsible title="Contact Information">
        <ThemedText>
          Email: sebmanzanares@gmail.com
          Instagram: probablynot_lob
        </ThemedText>

      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
