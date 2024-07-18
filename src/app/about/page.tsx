"use client";
import { useSettingContext } from "@/@core/hooks/useSettingContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function AboutPage() {
  const { setTheme } = useSettingContext();
  return (
    <div>
      <Typography variant="h1" component="h1">
        Hello, Material-UI in Next.js!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setTheme("light")}
      >
        Primary Button
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setTheme("dark")}
      >
        Secondary Button
      </Button>
    </div>
  );
}
