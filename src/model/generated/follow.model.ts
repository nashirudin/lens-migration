import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Profile} from "./profile.model"

@Entity_()
export class Follow {
    constructor(props?: Partial<Follow>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    /**
     * Follower Account. 
     */
    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    fromAccount!: Account | undefined | null

    @Column_("text", {nullable: true})
    fromProfileSTR!: string | undefined | null

    /**
     * Array of profiles that are followed
     */
    @Index_()
    @ManyToOne_(() => Profile, {nullable: true})
    toProfile!: Profile

    /**
     * Date from when the follow initiated
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    timestamp!: bigint
}
