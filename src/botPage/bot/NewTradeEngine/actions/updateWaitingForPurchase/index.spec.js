import { translate } from '../../../../../common/i18n';
import * as actions from '../../constants/actions';
import updateWaitingForPurchase from './';

const timestamp = 123456;
const stayInsideScope = true;

describe('throw waitingForPurchase action creator', () => {
    it('should return an error action', () => {
        expect(updateWaitingForPurchase({ error: true })).toEqual({
            type   : actions.UPDATE_WAITING_FOR_PURCHASE,
            payload: Error(translate('Bot should be started before calling watch function')),
            error  : true,
        });
    });
});
describe('updateWaitingForPurchase action creator', () => {
    it('should return an action made of given timestamp and stayInsideScope flag', () => {
        expect(updateWaitingForPurchase({ timestamp, stayInsideScope })).toEqual({
            type   : actions.UPDATE_WAITING_FOR_PURCHASE,
            payload: { timestamp, stayInsideScope },
        });
    });
});