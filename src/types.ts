export type Tvoter = string;
export type Tcandidate = "lillian" | "victor" | "ifeanyi";
/** Only stores candidates who have received votes (undefined means 0 votes) */
export type Tpoll = Partial<Record<Tcandidate, number>>;
/** Result can have undefined winner if there's a tie between candidates */
export interface Result {
  totalVotes: number;
  winner: Tcandidate | undefined;
  poll: Tpoll;
}
