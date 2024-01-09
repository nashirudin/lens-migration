import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Creator} from "./creator.model"
import {Account} from "./account.model"
import {Comment} from "./comment.model"
import {Post} from "./post.model"
import {Mirror} from "./mirror.model"

@Entity_()
export class Profile {
    constructor(props?: Partial<Profile>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    /**
     * Number of profile
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    profileId!: bigint

    /**
     * Address from the creator profile
     */
    @Index_()
    @ManyToOne_(() => Creator, {nullable: true})
    creator!: Creator

    /**
     * Address from the owner creator profile
     */
    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    owner!: Account

    /**
     * User attempting to follow the profile should be issued a Follow NFT
     */
    @Column_("bytea", {nullable: true})
    followNFT!: Uint8Array | undefined | null

    /**
     * IPFS has the follow data
     */
    @Column_("text", {nullable: true})
    followNFTURI!: string | undefined | null

    /**
     * Nickname of the profile
     */
    @Column_("text", {nullable: true})
    handle!: string | undefined | null

    /**
     * URI image of the profile
     */
    @Column_("text", {nullable: true})
    imageURI!: string | undefined | null

    /**
     * Date created profile
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    createdAt!: bigint | undefined | null

    /**
     * Follow Module Address
     */
    @Column_("bytea", {nullable: true})
    followModule!: Uint8Array | undefined | null

    /**
     * Follow Module Return Data
     */
    @Column_("bytea", {nullable: true})
    followModuleReturnData!: Uint8Array | undefined | null

    /**
     * Dispatcher address allowed to post, comment, mirror, set follow module and change the profile picture on behalf of the owner.
     */
    @Column_("bytea", {nullable: true})
    dispatcher!: Uint8Array | undefined | null

    /**
     * Last Date modify profile
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    lastUpdated!: bigint

    /**
     * Total mirrors
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalMirrors!: bigint

    /**
     * Total posts
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalPosts!: bigint

    /**
     * Total comments
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalComments!: bigint

    /**
     * Total Followers
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalFollowers!: bigint

    /**
     * Total Following From owner Account
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalFollowings!: bigint

    /**
     * List of followers Account
     */
    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    followers!: Account

    /**
     * List of following Profiles
     */
    @Index_()
    @ManyToOne_(() => Profile, {nullable: true})
    followings!: Profile

    /**
     * List of comments
     */
    @OneToMany_(() => Comment, e => e.fromProfile)
    comments!: Comment[]

    /**
     * List of post
     */
    @OneToMany_(() => Post, e => e.fromProfile)
    posts!: Post[]

    /**
     * List of Mirrors
     */
    @OneToMany_(() => Mirror, e => e.fromProfile)
    mirrors!: Mirror[]
}
