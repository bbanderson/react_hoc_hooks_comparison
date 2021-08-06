import "./styles.css";
import withHasMounted from "./hocs/withHasMounted";
import useHasMounted from "./hooks/useHasMounted";

export default withHasMounted(function App({ hasMounted }) {
  const hasMountedHooks = useHasMounted();
  console.log(hasMounted, hasMountedHooks);
  return <div className="App"></div>;
});
