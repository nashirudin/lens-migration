import {TypeormDatabase} from '@subsquid/typeorm-store'
import {CONTRACT_ADDRESS, processor} from './processor'
import { 
    Account, 
    Comment, 
    Creator, 
    Follow, 
    FollowNFTTransferred,
    Mirror, 
    Post, 
    Profile, 
     } from './model' 

import * as LensHub from './abi/LensHub'

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    for (let c of ctx.blocks) {
        for (let log of c.logs) {
            if (log.address == CONTRACT_ADDRESS) {
            if (log.topics[0] ==  LensHub.events.ProfileCreated.topic) {
            let {profileId, creator, to, handle, imageURI, followModule, 
                followModuleReturnData, followNFTURI, timestamp} = LensHub.events.ProfileCreated.decode(log)
            
            if (log.topics[0] == LensHub.events.FollowNFTURISet.topic ) {
            let {profileId, followNFTURI, timestamp} = LensHub.events.FollowNFTURISet.decode(log)
                
            if (log.topics[0] == LensHub.events.ProfileImageURISet.topic ) {
            let {profileId, imageURI, timestamp} = LensHub.events.ProfileImageURISet.decode(log)

            if (log.topics[0] == LensHub.events.DispatcherSet.topic ) {
            let {profileId, dispatcher, timestamp} = LensHub.events.DispatcherSet.decode(log)

            if (log.topics[0] == LensHub.events.ProfileCreatorWhitelisted.topic ) {
            let {profileCreator, whitelisted, timestamp} = LensHub.events.ProfileCreatorWhitelisted.decode(log)

            if (log.topics[0] == LensHub.events.FollowModuleSet.topic ) {
            let {profileId, followModule, followModuleReturnData, timestamp} = LensHub.events.FollowModuleSet.decode(log)
            
            if (log.topics[0] == LensHub.events.PostCreated.topic ) {
            let {profileId, pubId, contentURI, collectModule, collectModuleReturnData, referenceModule, referenceModuleReturnData, timestamp} = LensHub.events.PostCreated.decode(log)

            if (log.topics[0] == LensHub.events.MirrorCreated.topic ) {
            let {profileId, pubId, profileIdPointed, pubIdPointed, referenceModuleData, referenceModule, referenceModuleReturnData, timestamp} = LensHub.events.MirrorCreated.decode(log)

            if (log.topics[0] == LensHub.events.CommentCreated.topic ) {
            let {profileId, pubId, contentURI, profileIdPointed, pubIdPointed, referenceModuleData, collectModule, collectModuleReturnData, referenceModule, referenceModuleReturnData, timestamp} = LensHub.events.CommentCreated.decode(log)
            
            if (log.topics[0] == LensHub.events.Followed.topic ) {
            let {follower, profileIds, followModuleDatas, timestamp} = LensHub.events.Followed.decode(log)

            if (log.topics[0] == LensHub.events.DefaultProfileSet.topic ) {
            let {wallet, profileId, timestamp} = LensHub.events.DefaultProfileSet.decode(log)

            if (log.topics[0] == LensHub.events.FollowNFTTransferred.topic ) {
            let {profileId, followNFTId, from, to, timestamp} = LensHub.events.FollowNFTTransferred.decode(log)

                }}
            }}
        }
    }}
}}
}}
}}
}}
const startBlock = ctx.blocks.at(0)?.header.height;
const endBlock = ctx.blocks.at(-1)?.header.height;
ctx.log.info(`running from ${startBlock} to ${endBlock}`)
})
