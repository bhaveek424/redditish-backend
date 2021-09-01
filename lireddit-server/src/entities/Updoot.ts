import { BaseEntity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";
import { Post } from "./Post";
import { User } from "./User";

// m to n 
// many to many 
// user <-> posts
// user -> updoot <- posts


@Entity() 
export class Updoot extends BaseEntity {
  @Column({type: "int"})
  value: number; 

  @PrimaryColumn()
  userId: number;

  @ManyToOne(() => User, user => user.updoots )
  user: User;
  
  @PrimaryColumn()
  postId: number;

  @ManyToOne(() => Post, (post) => post.updoots, {
    onDelete: "CASCADE",
  })
  post: Post;
}
