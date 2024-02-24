"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const CopyUrlButton = () => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
  };

  return (
    <Button
      className="h-8 rounded-md px-2 text-xs"
      variant="outline"
      onClick={handleClick}
    >
      {isCopied ? <Check size={16} /> : <Copy size={16} />}
      <span className="hidden sm:ml-1 sm:block">
        {isCopied ? "Copied, share it!" : "Copy URL"}
      </span>
    </Button>
  );
};
