export const features = [
  {
    number: "01",
    icon: "spark",
    title: "Understands the way you talk",
    description:
      "No rigid syntax to memorize. Dulie pulls the useful details from an ordinary message and asks when something important is missing.",
    tone: "violet",
  },
  {
    number: "02",
    icon: "bell",
    title: "Reminds you in Telegram",
    description:
      "Set a reminder where you already chat. Dulie keeps track of the time and sends the nudge back to the same conversation.",
    tone: "lime",
  },
  {
    number: "03",
    icon: "calendar",
    title: "Connects to your calendar",
    description:
      "Link Google Calendar when you want to. New events can sync automatically, with your timezone handled along the way.",
    tone: "cream",
  },
];

export const useCases = [
  {
    id: "event",
    label: "Event",
    prompt: "event gym tmr 7-8pm",
    title: "Gym",
    detail: "Tomorrow · 7:00–8:00 PM",
    response: "Event saved and ready to sync.",
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
    id: "todo",
    label: "To-do",
    prompt: "todo buy milk",
    title: "Buy milk",
    detail: "To-do · Active",
    response: "Added to your to-do list.",
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
      "Dulie understands common abbreviations, relative dates, time ranges, all-day plans, and priority words.",
    commands: [
      { command: "event gym tmr 7-8pm", result: "Timed event" },
      { command: "event offsite fri all day", result: "All-day event" },
      { command: "reminder meds 9pm", result: "Scheduled reminder" },
      { command: "todo submit form high priority", result: "Priority to-do" },
      { command: "note wifi: mango42", result: "Saved note" },
    ],
  },
  {
    id: "manage",
    label: "Find & manage",
    eyebrow: "GET IT BACK",
    title: "Ask for a list. Remove what is done.",
    description:
      "List any saved type, narrow timed items to a date range, or delete by title. Dulie asks for clarification when a request is ambiguous.",
    commands: [
      { command: "list todos", result: "Open to-dos" },
      { command: "list events this week", result: "Upcoming events" },
      { command: "reminders tomorrow", result: "Tomorrow’s reminders" },
      { command: "list notes", result: "Saved notes" },
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
    title: "Timed or all-day",
    description:
      "Give Dulie a start and end time, or say “all day.” Both formats become structured events and sync cleanly to Google Calendar.",
    detail: "EVENTS",
  },
  {
    number: "02",
    title: "Short follow-ups",
    description:
      "If something is missing, answer naturally—“tomorrow,” “at 8,” or “make it a reminder.” Recent context completes the thought.",
    detail: "CONTEXT",
  },
  {
    number: "03",
    title: "A type picker when needed",
    description:
      "Send an ambiguous thought and Dulie offers Event, Reminder, To-do, and Note buttons instead of making a risky guess.",
    detail: "CLARITY",
  },
  {
    number: "04",
    title: "Calendar-safe actions",
    description:
      "Connected events are created in Google Calendar. Delete or undo them in Dulie and the linked calendar is kept aligned.",
    detail: "SYNC",
  },
  {
    number: "05",
    title: "Undo built in",
    description:
      "Every create or delete returns a one-tap Undo button for ten minutes, including the matching calendar action when connected.",
    detail: "CONTROL",
  },
  {
    number: "06",
    title: "Local time by city",
    description:
      "Set a city such as Singapore or Manila—or use an IANA timezone—and relative dates are resolved in your local time.",
    detail: "TIMEZONE",
  },
];

export const faqs = [
  {
    question: "Do I need to learn special commands?",
    answer:
      "Not for everyday planning. Write naturally and Dulie will help identify whether you mean an event, reminder, to-do, or note. A few simple commands are available for settings and calendar connection.",
  },
  {
    question: "What happens if I leave out a detail?",
    answer:
      "Dulie asks a follow-up instead of guessing. It keeps the recent conversation in context, so you can answer with something as short as “tomorrow at 8.”",
  },
  {
    question: "Can Dulie find or remove things later?",
    answer:
      "Yes. You can ask for saved events, reminders, to-dos, or notes, and remove items by title or time range. Create and delete actions also include a ten-minute undo option.",
  },
  {
    question: "Does Google Calendar connection have to be enabled?",
    answer:
      "No. Calendar connection is optional. Dulie can keep working in Telegram without it; connect Google Calendar only when you want event syncing.",
  },
];
