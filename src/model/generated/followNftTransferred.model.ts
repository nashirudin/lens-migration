import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class FollowNFTTransferred {
    constructor(props?: Partial<FollowNFTTransferred>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    profileId!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    followNFTID!: bigint | undefined | null

    @Column_("bytea", {nullable: true})
    from!: Uint8Array | undefined | null

    @Column_("bytea", {nullable: true})
    to!: Uint8Array | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    timestamp!: bigint | undefined | null

    @Column_("text", {nullable: true})
    data!: string | undefined | null
}
