import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Profile} from "./profile.model"

@Entity_()
export class Account {
    constructor(props?: Partial<Account>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    /**
     * Address
     */
    @Column_("bytea", {nullable: false})
    address!: Uint8Array

    /**
     * Default Profile
     */
    @Index_()
    @ManyToOne_(() => Profile, {nullable: true})
    defaultProfile!: Profile | undefined | null

    /**
     * List of Id profiles(String)
     */
    @Column_("text", {array: true, nullable: false})
    profilesIds!: (string)[]

    /**
     * List of Profiles that own this account
     */
    @OneToMany_(() => Profile, e => e.owner)
    profiles!: Profile[]

    /**
     * List of Followings Profiles
     */
    @Index_()
    @ManyToOne_(() => Profile, {nullable: true})
    following!: Profile

    /**
     * List of Following profiles
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalFollowings!: bigint
}
