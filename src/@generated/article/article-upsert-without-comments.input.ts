import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { ArticleUncheckedCreateWithoutCommentsInput } from './article-unchecked-create-without-comments.input';
import { ArticleUncheckedUpdateWithoutCommentsInput } from './article-unchecked-update-without-comments.input';
import { ArticleUpdateWithoutCommentsInput } from './article-update-without-comments.input';

@InputType()
export class ArticleUpsertWithoutCommentsInput {
    @Field(() => ArticleUpdateWithoutCommentsInput, {
        nullable: false,
    })
    update!:
        | ArticleUpdateWithoutCommentsInput
        | ArticleUncheckedUpdateWithoutCommentsInput;

    @Field(() => ArticleCreateWithoutCommentsInput, {
        nullable: false,
    })
    create!:
        | ArticleCreateWithoutCommentsInput
        | ArticleUncheckedCreateWithoutCommentsInput;
}
