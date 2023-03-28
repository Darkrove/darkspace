import { useState, useEffect } from "react"
import copy from "copy-to-clipboard"

export default function useCopyToClipboard() {
  const [value, setValue] = useState()
  const [success, setSuccess] = useState('')

  useEffect(() => {
    setTimeout(() => setSuccess(''), 5000)
  }, [success])

  const copyToClipboard = (text, options) => {
    const result = copy(text, options)
    if (result) setValue(text)
    setSuccess(result)
  }

  return [copyToClipboard, { value, success }]
}