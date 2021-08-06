import { useEffect, useState } from "react";

export default function () {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}
