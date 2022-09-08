import React from "react";
import { Button, Tooltip, useColorMode } from "@chakra-ui/react/";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function DarkModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Tooltip label="Toggle Dark Mode" openDelay={200}>
        <Button onClick={toggleColorMode} data-testid="darkmode-toggle">
          {colorMode === "light" ? <MoonIcon data-testid="moon-icon" /> : <SunIcon data-testid="sun-icon" />}
        </Button>
      </Tooltip>
    </>
  );
}

export default DarkModeToggle;
