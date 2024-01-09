import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Profile} from "./profile.model"

@Entity_()
export class Post {
    constructor(props?: Partial<Post>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    /**
     * Profile that created the post
     */
    @Index_()
    @ManyToOne_(() => Profile, {nullable: true})
    fromProfile!: Profile

    /**
     * Publication Id
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    pubId!: bigint

    @Column_("bytea", {nullable: false})
    referenceModule!: Uint8Array

    @Column_("bytea", {nullable: true})
    referenceModuleReturnData!: Uint8Array | undefined | null

    /**
     * URI of the post content
     */
    @Column_("text", {nullable: false})
    contentURI!: string

    @Column_("bytea", {nullable: false})
    collectModule!: Uint8Array

    @Column_("bytea", {nullable: true})
    collectModuleReturnData!: Uint8Array | undefined | null

    /**
     * Date of creation
     */
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    timestamp!: bigint
}
