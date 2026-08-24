export type Thought = {
  id: number;
  date: string;
  title: string;
  tags: string;
  readTime: number;
  category: string;
  content: string;
};

export const thoughts: Thought[] = [
  {
    id: 1,
    date: "08.13.26",
    title: "I think good interfaces should disappear.",
    tags: "Design",
    readTime: 4,
    category: "Design",
    content: `The best interfaces are the ones you stop noticing.

You don't think about how to use them — you just use them. The friction has been designed away so thoroughly that the tool becomes an extension of your intent. You're not operating software; you're doing the thing the software was built to help you do.

This is harder to achieve than it sounds. Every affordance you add is something the user has to learn. Every label is a cognitive cost. Every animation that doesn't serve a purpose is noise. Good design is relentless subtraction — removing everything that gets between the person and the outcome.

I think about this a lot when I'm designing. Not "does this look good?" but "does this get out of the way?" The best compliment a user can give a piece of software isn't "wow, this looks great." It's "I didn't even notice I was using it."

That invisibility is the goal. That's the craft.`,
  },
  {
    id: 2,
    date: "08.13.26",
    title: "Shipping fast is a skill, not a shortcut.",
    tags: "Building",
    readTime: 3,
    category: "Building",
    content: `There's a version of "ship fast" that's about cutting corners. Skipping tests, ignoring edge cases, launching something half-baked and calling it an MVP. That version is a debt factory.

But the version I'm interested in is different. It's about ruthless prioritisation — knowing which parts of a thing actually matter at this stage, and doing those parts well while parking everything else. It requires taste and judgment. It requires being honest about what's load-bearing and what's decoration.

Shipping fast, done well, is one of the hardest skills to develop. Because it forces you to make real decisions instead of hedging. You can't say "we'll figure that out later" when later is tomorrow. You have to decide what the product actually is, right now.

The people who are genuinely good at it tend to ship things that feel complete even when they're minimal. That's the discipline: not less, but exactly enough.`,
  },
  {
    id: 3,
    date: "08.13.26",
    title: "What the best developers I know have in common.",
    tags: "Tech",
    readTime: 5,
    category: "Tech",
    content: `I've worked alongside a handful of developers who are genuinely excellent — not just technically capable, but the kind of people who make everyone around them better. I've been thinking about what they share.

They ask better questions. Before they write a single line of code, they understand the problem. Not just "what does this need to do?" but "why does this need to exist at all, and what breaks if it doesn't?" Good questions save more time than fast typing.

They have strong opinions, loosely held. They'll argue for their approach, but they update when they encounter a better one. There's no ego attached to the implementation.

They care about the person using the thing. Even if they never meet the user, they keep them in mind. Code that works and code that works for people are different things.

They write for the next person. Comments, naming, structure — the invisible work that nobody praises but everybody benefits from.

And they're comfortable not knowing. The field is too large for any single person to master. The best ones know how to not know things without being paralysed by it.`,
  },
  {
    id: 4,
    date: "08.13.26",
    title: "On consistency and showing up when it doesn't feel like it.",
    tags: "Life",
    readTime: 4,
    category: "Life",
    content: `Most days don't feel like anything significant. You sit down, you do the work, you finish, you close the laptop. Nothing about it feels notable. That's the whole game.

I used to think momentum was about streaks — about never breaking the chain. But I don't think that's quite right anymore. Momentum is about what you do the day after you break the chain. Do you start again? Or do you let the gap become a reason?

Consistency isn't the same thing as never stopping. It's the returning. The sitting back down. The willingness to make the thing imperfect and do it anyway, because an imperfect thing made regularly is worth more than a perfect thing attempted once.

The work compounds. Not dramatically, not in ways you can measure day to day. But you look back six months later and something is different. You're not the same person who started. The only requirement was showing up often enough for that change to accumulate.

That's it. That's the whole secret. Show up. Keep going. Notice the change when it arrives.`,
  },
];

