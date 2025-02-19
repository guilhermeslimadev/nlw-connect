"use client";
import { IconButton } from "@/components/icon-button";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";

interface InviteLinkIputProps {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: InviteLinkIputProps) {
  function CopyInviteLink() {
    navigator.clipboard.writeText(inviteLink);
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>

      <InputField readOnly defaultValue={inviteLink} />

      <IconButton className="-mr-2" onClick={CopyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
