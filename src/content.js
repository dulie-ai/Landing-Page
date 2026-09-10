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
    prompt: "Create an event: dinner with Sam next Friday from 7 to 9pm",
    title: "Dinner with Sam",
    detail: "Friday · 7:00–9:00 PM",
    response: "Event saved and ready to sync.",
  },
  {
    id: "reminder",
    label: "Reminder",
    prompt: "Reminder: renew my passport tomorrow at 10",
    title: "Renew passport",
    detail: "Tomorrow · 10:00 AM",
    response: "I’ll remind you here in Telegram.",
  },
  {
    id: "todo",
    label: "To-do",
    prompt: "Add finish the expense report to my todo list",
    title: "Finish the expense report",
    detail: "To-do · Active",
    response: "Added to your to-do list.",
  },
  {
    id: "note",
    label: "Note",
    prompt: "Note that the spare key is in the blue drawer",
    title: "Spare key location",
    detail: "Note · Saved",
    response: "Saved. Ask me for it whenever you need it.",
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
