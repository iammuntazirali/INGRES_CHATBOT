"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { memo } from "react";
import { Message } from "@/lib/types";
import { generateUUID } from "@/lib/utils";
import { Overview } from "./overview";

interface SuggestedActionsProps {
  chatId: string;
  appendAndTrigger: (message: Message) => Promise<void>;
}

function PureSuggestedActions({ chatId, appendAndTrigger }: SuggestedActionsProps) {
  const suggestedActions = [
    {
      title: "How many blocks in Haryana are over-exploited?",
      label: "Give me the groundwater recharge data for the past 3 years in my district.",
      action: "How many blocks in Haryana are over-exploited?",
    },
    {
      title: "Show me the long-term trend of groundwater extraction in the Ganga-Yamuna basin",
      label: `Give me the data for groundwater recharge in hard rock aquifers of Maharashtra from 2010 to 2020.`,
      action: `Give me the data for groundwater recharge in hard rock aquifers of Maharashtra from 2010 to 2020.`,
    },
    {
      title: "show me the difference in groundwater recharge between 2020 and 2024 for all of Punjab",
      label: `groundwater recharge between 2020 and 2024 for all of Punjab.`,
      action: `show me the difference in groundwater recharge`,
    },
    {
      title: "Has the number of semi-critical blocks in Uttar Pradesh increased or decreased since 2018?",
      label: "semi-critical blocks in Uttar Pradesh ",
      action: "semi-critical blocks in Uttar Pradesh increased or decreased since 2018?",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-3xl mx-auto p-4">
      {/* Overview Section */}
      <Overview />
      <div className="grid sm:grid-cols-2 gap-2 w-full">
        {suggestedActions.map((suggestedAction, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.05 * index }}
            key={`suggested-action-${suggestedAction.title}-${index}`}
            className={index > 1 ? "hidden sm:block" : "block"}
          >
            <Button
              variant="ghost"
              onClick={async () => {
                window.history.replaceState({}, "", `/chat/${chatId}`);

                appendAndTrigger({
                  id: generateUUID(),
                  role: "user",
                  content: suggestedAction.action,
                });
              }}
              className="text-left border rounded-xl px-4 py-3.5 text-sm flex-1 gap-1 sm:flex-col w-full h-auto justify-start items-start whitespace-normal break-words"
            >
              <span className="font-medium">{suggestedAction.title}</span>
              <span className="text-muted-foreground">
                {suggestedAction.label}
              </span>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export const SuggestedActions = memo(PureSuggestedActions, () => true);