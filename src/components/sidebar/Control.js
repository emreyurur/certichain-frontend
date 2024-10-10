import React from 'react';
import { ActionIcon, Burger, Group } from "@mantine/core";
import { IconMessage } from "@tabler/icons-react";

export default function Control({
  opened,
  onClick,
  justify,
  lightHidden,
}) {
  return (
    <Group lightHidden={lightHidden} justify={justify}>
      <Burger opened={opened} onClick={onClick} size="sm" />
      <ActionIcon c="black" size="sm" variant="transparent">
        <IconMessage />
      </ActionIcon>
    </Group>
  );
}