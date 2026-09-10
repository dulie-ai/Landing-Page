export const features = [
  {
    number: "01",
    icon: "spark",
    title: "Understands the way you talk",
    description:
      "No rigid syntax to memorize. Dulie can pull several plans from one ordinary message, keep the context, and ask when something important is missing.",
    tone: "violet",
  },
  {
    number: "02",
    icon: "bell",
    title: "Keeps the day in view",
    description:
      "Get reminders in the same conversation and an automatic 8 AM brief of today’s events and scheduled tasks.",
    tone: "lime",
  },
  {
    number: "03",
    icon: "calendar",
    title: "Syncs with Google",
    description:
      "Connect once. Dulie mirrors events to Google Calendar and tasks to Google Tasks—including later edits, deletes, and Undo.",
    tone: "cream",
  },
];

export const useCases = [
  {
    id: "event",
    label: "Event",
    prompt: "event gym every mon 7-8pm",
    title: "Gym",
    detail: "Every Monday · 7:00–8:00 PM",
    response: "Recurring event saved and ready to sync.",
  },
  {
    id: "reminder",
    label: "Reminder",
    prompt: "reminder meds 9pm",
    title: "Take meds",
    detail: "Today · 9:00 PM",
    response: "I’ll remind you here in Telegram.",
  },
  {
    id: "task",
    label: "Task",
    prompt: "task buy milk",
    title: "Buy milk",
    detail: "Task · Active",
    response: "Added and ready for Google Tasks.",
  },
  {
    id: "note",
    label: "Note",
    prompt: "note wifi: mango42",
    title: "Wi-Fi password",
    detail: "Note · Saved",
    response: "Saved. Ask me for it whenever you need it.",
  },
];

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

export const detailedCapabilities = [
  {
    number: "01",
    title: "Repeats, naturally",
    description:
      "Say daily, weekdays, every Monday, every two weeks, or monthly. Add an end date when the routine is temporary.",
    detail: "RECURRENCE",
    tags: ["DAILY", "WEEKDAYS", "MONTHLY"],
  },
  {
    number: "02",
    title: "One message, many plans",
    description:
      "Send a list of events or tasks together. Dulie splits the message, validates each item, and saves the complete ones in one pass.",
    detail: "BATCH",
    tags: ["SPLIT", "CHECK", "SAVE"],
  },
  {
    number: "03",
    title: "Edit without rebuilding",
    description:
      "Reschedule an event, rename a task, change a note, or move a reminder. Dulie updates the existing item instead of creating a duplicate.",
    detail: "UPDATES",
    tags: ["MOVE", "RENAME", "RESCHEDULE"],
  },
  {
    number: "04",
    title: "Calendar and Tasks sync",
    description:
      "One Google connection covers Calendar events and Google Tasks. Creates, updates, deletes, and reversals are mirrored automatically.",
    detail: "SYNC",
    tags: ["CREATE", "UPDATE", "DELETE"],
  },
  {
    number: "05",
    title: "Color-coded automatically",
    description:
      "Work, fitness, errands, and leisure events receive distinct Google Calendar colors and category-aware default durations.",
    detail: "CATEGORIES",
    swatches: ["#e67c73", "#fbd75b", "#b99aff", "#46d6db"],
  },
  {
    number: "06",
    title: "An 8 AM morning brief",
    description:
      "Start the day with a Telegram summary of today’s events and scheduled tasks, including recurring events due that day.",
    detail: "SUMMARY",
    tags: ["08:00", "EVENTS", "TASKS"],
  },
  {
    number: "07",
    title: "Undo goes further",
    description:
      "Reverse creates, updates, deletes, or an entire batch for ten minutes. Connected Google items are rolled back with them.",
    detail: "CONTROL",
    tags: ["CREATE", "EDIT", "BATCH"],
  },
  {
    number: "08",
    title: "Context, with guardrails",
    description:
      "Short follow-ups complete missing details. Ambiguous messages get a type picker, and city-based timezones keep relative dates local.",
    detail: "CONTEXT",
    tags: ["FOLLOW-UP", "PICKER", "LOCAL TIME"],
  },
];

export const faqs = [
  {
    question: "Do I need to learn special commands?",
    answer:
      "Not for everyday planning. Write naturally and Dulie will help identify whether you mean an event, reminder, task, or note. A few simple commands are available for settings and Google connection.",
  },
  {
    question: "What happens if I leave out a detail?",
    answer:
      "Dulie asks a follow-up instead of guessing. It keeps the recent conversation in context, so you can answer with something as short as “tomorrow at 8.”",
  },
  {
    question: "Can Dulie find or remove things later?",
    answer:
      "Yes. You can list, rename, reschedule, or remove saved items by title or time range. Creates, updates, deletes, and batch actions include a ten-minute Undo option.",
  },
  {
    question: "What does the Google connection sync?",
    answer:
      "It is optional. Once connected, events sync with Google Calendar and tasks sync with Google Tasks—including later updates, deletes, and Undo actions.",
  },
  {
    question: "Can events repeat?",
    answer:
      "Yes. Dulie supports daily, weekly, weekday, monthly, and interval-based recurring events, with an optional end date. Recurrence is carried into Google Calendar when connected.",
  },
];
