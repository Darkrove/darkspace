import React from 'react'
import useCopyToClipboard from "../../lib/hooks/useCopyToClipboard";
import { Copy, Checks } from "phosphor-react"

const CopyButton = ({ value }) => {
    const [copyToClipboard, { success }] = useCopyToClipboard();
    return (
        <button
            className="p-2 hover:rounded-md hover:bg-zinc-800 hover:backdrop-blur-sm"
            onClick={() => copyToClipboard(value)}
        >
            {success ? (
                <Checks size="1rem" className="text-green-400" weight="bold" />
            ) : (
                <Copy size="1rem" className="text-white" weight="bold" />
            )}
        </button>
    )
}

export default CopyButton