import { useRequest } from 'alova/client';

import alovaInst from '..';

export const loginCustomer = (data: AipRequest['useLoginCustomer']) =>
	alovaInst.Post<AipResponse['useLoginCustomer']>('/bo/tmsRelated/loginCustomer', data);
