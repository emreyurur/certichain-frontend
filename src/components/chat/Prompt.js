import React, { useState } from "react";
import {
  ActionIcon,
  Group,
  rem,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { IconAlertCircle, IconArrowBigUpLine } from "@tabler/icons-react";

export default function Prompt({ onSendMessage, ...rest }) {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <TextInput
      radius="lg"
      size="md"
      placeholder="Message to Company's Chatbot..."
      value={message}
      onChange={(event) => setMessage(event.currentTarget.value)}
      onKeyPress={handleKeyPress}
      rightSection={
        <ActionIcon radius="lg" size="md" onClick={handleSendMessage}>
          <IconArrowBigUpLine style={{ width: rem(16), height: rem(16) }} />
        </ActionIcon>
      }
      description={
        <Group wrap="nowrap" justify="center">
          <ThemeIcon size="xs" variant="transparent" c="dimmed">
            <IconAlertCircle />
          </ThemeIcon>
          <Text fz="xs">
            Burada verilen yanıtlar yalnızca bilgi vermek amaçlıdır. Resmi veya
            hukuksal sorumluluk taşımamaktadır
          </Text>
        </Group>
      }
      styles={{
        root: {
          display: "flex",
          flexDirection: "column",
        },
        description: {
          order: 1,
          marginTop: rem(4),
        },
      }}
      {...rest}
    />
  );
}