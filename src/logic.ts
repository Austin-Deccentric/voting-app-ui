import type { Tvoter, Tcandidate, Tpoll, Result } from './types';

const candidate: Tcandidate[] = ["lillian", "victor"];
const poll: Tpoll = {}
const votingRecord: Partial<Record<Tvoter, Tcandidate>> = {}

function castVote(voter: Tvoter, votedFor: Tcandidate): boolean {
  if (voter.trim() == '') {
    alert("Enter your name")
    return false
  } else if (votingRecord[voter]) {
    alert("You have already voted")
    return false
  }
  votingRecord[voter] = votedFor;
  poll[votedFor] = (poll[votedFor] ?? 0) + 1;
  return true;
}


function getWinner(): Tcandidate | undefined {
  const polled = Object.entries(poll);
  
  const winnerObject = polled.reduce((acc, [candidate, count]) => {
    if (Object.entries(acc).length === 0) {
      acc[candidate] = Number(count);
      return acc;
    }
    let voteCount = Number(count);
    let currentWinner = Object.keys(acc)[0];
    let currentWinnerVoteCount = acc[currentWinner];
    let isTied = false;
    if (voteCount > currentWinnerVoteCount) {
      delete acc[currentWinner]; 
      acc[candidate] = voteCount;
      isTied = false;
    } else if (voteCount === currentWinnerVoteCount) {
      isTied = true;
    }
    return acc;
    
    
  }, {} as Record<string, number>)
  if (winnerObject.isTied) {
    return undefined
  }
  return Object.keys(winnerObject)[0] as Tcandidate;
}


const getResult = (): Result => {
  return {
    totalVotes : Object.entries(votingRecord).length,
    winner : getWinner(),
    poll
  }
}