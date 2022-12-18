import { getNestedProto } from '@osmonauts/proto-parser';
import { ProtoParseContext } from '@osmonauts/ast';
import { expectCode, getTestProtoStore } from '../../../test-utils';
import { createObjectWithMethods } from '../object';

const store = getTestProtoStore();
store.options.aminoEncoding.useRecursiveV2encoding = true;
store.options.interfaces.enabled = true;
store.traverseAll();

it('MsgSubmitProposal', async () => {
    const ref = store.findProto('cosmos/gov/v1beta1/tx.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    expectCode(createObjectWithMethods(
        context,
        'MsgSubmitProposal', getNestedProto(ref.traversed).MsgSubmitProposal
    ))
});

// IBC
it('Height', async () => {
    const ref = store.findProto('ibc/core/client/v1/client.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    expectCode(createObjectWithMethods(
        context,
        'Height', getNestedProto(ref.traversed).Height
    ))
});
it('MsgTransfer', async () => {
    const ref = store.findProto('ibc/applications/transfer/v1/tx.proto');
    const context = new ProtoParseContext(ref, store, store.options);
    expectCode(createObjectWithMethods(
        context,
        'MsgTransfer', getNestedProto(ref.traversed).MsgTransfer
    ))
});