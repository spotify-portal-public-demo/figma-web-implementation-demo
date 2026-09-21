'use client';

import { Button, Card, CardBody, CardHeader, Flex, Text } from '@backstage/ui';
import { useState } from 'react';
import styles from './DesignImplementationCanvas.module.css';

/**
 * Primary implementation surface for a Figma-to-code session.
 * Replace this baseline with the selected design while preserving the
 * repository standards in AGENTS.md.
 */
export function DesignImplementationCanvas() {
  const [interactions, setInteractions] = useState(0);

  return (
    <main className={styles.main}>
      <section aria-labelledby="canvas-title" className={styles.canvas}>
        <Flex direction="column" gap="4">
          <Flex direction="column" gap="2">
            <Text as="p" variant="body-small" weight="bold" color="secondary">
              PORTAL · FIGMA · XIRP
            </Text>
            <Text as="h1" id="canvas-title" variant="title-large">
              Design implementation canvas
            </Text>
            <Text as="p" variant="body-large" color="secondary">
              This accessible baseline is ready to be replaced by the selected
              Figma design using Backstage UI components and tokens.
            </Text>
          </Flex>

          <Card>
            <CardHeader>
              <Text as="h2" variant="title-small">
                Local verification
              </Text>
            </CardHeader>
            <CardBody>
              <Flex direction="column" align="start" gap="3">
                <Text as="p">
                  Run the site locally, verify the implemented design, and keep
                  its interaction behavior covered by tests.
                </Text>
                <Button
                  variant="primary"
                  onPress={() => setInteractions(value => value + 1)}
                >
                  Verify interaction
                </Button>
                <Text as="p" role="status" aria-live="polite">
                  Verified interactions: {interactions}
                </Text>
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      </section>
    </main>
  );
}
