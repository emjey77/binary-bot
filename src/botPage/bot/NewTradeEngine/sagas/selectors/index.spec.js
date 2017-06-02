import * as selectors from './';

const state = {
    stage      : 'stage',
    tradeOption: {
        contractTypes: ['CALL'],
    },
    proposalInfo: {
        receivedProposals : {},
        forgottenProposals: {},
    },
};

describe('selectors', () => {
    it('should select stage', () => {
        expect(selectors.stage(state)).toEqual(state.stage);
    });

    it('should select tradeOption', () => {
        expect(selectors.tradeOption(state)).toEqual(state.tradeOption);
    });

    it('should select lastTick', () => {
        expect(selectors.lastTick(state)).toEqual(state.lastTick);
    });

    it('should select receivedProposals from proposalInfo', () => {
        expect(selectors.proposals(state)).toEqual(state.proposalInfo.receivedProposals);
    });

    it('should select forgottenProposals from proposalInfo', () => {
        expect(selectors.forgottenProposals(state)).toEqual(state.proposalInfo.receivedProposals);
    });
});
