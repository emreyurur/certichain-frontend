import React from 'react';
import { List, Text } from "@mantine/core";
import HistoryItem from './HistoryItem';

export default function HistoryList() {
  return (
    <List listStyleType="none" pt="md">
      <Text p="sm" fw={800} fz="sm" c="dimmed">
        Dün
      </Text>
      <HistoryItem data-active>Bağlantı sorunu</HistoryItem>
      <HistoryItem>ISO 9001</HistoryItem>
      <HistoryItem>Bilgi Güvenliği</HistoryItem>
      <Text p="sm" fw={800} fz="sm" c="dimmed">
        Daha Önce
      </Text>
      <HistoryItem>Bilgi Givenliği</HistoryItem>
      <HistoryItem>ISO 9001</HistoryItem>
    </List>
  );
}