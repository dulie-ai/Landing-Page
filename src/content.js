export const commandGroups = [
  {
    id: "capture",
    label: "Capture",
    eyebrow: "SAVE SOMETHING",
    title: "Start with the type. Keep the rest short.",
    description:
      "Dulie understands common abbreviations, relative dates, time ranges, all-day plans, and scheduled tasks.",
    commands: [
      { command: "event gym tmr 7-8pm", result: "Timed event" },
      { command: "event offsite fri all day", result: "All-day event" },
      { command: "reminder meds 9pm", result: "Scheduled reminder" },
      { command: "task submit form fri 5pm", result: "Scheduled task" },
      { command: "note wifi: mango42", result: "Saved note" },
    ],
  },
  {
    id: "repeat",
    label: "Repeat & batch",
    eyebrow: "DO MORE AT ONCE",
    title: "Repeat a plan—or send several together.",
    description:
      "Recurring events support daily, weekly, weekday, monthly, and custom intervals. A single message can also create several events or tasks.",
    commands: [
      { command: "event gym every mon 7-8pm", result: "Every Monday" },
      { command: "event standup weekdays 9-9:15am", result: "Every weekday" },
      {
        command: "event physio every 2 weeks fri 4-5pm until dec",
        result: "Repeat until date",
      },
      {
        command: "events: gym mon 7-8; dentist tue 3-4",
        result: "Two events",
      },
      {
        command: "tasks: buy milk; book dentist; send invoice",
        result: "Three tasks",
      },
    ],
  },
  {
    id: "manage",
    label: "Edit & find",
    eyebrow: "CHANGE YOUR MIND",
    title: "Move it, rename it, find it, or remove it.",
    description:
      "Updates happen in place and sync to Google when connected. List by type or date range, and delete a single item or a matching group.",
    commands: [
      {
        command: "reschedule event gym to tue 8-9pm",
        result: "Move + sync",
      },
      {
        command: "rename task buy milk to buy groceries",
        result: "Rename task",
      },
      { command: "list events this week", result: "Upcoming events" },
      { command: "reminders tomorrow", result: "Tomorrow’s reminders" },
      { command: "delete note wifi", result: "Delete + Undo" },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    eyebrow: "CONNECT YOUR WORLD",
    title: "Four commands handle account settings.",
    description:
      "These are the only slash commands you need. Telegram also surfaces the first three in its command menu.",
    commands: [
      { command: "/connect_google", result: "Link Calendar" },
      { command: "/disconnect_google", result: "Remove access" },
      { command: "/settings", result: "View preferences" },
      { command: "/set_timezone Singapore", result: "Set local time" },
    ],
  },
];
