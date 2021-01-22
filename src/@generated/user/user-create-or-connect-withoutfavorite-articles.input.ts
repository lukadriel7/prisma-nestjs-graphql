import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFavoriteArticlesInput } from './user-create-without-favorite-articles.input';
import { UserUncheckedCreateWithoutFavoriteArticlesInput } from './user-unchecked-create-without-favorite-articles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOrConnectWithoutfavoriteArticlesInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: false,
    })
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFavoriteArticlesInput, {
        nullable: false,
    })
    create!:
        | UserCreateWithoutFavoriteArticlesInput
        | UserUncheckedCreateWithoutFavoriteArticlesInput;
}
