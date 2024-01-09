import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './LensHub.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: bigint] & {owner: string, approved: string, tokenId: bigint})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: bigint] & {from: string, to: string, tokenId: bigint})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
    BaseInitialized: new LogEvent<([name: string, symbol: string, timestamp: bigint] & {name: string, symbol: string, timestamp: bigint})>(
        abi, '0x414cd0b34676984f09a5f76ce9718d4062e50283abe0e7e274a9a5b4e0c99c30'
    ),
    CollectModuleWhitelisted: new LogEvent<([collectModule: string, whitelisted: boolean, timestamp: bigint] & {collectModule: string, whitelisted: boolean, timestamp: bigint})>(
        abi, '0x6cc19a794d6a439023150cd58748eed4353190c0bb060d2e6250e2df4a68b673'
    ),
    CollectNFTDeployed: new LogEvent<([profileId: bigint, pubId: bigint, collectNFT: string, timestamp: bigint] & {profileId: bigint, pubId: bigint, collectNFT: string, timestamp: bigint})>(
        abi, '0x0b227b550ffed48af813b32e246f787e99581ee13206ba8f9d90d63615269b3f'
    ),
    CollectNFTInitialized: new LogEvent<([profileId: bigint, pubId: bigint, timestamp: bigint] & {profileId: bigint, pubId: bigint, timestamp: bigint})>(
        abi, '0x898a2dec95856255977a0fb48cebc30051d50c0d8d33f93dea1e3ddb2e342442'
    ),
    CollectNFTTransferred: new LogEvent<([profileId: bigint, pubId: bigint, collectNFTId: bigint, from: string, to: string, timestamp: bigint] & {profileId: bigint, pubId: bigint, collectNFTId: bigint, from: string, to: string, timestamp: bigint})>(
        abi, '0x68edb7ec2c37d21b3b72233960b487f2966f4ac82b7430d39f24d1f8d6f99106'
    ),
    DefaultProfileSet: new LogEvent<([wallet: string, profileId: bigint, timestamp: bigint] & {wallet: string, profileId: bigint, timestamp: bigint})>(
        abi, '0x0afd7c479e8bc7dcdb856b3cc27d2332dfe1f018fde574ea124919ddcae8a933'
    ),
    Collected: new LogEvent<([profileId: bigint, followNFTId: bigint, from: string, to: string, timestamp: bigint] & {profileId: bigint, followNFTId: bigint, from: string, to: string, timestamp: bigint})>(
        abi, '0x68c41510a57ad61441ab96208aa0e616f0e4d54de486b17afc6960733010002b'
    ),
    CommentCreated: new LogEvent<([profileId: bigint, pubId: bigint, contentURI: string, profileIdPointed: bigint, pubIdPointed: bigint, referenceModuleData: string, collectModule: string, collectModuleReturnData: string, referenceModule: string, referenceModuleReturnData: string, timestamp: bigint] & {profileId: bigint, pubId: bigint, contentURI: string, profileIdPointed: bigint, pubIdPointed: bigint, referenceModuleData: string, collectModule: string, collectModuleReturnData: string, referenceModule: string, referenceModuleReturnData: string, timestamp: bigint})>(
        abi, '0x7b4d1aa33773161799847429e4fbf29f56dbf1a3fe815f5070231cbfba402c37'
    ),
    DispatcherSet: new LogEvent<([profileId: bigint, dispatcher: string, timestamp: bigint] & {profileId: bigint, dispatcher: string, timestamp: bigint})>(
        abi, '0x22baaec4952f35f59e45bd2ddb287e1ccc6d319375770c09428eb8f8d604e065'
    ),
    EmergencyAdminSet: new LogEvent<([caller: string, oldEmergencyAdmin: string, newEmergencyAdmin: string, timestamp: bigint] & {caller: string, oldEmergencyAdmin: string, newEmergencyAdmin: string, timestamp: bigint})>(
        abi, '0x676c0801b0f400762e958ee31cfbb10870e70786f6761f57c8647e766b0db3d9'
    ),
    FeeModuleBaseConstructed: new LogEvent<([moduleGlobals: string, timestamp: bigint] & {moduleGlobals: string, timestamp: bigint})>(
        abi, '0x4e84a529f4c627b5e787037d117873af1018768804cca3c7f0d47041fe2c89ed'
    ),
    FollowModuleSet: new LogEvent<([profileId: bigint, followModule: string, followModuleReturnData: string, timestamp: bigint] & {profileId: bigint, followModule: string, followModuleReturnData: string, timestamp: bigint})>(
        abi, '0x92d95e400932d129885e627b38b169cbb28443ffaaa282d0fba0cf8797721359'
    ),
    FollowModuleWhitelisted: new LogEvent<([followModule: string, whitelisted: boolean, timestamp: bigint] & {followModule: string, whitelisted: boolean, timestamp: bigint})>(
        abi, '0x52c5b7889df9f12f84ec3da051e854e5876678370d8357959c23ef59dd6486df'
    ),
    FollowNFTDelegatedPowerChanged: new LogEvent<([delegate: string, newPower: bigint, timestamp: bigint] & {delegate: string, newPower: bigint, timestamp: bigint})>(
        abi, '0xd9a6070174f4ccca76ed4896432e9a090b16e07e8fe27f275f50b33500b98e52'
    ),
    FollowNFTDeployed: new LogEvent<([profileId: bigint, followNFT: string, timestamp: bigint] & {profileId: bigint, followNFT: string, timestamp: bigint})>(
        abi, '0x44403e38baed5e40df7f64ff8708b076c75a0dfda8380e75df5c36f11a476743'
    ),
    FollowNFTInitialized: new LogEvent<([profileId: bigint, timestamp: bigint] & {profileId: bigint, timestamp: bigint})>(
        abi, '0xaec15127df11a6b562c87d31bcb8f4cd2f0cf57fb9b663d6334abf41fea94d95'
    ),
    FollowNFTTransferred: new LogEvent<([profileId: bigint, followNFTId: bigint, from: string, to: string, timestamp: bigint] & {profileId: bigint, followNFTId: bigint, from: string, to: string, timestamp: bigint})>(
        abi, '0x4996ad2257e7db44908136c43128cc10ca988096f67dc6bb0bcee11d151368fb'
    ),
    FollowNFTURISet: new LogEvent<([profileId: bigint, followNFTURI: string, timestamp: bigint] & {profileId: bigint, followNFTURI: string, timestamp: bigint})>(
        abi, '0xe82886e1af6fcab5caef13815b22f51384e970c367a785f265d13860a7d6966d'
    ),
    Followed: new LogEvent<([follower: string, profileIds: Array<bigint>, followModuleDatas: Array<string>, timestamp: bigint] & {follower: string, profileIds: Array<bigint>, followModuleDatas: Array<string>, timestamp: bigint})>(
        abi, '0x40487072dc56f384287d26fbe090f404143c2737d54632177451d1f74bd82c76'
    ),
    FollowsApproved: new LogEvent<([owner: string, profileId: bigint, addresses: Array<string>, approved: Array<boolean>, timestamp: bigint] & {owner: string, profileId: bigint, addresses: Array<string>, approved: Array<boolean>, timestamp: bigint})>(
        abi, '0xc67fc3972da5d6434ab7b796ba133c240d40ee4e69129963c5aa0f2a6f7c3ad6'
    ),
    GovernanceSet: new LogEvent<([caller: string, prevGovernance: string, newGovernance: string, timestamp: bigint] & {caller: string, prevGovernance: string, newGovernance: string, timestamp: bigint})>(
        abi, '0xe552a55455b740845a5c07ed445d1724142fc997b389835495a29b30cddc1ccd'
    ),
    MirrorCreated: new LogEvent<([profileId: bigint, pubId: bigint, profileIdPointed: bigint, pubIdPointed: bigint, referenceModuleData: string, referenceModule: string, referenceModuleReturnData: string, timestamp: bigint] & {profileId: bigint, pubId: bigint, profileIdPointed: bigint, pubIdPointed: bigint, referenceModuleData: string, referenceModule: string, referenceModuleReturnData: string, timestamp: bigint})>(
        abi, '0x9ea5dedb85bd9da4e264ee5a39b7ba0982e5d4d035d55edfa98a36b00e770b5a'
    ),
    ModuleBaseConstructed: new LogEvent<([hub: string, timestamp: bigint] & {hub: string, timestamp: bigint})>(
        abi, '0xf1a1fa6b64aa95186f5a1285e76198d0da80d9c5a88062641d447f1d7c54e56c'
    ),
    ModuleGlobalsCurrencyWhitelisted: new LogEvent<([currency: string, prevWhitelisted: boolean, whitelisted: boolean, timestamp: bigint] & {currency: string, prevWhitelisted: boolean, whitelisted: boolean, timestamp: bigint})>(
        abi, '0x79c3cefc851fd6040f06af202c542818d9fb39bcddcb7a7e3f563b15300a2743'
    ),
    ModuleGlobalsGovernanceSet: new LogEvent<([prevGovernance: string, newGovernance: string, timestamp: bigint] & {prevGovernance: string, newGovernance: string, timestamp: bigint})>(
        abi, '0xbf538a2c0db3d440906b8179dd0394f68a65b0b1481da70ffee24e19dccee84c'
    ),
    ModuleGlobalsTreasuryFeeSet: new LogEvent<([prevTreasuryFee: number, newTreasuryFee: number, timestamp: bigint] & {prevTreasuryFee: number, newTreasuryFee: number, timestamp: bigint})>(
        abi, '0xec936862e6bb897cd711a5f31825057583128c2a482f0a4c9a4e6c3fd7c023f4'
    ),
    ModuleGlobalsTreasurySet: new LogEvent<([prevTreasury: string, newTreasury: string, timestamp: bigint] & {prevTreasury: string, newTreasury: string, timestamp: bigint})>(
        abi, '0x3dfc53d6b49bfbc932b215ba515f0d0ab0e17aac17726fba48075f0c16c7ffe3'
    ),
    PostCreated: new LogEvent<([profileId: bigint, pubId: bigint, contentURI: string, collectModule: string, collectModuleReturnData: string, referenceModule: string, referenceModuleReturnData: string, timestamp: bigint] & {profileId: bigint, pubId: bigint, contentURI: string, collectModule: string, collectModuleReturnData: string, referenceModule: string, referenceModuleReturnData: string, timestamp: bigint})>(
        abi, '0xc672c38b4d26c3c978228e99164105280410b144af24dd3ed8e4f9d211d96a50'
    ),
    ProfileCreated: new LogEvent<([profileId: bigint, creator: string, to: string, handle: string, imageURI: string, followModule: string, followModuleReturnData: string, followNFTURI: string, timestamp: bigint] & {profileId: bigint, creator: string, to: string, handle: string, imageURI: string, followModule: string, followModuleReturnData: string, followNFTURI: string, timestamp: bigint})>(
        abi, '0x4e14f57cff7910416f2ef43cf05019b5a97a313de71fec9344be11b9b88fed12'
    ),
    ProfileCreatorWhitelisted: new LogEvent<([profileCreator: string, whitelisted: boolean, timestamp: bigint] & {profileCreator: string, whitelisted: boolean, timestamp: bigint})>(
        abi, '0x8f617843889b94892bd44852d36ca6a7f49ecf4350a01e7b68e22d80f4ed95bc'
    ),
    ProfileImageURISet: new LogEvent<([profileId: bigint, imageURI: string, timestamp: bigint] & {profileId: bigint, imageURI: string, timestamp: bigint})>(
        abi, '0xd5a5879cad33c830cc1432c1850107029a09c80c60e9bce1ecd08d24880bd46c'
    ),
    ReferenceModuleWhitelisted: new LogEvent<([referenceModule: string, whitelisted: boolean, timestamp: bigint] & {referenceModule: string, whitelisted: boolean, timestamp: bigint})>(
        abi, '0x37872a053ef20cb52defb7c9ec20e1a87cb8dd5098ac9e76a144be263dfef572'
    ),
    StateSet: new LogEvent<([caller: string, prevState: number, newState: number, timestamp: bigint] & {caller: string, prevState: number, newState: number, timestamp: bigint})>(
        abi, '0xa2f9a1499fc1f9b7796d21fe5761290ccb7e0ef6ccf35fa58b668f304a62a1ca'
    ),
}

