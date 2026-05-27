/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { InboxWorkspace } from "@/components/inbox-workspace";

export default function InboxPage() {
  return (
    <InboxWorkspace
      dashboardKey="admin"
      subtitle="Stay connected with your sales partners and never miss what matters."
      recipientSearchPlaceholder="Search sales partners..."
      emptyConversationText="No conversations yet. Click + to start one with a sales partner."
      taskHref="/workflows"
    />
  );
}
