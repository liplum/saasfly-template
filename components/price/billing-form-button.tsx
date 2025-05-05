"use client";

import { useTransition } from "react";

import { Button } from "@/ui/button";
import * as Icons from "@/ui/icons";

import type { SubscriptionPlan, UserSubscriptionPlan } from "@/types";

interface BillingFormButtonProps {
  offer: SubscriptionPlan;
  subscriptionPlan: UserSubscriptionPlan;
  year: boolean;
  dict: Record<string, string>;
}

export function BillingFormButton({
  year,
  offer,
  dict,
  subscriptionPlan,
}: BillingFormButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="default"
      className="w-full"
      disabled={isPending}
    >
      {isPending ? (
        <>
          <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" /> Loading...
        </>
      ) : (
        <>
          {subscriptionPlan.stripePriceId
            ? dict.manage_subscription
            : dict.upgrade}
        </>
      )}
    </Button>
  );
}