export const functions = {
    approve: new Func<[to: string, tokenId: bigint], {to: string, tokenId: bigint}, []>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, bigint>(
        abi, '0x70a08231'
    ),
    burn: new Func<[tokenId: bigint], {tokenId: bigint}, []>(
        abi, '0x42966c68'
    ),
    burnWithSig: new Func<[tokenId: bigint, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})], {tokenId: bigint, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})}, []>(
        abi, '0xdd69cdb1'
    ),
    collect: new Func<[profileId: bigint, pubId: bigint, data: string], {profileId: bigint, pubId: bigint, data: string}, []>(
        abi, '0x84114ad4'
    ),
    collectWithSig: new Func<[vars: ([collector: string, profileId: bigint, pubId: bigint, data: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {collector: string, profileId: bigint, pubId: bigint, data: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})], {vars: ([collector: string, profileId: bigint, pubId: bigint, data: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {collector: string, profileId: bigint, pubId: bigint, data: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})}, []>(
        abi, '0xb48951e4'
    ),
    comment: new Func<[vars: ([profileId: bigint, contentURI: string, profileIdPointed: bigint, pubIdPointed: bigint, collectModule: string, collectModuleData: string, referenceModule: string, referenceModuleData: string] & {profileId: bigint, contentURI: string, profileIdPointed: bigint, pubIdPointed: bigint, collectModule: string, collectModuleData: string, referenceModule: string, referenceModuleData: string})], {vars: ([profileId: bigint, contentURI: string, profileIdPointed: bigint, pubIdPointed: bigint, collectModule: string, collectModuleData: string, referenceModule: string, referenceModuleData: string] & {profileId: bigint, contentURI: string, profileIdPointed: bigint, pubIdPointed: bigint, collectModule: string, collectModuleData: string, referenceModule: string, referenceModuleData: string})}, []>(
        abi, '0xa2c79772'
    ),
    commentWithSig: new Func<[vars: ([profileId: bigint, contentURI: string, profileIdPointed: bigint, pubIdPointed: bigint, collectModule: string, collectModuleData: string, referenceModule: string, referenceModuleData: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {profileId: bigint, contentURI: string, profileIdPointed: bigint, pubIdPointed: bigint, collectModule: string, collectModuleData: string, referenceModule: string, referenceModuleData: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})], {vars: ([profileId: bigint, contentURI: string, profileIdPointed: bigint, pubIdPointed: bigint, collectModule: string, collectModuleData: string, referenceModule: string, referenceModuleData: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {profileId: bigint, contentURI: string, profileIdPointed: bigint, pubIdPointed: bigint, collectModule: string, collectModuleData: string, referenceModule: string, referenceModuleData: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})}, []>(
        abi, '0xecfab8fa'
    ),
    createProfile: new Func<[vars: ([to: string, handle: string, imageURI: string, followModule: string, followModuleData: string, followNFTURI: string] & {to: string, handle: string, imageURI: string, followModule: string, followModuleData: string, followNFTURI: string})], {vars: ([to: string, handle: string, imageURI: string, followModule: string, followModuleData: string, followNFTURI: string] & {to: string, handle: string, imageURI: string, followModule: string, followModuleData: string, followNFTURI: string})}, []>(
        abi, '0xffea138e'
    ),
    emitCollectNFTTransferEvent: new Func<[profileId: bigint, pubId: bigint, collectNFTId: bigint, from: string, to: string], {profileId: bigint, pubId: bigint, collectNFTId: bigint, from: string, to: string}, []>(
        abi, '0x86e2947b'
    ),
    emitFollowNFTTransferEvent: new Func<[profileId: bigint, followNFTId: bigint, from: string, to: string], {profileId: bigint, followNFTId: bigint, from: string, to: string}, []>(
        abi, '0xbdfdd4bc'
    ),
    follow: new Func<[profileIds: Array<bigint>, datas: Array<string>], {profileIds: Array<bigint>, datas: Array<string>}, []>(
        abi, '0xfb78ae6c'
    ),
    followWithSig: new Func<[vars: ([follower: string, profileIds: Array<bigint>, datas: Array<string>, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {follower: string, profileIds: Array<bigint>, datas: Array<string>, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})], {vars: ([follower: string, profileIds: Array<bigint>, datas: Array<string>, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {follower: string, profileIds: Array<bigint>, datas: Array<string>, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})}, []>(
        abi, '0x8e4fd6a9'
    ),
    getApproved: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x081812fc'
    ),
    getCollectModule: new Func<[profileId: bigint, pubId: bigint], {profileId: bigint, pubId: bigint}, string>(
        abi, '0x57ff49f6'
    ),
    getCollectNFT: new Func<[profileId: bigint, pubId: bigint], {profileId: bigint, pubId: bigint}, string>(
        abi, '0x52aaef55'
    ),
    getContentURI: new Func<[profileId: bigint, pubId: bigint], {profileId: bigint, pubId: bigint}, string>(
        abi, '0xb5a31496'
    ),
    getDispatcher: new Func<[profileId: bigint], {profileId: bigint}, string>(
        abi, '0x540528b9'
    ),
    getDomainSeparator: new Func<[], {}, string>(
        abi, '0xed24911d'
    ),
    getFollowModule: new Func<[profileId: bigint], {profileId: bigint}, string>(
        abi, '0xd923d20c'
    ),
    getFollowNFT: new Func<[profileId: bigint], {profileId: bigint}, string>(
        abi, '0xa9ec6563'
    ),
    getFollowNFTURI: new Func<[profileId: bigint], {profileId: bigint}, string>(
        abi, '0x374c9473'
    ),
    getGovernance: new Func<[], {}, string>(
        abi, '0x289b3c0d'
    ),
    getHandle: new Func<[profileId: bigint], {profileId: bigint}, string>(
        abi, '0xec81d194'
    ),
    getProfile: new Func<[profileId: bigint], {profileId: bigint}, ([pubCount: bigint, followModule: string, followNFT: string, handle: string, imageURI: string, followNFTURI: string] & {pubCount: bigint, followModule: string, followNFT: string, handle: string, imageURI: string, followNFTURI: string})>(
        abi, '0xf08f4f64'
    ),
    getProfileIdByHandle: new Func<[handle: string], {handle: string}, bigint>(
        abi, '0x20fa728a'
    ),
    getPub: new Func<[profileId: bigint, pubId: bigint], {profileId: bigint, pubId: bigint}, ([profileIdPointed: bigint, pubIdPointed: bigint, contentURI: string, referenceModule: string, collectModule: string, collectNFT: string] & {profileIdPointed: bigint, pubIdPointed: bigint, contentURI: string, referenceModule: string, collectModule: string, collectNFT: string})>(
        abi, '0xc736c990'
    ),
    getPubCount: new Func<[profileId: bigint], {profileId: bigint}, bigint>(
        abi, '0x3a15ff07'
    ),
    getPubPointer: new Func<[profileId: bigint, pubId: bigint], {profileId: bigint, pubId: bigint}, [_: bigint, _: bigint]>(
        abi, '0x5ca3eebf'
    ),
    getPubType: new Func<[profileId: bigint, pubId: bigint], {profileId: bigint, pubId: bigint}, number>(
        abi, '0x31fff07c'
    ),
    getReferenceModule: new Func<[profileId: bigint, pubId: bigint], {profileId: bigint, pubId: bigint}, string>(
        abi, '0xb7984c05'
    ),
    getState: new Func<[], {}, number>(
        abi, '0x1865c57d'
    ),
    initialize: new Func<[name: string, symbol: string, newGovernance: string], {name: string, symbol: string, newGovernance: string}, []>(
        abi, '0x077f224a'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    isCollectModuleWhitelisted: new Func<[collectModule: string], {collectModule: string}, boolean>(
        abi, '0xad3e72bf'
    ),
    isFollowModuleWhitelisted: new Func<[followModule: string], {followModule: string}, boolean>(
        abi, '0x1cbb2620'
    ),
    isProfileCreatorWhitelisted: new Func<[profileCreator: string], {profileCreator: string}, boolean>(
        abi, '0xaf05dd22'
    ),
    isReferenceModuleWhitelisted: new Func<[referenceModule: string], {referenceModule: string}, boolean>(
        abi, '0x8e204fb4'
    ),
    mintTimestampOf: new Func<[tokenId: bigint], {tokenId: bigint}, bigint>(
        abi, '0x50ddf35c'
    ),
    mirror: new Func<[vars: ([profileId: bigint, profileIdPointed: bigint, pubIdPointed: bigint, referenceModule: string, referenceModuleData: string] & {profileId: bigint, profileIdPointed: bigint, pubIdPointed: bigint, referenceModule: string, referenceModuleData: string})], {vars: ([profileId: bigint, profileIdPointed: bigint, pubIdPointed: bigint, referenceModule: string, referenceModuleData: string] & {profileId: bigint, profileIdPointed: bigint, pubIdPointed: bigint, referenceModule: string, referenceModuleData: string})}, []>(
        abi, '0x6a4e66d2'
    ),
    mirrorWithSig: new Func<[vars: ([profileId: bigint, profileIdPointed: bigint, pubIdPointed: bigint, referenceModule: string, referenceModuleData: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {profileId: bigint, profileIdPointed: bigint, pubIdPointed: bigint, referenceModule: string, referenceModuleData: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})], {vars: ([profileId: bigint, profileIdPointed: bigint, pubIdPointed: bigint, referenceModule: string, referenceModuleData: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {profileId: bigint, profileIdPointed: bigint, pubIdPointed: bigint, referenceModule: string, referenceModuleData: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})}, []>(
        abi, '0x8f14b45f'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    ownerOf: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0x6352211e'
    ),
    permit: new Func<[spender: string, tokenId: bigint, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})], {spender: string, tokenId: bigint, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})}, []>(
        abi, '0x7ef67f99'
    ),
    permitForAll: new Func<[owner: string, operator: string, approved: boolean, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})], {owner: string, operator: string, approved: boolean, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})}, []>(
        abi, '0x89028a13'
    ),
    post: new Func<[vars: ([profileId: bigint, contentURI: string, collectModule: string, collectModuleData: string, referenceModule: string, referenceModuleData: string] & {profileId: bigint, contentURI: string, collectModule: string, collectModuleData: string, referenceModule: string, referenceModuleData: string})], {vars: ([profileId: bigint, contentURI: string, collectModule: string, collectModuleData: string, referenceModule: string, referenceModuleData: string] & {profileId: bigint, contentURI: string, collectModule: string, collectModuleData: string, referenceModule: string, referenceModuleData: string})}, []>(
        abi, '0x963ff141'
    ),
    postWithSig: new Func<[vars: ([profileId: bigint, contentURI: string, collectModule: string, collectModuleData: string, referenceModule: string, referenceModuleData: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {profileId: bigint, contentURI: string, collectModule: string, collectModuleData: string, referenceModule: string, referenceModuleData: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})], {vars: ([profileId: bigint, contentURI: string, collectModule: string, collectModuleData: string, referenceModule: string, referenceModuleData: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {profileId: bigint, contentURI: string, collectModule: string, collectModuleData: string, referenceModule: string, referenceModuleData: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})}, []>(
        abi, '0x3b508132'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: bigint], {from: string, to: string, tokenId: bigint}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: bigint, _data: string], {from: string, to: string, tokenId: bigint, _data: string}, []>(
        abi, '0xb88d4fde'
    ),
    setApprovalForAll: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    setDispatcher: new Func<[profileId: bigint, dispatcher: string], {profileId: bigint, dispatcher: string}, []>(
        abi, '0xbfd24f47'
    ),
    setDispatcherWithSig: new Func<[vars: ([profileId: bigint, dispatcher: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {profileId: bigint, dispatcher: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})], {vars: ([profileId: bigint, dispatcher: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {profileId: bigint, dispatcher: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})}, []>(
        abi, '0xbfbf0b4b'
    ),
    setEmergencyAdmin: new Func<[newEmergencyAdmin: string], {newEmergencyAdmin: string}, []>(
        abi, '0x35da3394'
    ),
    setFollowModule: new Func<[profileId: bigint, followModule: string, followModuleData: string], {profileId: bigint, followModule: string, followModuleData: string}, []>(
        abi, '0x6dea40b3'
    ),
    setFollowModuleWithSig: new Func<[vars: ([profileId: bigint, followModule: string, followModuleData: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {profileId: bigint, followModule: string, followModuleData: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})], {vars: ([profileId: bigint, followModule: string, followModuleData: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {profileId: bigint, followModule: string, followModuleData: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})}, []>(
        abi, '0x3b28b89f'
    ),
    setFollowNFTURI: new Func<[profileId: bigint, followNFTURI: string], {profileId: bigint, followNFTURI: string}, []>(
        abi, '0xc6b5d06c'
    ),
    setFollowNFTURIWithSig: new Func<[vars: ([profileId: bigint, followNFTURI: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {profileId: bigint, followNFTURI: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})], {vars: ([profileId: bigint, followNFTURI: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {profileId: bigint, followNFTURI: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})}, []>(
        abi, '0xbd12d3f0'
    ),
    setGovernance: new Func<[newGovernance: string], {newGovernance: string}, []>(
        abi, '0xab033ea9'
    ),
    setProfileImageURI: new Func<[profileId: bigint, imageURI: string], {profileId: bigint, imageURI: string}, []>(
        abi, '0x054871b8'
    ),
    setProfileImageURIWithSig: new Func<[vars: ([profileId: bigint, imageURI: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {profileId: bigint, imageURI: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})], {vars: ([profileId: bigint, imageURI: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})] & {profileId: bigint, imageURI: string, sig: ([v: number, r: string, s: string, deadline: bigint] & {v: number, r: string, s: string, deadline: bigint})})}, []>(
        abi, '0x9b84a14c'
    ),
    setState: new Func<[newState: number], {newState: number}, []>(
        abi, '0x56de96db'
    ),
    sigNonces: new Func<[_: string], {}, bigint>(
        abi, '0xf990ccd7'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    tokenByIndex: new Func<[index: bigint], {index: bigint}, bigint>(
        abi, '0x4f6ccce7'
    ),
    tokenDataOf: new Func<[tokenId: bigint], {tokenId: bigint}, ([owner: string, mintTimestamp: bigint] & {owner: string, mintTimestamp: bigint})>(
        abi, '0xc0da9bcd'
    ),
    tokenOfOwnerByIndex: new Func<[owner: string, index: bigint], {owner: string, index: bigint}, bigint>(
        abi, '0x2f745c59'
    ),
    tokenURI: new Func<[tokenId: bigint], {tokenId: bigint}, string>(
        abi, '0xc87b56dd'
    ),
    totalSupply: new Func<[], {}, bigint>(
        abi, '0x18160ddd'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: bigint], {from: string, to: string, tokenId: bigint}, []>(
        abi, '0x23b872dd'
    ),
    whitelistCollectModule: new Func<[collectModule: string, whitelist: boolean], {collectModule: string, whitelist: boolean}, []>(
        abi, '0x31dcebe3'
    ),
    whitelistFollowModule: new Func<[followModule: string, whitelist: boolean], {followModule: string, whitelist: boolean}, []>(
        abi, '0xa6d8e1e4'
    ),
    whitelistProfileCreator: new Func<[profileCreator: string, whitelist: boolean], {profileCreator: string, whitelist: boolean}, []>(
        abi, '0x20905506'
    ),
    whitelistReferenceModule: new Func<[referenceModule: string, whitelist: boolean], {referenceModule: string, whitelist: boolean}, []>(
        abi, '0x4187e4c5'
    ),
}

export class Contract extends ContractBase {

    balanceOf(owner: string): Promise<bigint> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    getApproved(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    getCollectModule(profileId: bigint, pubId: bigint): Promise<string> {
        return this.eth_call(functions.getCollectModule, [profileId, pubId])
    }

    getCollectNFT(profileId: bigint, pubId: bigint): Promise<string> {
        return this.eth_call(functions.getCollectNFT, [profileId, pubId])
    }

    getContentURI(profileId: bigint, pubId: bigint): Promise<string> {
        return this.eth_call(functions.getContentURI, [profileId, pubId])
    }

    getDispatcher(profileId: bigint): Promise<string> {
        return this.eth_call(functions.getDispatcher, [profileId])
    }

    getDomainSeparator(): Promise<string> {
        return this.eth_call(functions.getDomainSeparator, [])
    }

    getFollowModule(profileId: bigint): Promise<string> {
        return this.eth_call(functions.getFollowModule, [profileId])
    }

    getFollowNFT(profileId: bigint): Promise<string> {
        return this.eth_call(functions.getFollowNFT, [profileId])
    }

    getFollowNFTURI(profileId: bigint): Promise<string> {
        return this.eth_call(functions.getFollowNFTURI, [profileId])
    }

    getGovernance(): Promise<string> {
        return this.eth_call(functions.getGovernance, [])
    }

    getHandle(profileId: bigint): Promise<string> {
        return this.eth_call(functions.getHandle, [profileId])
    }

    getProfile(profileId: bigint): Promise<([pubCount: bigint, followModule: string, followNFT: string, handle: string, imageURI: string, followNFTURI: string] & {pubCount: bigint, followModule: string, followNFT: string, handle: string, imageURI: string, followNFTURI: string})> {
        return this.eth_call(functions.getProfile, [profileId])
    }

    getProfileIdByHandle(handle: string): Promise<bigint> {
        return this.eth_call(functions.getProfileIdByHandle, [handle])
    }

    getPub(profileId: bigint, pubId: bigint): Promise<([profileIdPointed: bigint, pubIdPointed: bigint, contentURI: string, referenceModule: string, collectModule: string, collectNFT: string] & {profileIdPointed: bigint, pubIdPointed: bigint, contentURI: string, referenceModule: string, collectModule: string, collectNFT: string})> {
        return this.eth_call(functions.getPub, [profileId, pubId])
    }

    getPubCount(profileId: bigint): Promise<bigint> {
        return this.eth_call(functions.getPubCount, [profileId])
    }

    getPubPointer(profileId: bigint, pubId: bigint): Promise<[_: bigint, _: bigint]> {
        return this.eth_call(functions.getPubPointer, [profileId, pubId])
    }

    getPubType(profileId: bigint, pubId: bigint): Promise<number> {
        return this.eth_call(functions.getPubType, [profileId, pubId])
    }

    getReferenceModule(profileId: bigint, pubId: bigint): Promise<string> {
        return this.eth_call(functions.getReferenceModule, [profileId, pubId])
    }

    getState(): Promise<number> {
        return this.eth_call(functions.getState, [])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    isCollectModuleWhitelisted(collectModule: string): Promise<boolean> {
        return this.eth_call(functions.isCollectModuleWhitelisted, [collectModule])
    }

    isFollowModuleWhitelisted(followModule: string): Promise<boolean> {
        return this.eth_call(functions.isFollowModuleWhitelisted, [followModule])
    }

    isProfileCreatorWhitelisted(profileCreator: string): Promise<boolean> {
        return this.eth_call(functions.isProfileCreatorWhitelisted, [profileCreator])
    }

    isReferenceModuleWhitelisted(referenceModule: string): Promise<boolean> {
        return this.eth_call(functions.isReferenceModuleWhitelisted, [referenceModule])
    }

    mintTimestampOf(tokenId: bigint): Promise<bigint> {
        return this.eth_call(functions.mintTimestampOf, [tokenId])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    ownerOf(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    sigNonces(arg0: string): Promise<bigint> {
        return this.eth_call(functions.sigNonces, [arg0])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    tokenByIndex(index: bigint): Promise<bigint> {
        return this.eth_call(functions.tokenByIndex, [index])
    }

    tokenDataOf(tokenId: bigint): Promise<([owner: string, mintTimestamp: bigint] & {owner: string, mintTimestamp: bigint})> {
        return this.eth_call(functions.tokenDataOf, [tokenId])
    }

    tokenOfOwnerByIndex(owner: string, index: bigint): Promise<bigint> {
        return this.eth_call(functions.tokenOfOwnerByIndex, [owner, index])
    }

    tokenURI(tokenId: bigint): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    totalSupply(): Promise<bigint> {
        return this.eth_call(functions.totalSupply, [])
    }
}
