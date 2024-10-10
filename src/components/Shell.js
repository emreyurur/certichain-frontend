import React from 'react';
import { AppShell, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import HistoryList from "./history/HistoryList";
import Control from "./sidebar/Control";
import Chat from "./chat/Chat";

export default function Shell() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{
        width: rem(300),
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      transitionDuration={200}
      transitionTimingFunction="ease"
    >
      <AppShell.Navbar p="md">
        <Control
          lightHidden={!opened}
          opened={opened}
          onClick={toggle}
          justify="space-between"
        />
        
        <HistoryList />
      </AppShell.Navbar>
      <AppShell.Main>
        <Chat opened={opened} onClick={toggle} />
      </AppShell.Main>
    </AppShell>
  );
}