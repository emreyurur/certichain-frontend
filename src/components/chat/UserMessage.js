import React from 'react';
import { Group, Avatar, Paper, Text, Flex, Container } from "@mantine/core";

export default function UserMessage({ text }) {
  return (
    <Group justify="right">
      <Flex direction="row-reverse">
        <Paper p="xs" c="white" radius="lg" bg="blue">
          <Group>
            <Avatar variant="transparent" color="white" />
            <Container
              ta="right"
              style={{ overflowWrap: "break-word" }}
              lh={1.5}
              maw="80%"
            >
              <Text>{text}</Text>
            </Container>
          </Group>
        </Paper>
      </Flex>
    </Group>
  );
}