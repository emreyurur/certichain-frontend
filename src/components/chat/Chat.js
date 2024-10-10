import React, { useState, useEffect, useRef } from "react";
import { Container, Group, rem, ScrollArea, Flex, Box, useMantineColorScheme } from "@mantine/core";
import Logo from "../Logo";
import Prompt from "./Prompt";
import ChatbotMessage from "./ChatbotMessage";
import UserMessage from "./UserMessage";
import { IconMenu2, IconMessage } from '@tabler/icons-react';

export default function Chat({ opened, onClick }) {
  const [messages, setMessages] = useState([]);
  const ws = useRef(null);
  const messagesEndRef = useRef(null);
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    ws.current = new WebSocket("ws://127.0.0.1:8000/ws");
    ws.current.onmessage = (event) => {
      addMessage(event.data, false);
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const addMessage = (text, isUser) => {
    setMessages((prevMessages) => [...prevMessages, { text, isUser }]);
  };

  const handleSendMessage = (message) => {
    if (ws.current) {
      ws.current.send(message);
      addMessage(message, true);
    }
  };

  const backgroundColor = colorScheme === 'dark' ? 'var(--mantine-color-dark-6)' : 'var(--mantine-color-gray-0)';

  return (
    <Container
      p="0"
      fluid
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: backgroundColor,
      }}
    >
      <Box py="sm" px="md" style={{ backgroundColor: backgroundColor }}>
        <Group spacing="xs" align="center">
          <IconMenu2 size={28} strokeWidth={1.5} onClick={onClick} style={{ cursor: 'pointer' }} />
          <IconMessage size={28} strokeWidth={1.5} />
          <Logo width={rem(360)} height={rem(50)} backgroundColor={backgroundColor} /> {/* Logo boyutunu daha da büyüttük */}
        </Group>
      </Box>
      <ScrollArea style={{ flex: 1, marginTop: rem(20) }}>
        <Flex mx={rem(50)} direction="column" gap="md">
          {messages.map((message, index) =>
            message.isUser ? (
              <UserMessage key={index} text={message.text} />
            ) : (
              <ChatbotMessage key={index} text={message.text} />
            )
          )}
          <div ref={messagesEndRef} />
        </Flex>
      </ScrollArea>
      <Box mt="auto" pb={rem(20)} px={rem(50)}>
        <Prompt onSendMessage={handleSendMessage} />
      </Box>
    </Container>
  );
}