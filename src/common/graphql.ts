import { gql } from "@apollo/client";

export enum GRAPH_INTERFACE_ENUM {
  troveManagerParams = "troveManagerParams",
  tcrs = "tcrs",
  prices = "prices",
  troveEvents = "troveEvents",
  vestInfos = "vestInfos",
  accountWENQETHStakes = "accountWENQETHStakes",
  accountWENUSDQUSDCStakes = "accountWENUSDQUSDCStakes",
  accountESWESNStakes = "accountESWESNStakes",
  accountWENQETHTotalStakes = "accountWENQETHTotalStakes",
  accountWENUSDQUSDCTotalStakes = "accountWENUSDQUSDCTotalStakes",
  accountESWESNTotalStakes = "accountESWESNTotalStakes",
}

export const queryMaps = {
  [GRAPH_INTERFACE_ENUM.troveManagerParams]: gql`
    query GetLocations {
      troveManagerParams(first: 10) {
        id
        idNumber
        name
        maxSystemDebt
        entireSystemDebt
        MCR
        CCR
        entireSystemColl
        interstDebt
        updatedBlock
        redemptionBootstrap
        redemptionRateWithDecay
        borrowingRateWithDecay
      }
    }
  `,
  [GRAPH_INTERFACE_ENUM.tcrs]: gql`
    query GetLocations {
      tcrs(first: 1) {
        id
        TCR
        WenUSDtotalSupply
        updatedBlock
      }
    }
  `,
  [GRAPH_INTERFACE_ENUM.prices]: gql`
    query GetLocations {
      prices(first: 10) {
        id
        idNumber
        name
        price
        updatedBlock
      }
    }
  `,
  [GRAPH_INTERFACE_ENUM.troveEvents]: gql`
    query GetLocations($owner: String!) {
      troveEvents(first: 1000, where: { owner: $owner }) {
        id
        owner
        eventType
        txHash
        timestamp
        debt
        coll
        stake
      }
    }
  `,
  [GRAPH_INTERFACE_ENUM.vestInfos]: gql`
    query GetLocations($owner: String!, $pageSize: Int!, $offset: Int!) {
      vestInfos(
        orderBy: "claimable"
        orderDirection: desc
        skip: $offset
        first: $pageSize
        where: { owner: $owner, claimable_gt: 0 }
      ) {
        id
        idNumber
        owner
        amount
        claimed
        claimable
        start
        cliffEnd
        releaseEnd
        released
        timestamp
        txHash
      }
    }
  `,
  [GRAPH_INTERFACE_ENUM.accountWENQETHStakes]: gql`
    query GetLocations($owner: String!) {
      accountWENQETHStakes(first: 1000, where: { owner: $owner }) {
        id
        stakeInfos(where: { balance_gt: 0 }) {
          id
          locked
          owner
          lockIndex
          lockTime
          idNumber
          shares
          unlockTime
          duration
          miningBoost
          balance
        }
      }
    }
  `,
  [GRAPH_INTERFACE_ENUM.accountWENUSDQUSDCStakes]: gql`
    query GetLocations($owner: String!) {
      accountWENUSDQUSDCStakes(first: 1000, where: { owner: $owner }) {
        id
        stakeInfos(where: { balance_gt: 0 }) {
          id
          locked
          owner
          idNumber
          lockIndex
          lockTime
          shares
          unlockTime
          duration
          miningBoost
          balance
        }
      }
    }
  `,
  [GRAPH_INTERFACE_ENUM.accountESWESNStakes]: gql`
    query GetLocations($owner: String!) {
      accountESWESNStakes(first: 1000, where: { owner: $owner }) {
        id
        stakeInfos(where: { balance_gt: 0 }) {
          id
          locked
          owner
          idNumber
          lockIndex
          lockTime
          shares
          unlockTime
          duration
          miningBoost
          balance
        }
      }
    }
  `,
  [GRAPH_INTERFACE_ENUM.accountWENQETHTotalStakes]: gql`
    query GetLocations($owner: String!) {
      accountWENQETHStakes(first: 1, where: { owner: $owner }) {
        totalBlance
      }
    }
  `,
  [GRAPH_INTERFACE_ENUM.accountWENUSDQUSDCTotalStakes]: gql`
    query GetLocations($owner: String!) {
      accountWENUSDQUSDCStakes(first: 1, where: { owner: $owner }) {
        totalBlance
      }
    }
  `,
  [GRAPH_INTERFACE_ENUM.accountESWESNTotalStakes]: gql`
    query GetLocations($owner: String!) {
      accountESWESNStakes(first: 1, where: { owner: $owner }) {
        totalBlance
      }
    }
  `,
};
