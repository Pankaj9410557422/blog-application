import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDateTimeObj } from './dateTimeObj/publish-post.dateTimeObj';

@Injectable()
export class BlogService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) { }

  async getPosts(): Promise<Post[]> {
    const posts = await this.postModel.find().exec();
    return posts;
  }

  async getPost(postID): Promise<Post> {
    const post = await this.postModel.findById(postID).exec();
    return post;
  }

  async addPost(createPostDateTimeObj: CreatePostDateTimeObj): Promise<Post> {
    const newPost = await this.postModel(createPostDateTimeObj);
    return newPost.save();
  }

  async editPost(
    postID,
    createPostDateTimeObj: CreatePostDateTimeObj,
  ): Promise<Post> {
    const editedPost = await this.postModel.findByIdAndUpdate(
      postID,
      createPostDateTimeObj,
      { new: true },
    );
    return editedPost;
  }

  async deletePost(postID): Promise<any> {
    const deletedPost = await this.postModel.findByIdAndRemove(postID);
    return deletedPost;
  }
}
