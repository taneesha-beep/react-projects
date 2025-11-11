export type Trait = 'RT'|'RC'|'LA'|'LQ'|'KD';
export type Weights = Partial<Record<Trait, number>>;
export type Choice = { label: string; w: Weights };
export type Question = { id: string; prompt: string; choices: Choice[] };

export const QUESTIONS: Question[] = [
  { id:'horizon', prompt:'Your investing horizon?', choices:[
    { label:'< 1 year', w:{ RC:-25, RT:-20, LQ:+20 } },
    { label:'1-3 years', w:{ RC:-10, RT:-5 } },
    { label:'3-7 years', w:{ RC:+10, RT:+5 } },
    { label:'> 7 years', w:{ RC:+20, RT:+15 } },
  ]},
  { id:'drawdown', prompt:'If your portfolio fell 20% in a month, you…', choices:[
    { label:'Sell everything', w:{ RT:-25, LA:+30 } },
    { label:'Sell some to feel safe', w:{ RT:-10, LA:+15 } },
    { label:'Do nothing', w:{ RT:+10, LA:-10 } },
    { label:'Buy more (average down)', w:{ RT:+25, LA:-20, KD:+5 } },
  ]},
  { id:'liquidity', prompt:'How important is quick access to cash?', choices:[
    { label:'Critical, I may need it', w:{ LQ:+25, RT:-10 } },
    { label:'Nice to have', w:{ LQ:+10 } },
    { label:'Not really', w:{ LQ:-10, RT:+5 } },
  ]},
  { id:'knowledge', prompt:'Your investing knowledge/discipline?', choices:[
    { label:'Beginner', w:{ KD:-10 } },
    { label:'Intermediate', w:{ KD:+5 } },
    { label:'Advanced', w:{ KD:+15, RT:+5 } },
  ]},
  { id:'income', prompt:'Income stability and emergency buffer', choices:[
    { label:'Unstable, low buffer', w:{ RC:-25 } },
    { label:'Okay, 3 - 6 months buffer', w:{ RC:+5 } },
    { label:'Stable, > 6 months buffer', w:{ RC:+15 } },
  ]},
  {
  id: 'loss-comfort',
  prompt: 'Which statement matches you best about losses?',
  choices: [
    { label: 'I cannot tolerate losses, I panic', w: { LA: +25, RT: -20 } },
    { label: 'I feel worried but hold', w: { LA: +10, RT: -5 } },
    { label: 'Losses are expected, I hold', w: { LA: -10, RT: +10 } },
    { label: 'I often buy during dips', w: { LA: -25, RT: +20, KD: +5 } },
  ]
},
{
  id: 'saving-behaviour',
  prompt: 'When you get extra cash (bonus/gift), you usually:',
  choices: [
    { label: 'Save it for emergencies', w: { RC: +10, LQ: +10 } },
    { label: 'Pay off debts or bills', w: { RC: +5, KD: -5 } },
    { label: 'Invest most of it', w: { RT: +15, KD: +5 } },
    { label: 'Treat myself, spend it', w: { RC: -15, LQ: +5 } },
  ]
},
{
  id: 'reaction-to-news',
  prompt: 'You read a headline: “Market down 5%”. You:',
  choices: [
    { label: 'Sell to avoid more drops', w: { RT: -20, LA: +15 } },
    { label: 'Check portfolio and maybe rebalance', w: { KD: +5, RT: +0 } },
    { label: 'Ignore day to day news', w: { RT: +10, LA: -10 } },
    { label: 'Look for buying opportunities', w: { RT: +20, KD: +5 } },
  ]
},
{
  id: 'goal-priority',
  prompt: 'Your top financial goal right now is:',
  choices: [
    { label: 'Safety (emergency fund)', w: { RC: +15, LQ: +10 } },
    { label: 'Grow moderately (home/education)', w: { RC: +5, RT: +5 } },
    { label: 'Aggressive wealth growth', w: { RT: +20, KD: +5 } },
    { label: 'Short-term returns', w: { LQ: +10, RT: -10 } },
  ]
},
{
  id: 'time-on-portfolio',
  prompt: 'How much time can you spend managing investments per month?',
  choices: [
    { label: 'Almost none, prefer passive', w: { KD: -10, RT: -5 } },
    { label: 'A little, quarterly checks', w: { KD: +0 } },
    { label: 'Some, monthly rebalance', w: { KD: +5, RT: +5 } },
    { label: 'A lot, I actively trade/research', w: { KD: +15, RT: +15 } },
  ]
},

];
