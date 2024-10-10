import React from 'react';
import {
  ActionIcon,
  Avatar,
  Container,
  Flex,
  Group,
  HoverCard,
  Paper,
  rem,
  Text,
} from "@mantine/core";
import { IconThumbDownFilled, IconThumbUpFilled } from "@tabler/icons-react";

export default function ChatbotMessage({ text }) {
  return (
    <Group justify="left">
      <Flex direction="row-reverse">
        <HoverCard
          styles={{
            dropdown: {
              background: "transparent",
              border: "none",
              padding: rem(4),
            },
          }}
          position="bottom-start"
        >
          <HoverCard.Target>
            <Paper p="xs" c="white" radius="lg" bg="teal">
              <Group>
                <Avatar variant="outline" color="white">
                  BOT
                </Avatar>
                <Container
                  style={{
                    overflowWrap: "break-word",
                    paddingLeft: 0,
                    marginLeft: 0,
                  }}
                  lh={1.5}
                  maw="80%"
                >
                  <Text>{text}</Text>
                </Container>
              </Group>
            </Paper>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Group justify="left">
              <ActionIcon size="sm" variant="transparent">
                <IconThumbUpFilled color="#F8CA3E" />
              </ActionIcon>
              <ActionIcon size="sm" variant="transparent">
                <IconThumbDownFilled color="#F8CA3E" />
              </ActionIcon>
            </Group>
          </HoverCard.Dropdown>
        </HoverCard>
      </Flex>
    </Group>
  );
}