import { useState } from "react"
import useEventListener from "./useEventListener"

export default function useOnlineStatus() {
  const [online, setOnline] = useState(global.navigator?.onLine)

  useEventListener("online", () => setOnline(global.navigator?.onLine))
  useEventListener("offline", () => setOnline(global.navigator?.onLine))

  return online
}