import {
    BlockHeader,
    DataHandlerContext,
    EvmBatchProcessor,
    EvmBatchProcessorFields,
    Log as _Log,
    Transaction as _Transaction,
  } from '@subsquid/evm-processor'
import {lookupArchive} from '@subsquid/archive-registry'
import { 
    Account, 
    Comment, 
    Creator, 
    Follow,
    FollowNFTTransferred, 
    Mirror, 
    Post, 
    Profile, } from './model' 
import * as LensHub from './abi/LensHub'

export const CONTRACT_ADDRESS = '0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d'.toLowerCase() 


export const processor = new EvmBatchProcessor()
    .setDataSource({
        archive: lookupArchive('polygon'),
        chain: 'https://www.ankr.com/rpc/polygon',
    })
    .setFinalityConfirmation(10)
    .setBlockRange({
        from: 28384641,})
    .setFields({
        log: {
            topics: true,
            data: true,
            transactionHash: true,
          },
          transaction: {
            from: true,
            value: true,
            hash: true,
          },
    })
    .addLog({
        address: [CONTRACT_ADDRESS],
        topic0: [
            LensHub.events.ProfileCreated.topic,
            LensHub.events.FollowNFTURISet.topic,
            LensHub.events.ProfileImageURISet.topic,
            LensHub.events.DispatcherSet.topic,
            LensHub.events.ProfileCreatorWhitelisted.topic,
            LensHub.events.FollowModuleSet.topic,
            LensHub.events.PostCreated.topic,
            LensHub.events.MirrorCreated.topic,
            LensHub.events.CommentCreated.topic,
            LensHub.events.Followed.topic,
            LensHub.events.DefaultProfileSet.topic,
            LensHub.events.FollowNFTTransferred.topic,
        ],



    })

    export type Fields = EvmBatchProcessorFields<typeof processor>;
    export type Block = BlockHeader<Fields>;
    export type Log = _Log<Fields>;
    export type Transaction = _Transaction<Fields>;
    export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;