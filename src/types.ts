type Tvoter = string;
type Tcandidate = "lillian" | "victor";
type Tpoll = Partial<Record<Tcandidate, number>>
interface Result {
  totalVotes: number;
  winner: Tcandidate | undefined;
  poll: Tpoll;
}

const candidate: Tcandidate[] = ["lillian", "victor"];
const poll: Tpoll = {}
const votingRecord: Partial<Record<Tvoter, Tcandidate>> = {}


