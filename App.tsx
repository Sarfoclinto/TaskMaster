import AppProvider from "./router/providers";
import RootNav from "./router";

export default function App() {
  return (
    <AppProvider>
      <RootNav />
    </AppProvider>
  );
}
