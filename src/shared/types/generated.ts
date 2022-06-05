import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** columns and relationships of "Author" */
export type Author = {
  __typename?: 'Author';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "Author" */
export type Author_Aggregate = {
  __typename?: 'Author_aggregate';
  aggregate?: Maybe<Author_Aggregate_Fields>;
  nodes: Array<Author>;
};

/** aggregate fields of "Author" */
export type Author_Aggregate_Fields = {
  __typename?: 'Author_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Author_Max_Fields>;
  min?: Maybe<Author_Min_Fields>;
};


/** aggregate fields of "Author" */
export type Author_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Author_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Author". All fields are combined with a logical 'AND'. */
export type Author_Bool_Exp = {
  _and?: InputMaybe<Array<Author_Bool_Exp>>;
  _not?: InputMaybe<Author_Bool_Exp>;
  _or?: InputMaybe<Array<Author_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "Author" */
export enum Author_Constraint {
  /** unique or primary key constraint */
  AuthorPkey = 'Author_pkey'
}

/** input type for inserting data into table "Author" */
export type Author_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Author_Max_Fields = {
  __typename?: 'Author_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Author_Min_Fields = {
  __typename?: 'Author_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "Author" */
export type Author_Mutation_Response = {
  __typename?: 'Author_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Author>;
};

/** on_conflict condition type for table "Author" */
export type Author_On_Conflict = {
  constraint: Author_Constraint;
  update_columns?: Array<Author_Update_Column>;
  where?: InputMaybe<Author_Bool_Exp>;
};

/** Ordering options when selecting data from "Author". */
export type Author_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Author */
export type Author_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Author" */
export enum Author_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "Author" */
export type Author_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "Author" */
export enum Author_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "Book" */
export type Book = {
  __typename?: 'Book';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "Book" */
export type Book_Aggregate = {
  __typename?: 'Book_aggregate';
  aggregate?: Maybe<Book_Aggregate_Fields>;
  nodes: Array<Book>;
};

/** aggregate fields of "Book" */
export type Book_Aggregate_Fields = {
  __typename?: 'Book_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Book_Max_Fields>;
  min?: Maybe<Book_Min_Fields>;
};


/** aggregate fields of "Book" */
export type Book_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Book_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Book". All fields are combined with a logical 'AND'. */
export type Book_Bool_Exp = {
  _and?: InputMaybe<Array<Book_Bool_Exp>>;
  _not?: InputMaybe<Book_Bool_Exp>;
  _or?: InputMaybe<Array<Book_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "Book" */
export enum Book_Constraint {
  /** unique or primary key constraint */
  BookPkey = 'Book_pkey'
}

/** input type for inserting data into table "Book" */
export type Book_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Book_Max_Fields = {
  __typename?: 'Book_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Book_Min_Fields = {
  __typename?: 'Book_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "Book" */
export type Book_Mutation_Response = {
  __typename?: 'Book_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Book>;
};

/** on_conflict condition type for table "Book" */
export type Book_On_Conflict = {
  constraint: Book_Constraint;
  update_columns?: Array<Book_Update_Column>;
  where?: InputMaybe<Book_Bool_Exp>;
};

/** Ordering options when selecting data from "Book". */
export type Book_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Book */
export type Book_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Book" */
export enum Book_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "Book" */
export type Book_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "Book" */
export enum Book_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "Tag" */
export type Tag = {
  __typename?: 'Tag';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "Tag" */
export type Tag_Aggregate = {
  __typename?: 'Tag_aggregate';
  aggregate?: Maybe<Tag_Aggregate_Fields>;
  nodes: Array<Tag>;
};

/** aggregate fields of "Tag" */
export type Tag_Aggregate_Fields = {
  __typename?: 'Tag_aggregate_fields';
  avg?: Maybe<Tag_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Tag_Max_Fields>;
  min?: Maybe<Tag_Min_Fields>;
  stddev?: Maybe<Tag_Stddev_Fields>;
  stddev_pop?: Maybe<Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tag_Stddev_Samp_Fields>;
  sum?: Maybe<Tag_Sum_Fields>;
  var_pop?: Maybe<Tag_Var_Pop_Fields>;
  var_samp?: Maybe<Tag_Var_Samp_Fields>;
  variance?: Maybe<Tag_Variance_Fields>;
};


/** aggregate fields of "Tag" */
export type Tag_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Tag_Avg_Fields = {
  __typename?: 'Tag_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "Tag". All fields are combined with a logical 'AND'. */
export type Tag_Bool_Exp = {
  _and?: InputMaybe<Array<Tag_Bool_Exp>>;
  _not?: InputMaybe<Tag_Bool_Exp>;
  _or?: InputMaybe<Array<Tag_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "Tag" */
export enum Tag_Constraint {
  /** unique or primary key constraint */
  TagPkey = 'Tag_pkey'
}

/** input type for incrementing numeric columns in table "Tag" */
export type Tag_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Tag" */
export type Tag_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Tag_Max_Fields = {
  __typename?: 'Tag_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Tag_Min_Fields = {
  __typename?: 'Tag_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "Tag" */
export type Tag_Mutation_Response = {
  __typename?: 'Tag_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tag>;
};

/** on_conflict condition type for table "Tag" */
export type Tag_On_Conflict = {
  constraint: Tag_Constraint;
  update_columns?: Array<Tag_Update_Column>;
  where?: InputMaybe<Tag_Bool_Exp>;
};

/** Ordering options when selecting data from "Tag". */
export type Tag_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Tag */
export type Tag_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Tag" */
export enum Tag_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "Tag" */
export type Tag_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Tag_Stddev_Fields = {
  __typename?: 'Tag_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Tag_Stddev_Pop_Fields = {
  __typename?: 'Tag_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Tag_Stddev_Samp_Fields = {
  __typename?: 'Tag_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Tag_Sum_Fields = {
  __typename?: 'Tag_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "Tag" */
export enum Tag_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Tag_Var_Pop_Fields = {
  __typename?: 'Tag_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Tag_Var_Samp_Fields = {
  __typename?: 'Tag_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Tag_Variance_Fields = {
  __typename?: 'Tag_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "_manytomany.article" */
export type _Manytomany_Article = {
  __typename?: '_manytomany_article';
  /** An array relationship */
  article_tags: Array<_Manytomany_Article_Tag>;
  /** An aggregate relationship */
  article_tags_aggregate: _Manytomany_Article_Tag_Aggregate;
  author_name: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};


/** columns and relationships of "_manytomany.article" */
export type _Manytomany_ArticleArticle_TagsArgs = {
  distinct_on?: InputMaybe<Array<_Manytomany_Article_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Manytomany_Article_Tag_Order_By>>;
  where?: InputMaybe<_Manytomany_Article_Tag_Bool_Exp>;
};


/** columns and relationships of "_manytomany.article" */
export type _Manytomany_ArticleArticle_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Manytomany_Article_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Manytomany_Article_Tag_Order_By>>;
  where?: InputMaybe<_Manytomany_Article_Tag_Bool_Exp>;
};

/** aggregated selection of "_manytomany.article" */
export type _Manytomany_Article_Aggregate = {
  __typename?: '_manytomany_article_aggregate';
  aggregate?: Maybe<_Manytomany_Article_Aggregate_Fields>;
  nodes: Array<_Manytomany_Article>;
};

/** aggregate fields of "_manytomany.article" */
export type _Manytomany_Article_Aggregate_Fields = {
  __typename?: '_manytomany_article_aggregate_fields';
  avg?: Maybe<_Manytomany_Article_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_Manytomany_Article_Max_Fields>;
  min?: Maybe<_Manytomany_Article_Min_Fields>;
  stddev?: Maybe<_Manytomany_Article_Stddev_Fields>;
  stddev_pop?: Maybe<_Manytomany_Article_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Manytomany_Article_Stddev_Samp_Fields>;
  sum?: Maybe<_Manytomany_Article_Sum_Fields>;
  var_pop?: Maybe<_Manytomany_Article_Var_Pop_Fields>;
  var_samp?: Maybe<_Manytomany_Article_Var_Samp_Fields>;
  variance?: Maybe<_Manytomany_Article_Variance_Fields>;
};


/** aggregate fields of "_manytomany.article" */
export type _Manytomany_Article_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_Manytomany_Article_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type _Manytomany_Article_Avg_Fields = {
  __typename?: '_manytomany_article_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "_manytomany.article". All fields are combined with a logical 'AND'. */
export type _Manytomany_Article_Bool_Exp = {
  _and?: InputMaybe<Array<_Manytomany_Article_Bool_Exp>>;
  _not?: InputMaybe<_Manytomany_Article_Bool_Exp>;
  _or?: InputMaybe<Array<_Manytomany_Article_Bool_Exp>>;
  article_tags?: InputMaybe<_Manytomany_Article_Tag_Bool_Exp>;
  author_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "_manytomany.article" */
export enum _Manytomany_Article_Constraint {
  /** unique or primary key constraint */
  ArticlePkey = 'article_pkey'
}

/** input type for incrementing numeric columns in table "_manytomany.article" */
export type _Manytomany_Article_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "_manytomany.article" */
export type _Manytomany_Article_Insert_Input = {
  article_tags?: InputMaybe<_Manytomany_Article_Tag_Arr_Rel_Insert_Input>;
  author_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type _Manytomany_Article_Max_Fields = {
  __typename?: '_manytomany_article_max_fields';
  author_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type _Manytomany_Article_Min_Fields = {
  __typename?: '_manytomany_article_min_fields';
  author_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "_manytomany.article" */
export type _Manytomany_Article_Mutation_Response = {
  __typename?: '_manytomany_article_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Manytomany_Article>;
};

/** input type for inserting object relation for remote table "_manytomany.article" */
export type _Manytomany_Article_Obj_Rel_Insert_Input = {
  data: _Manytomany_Article_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<_Manytomany_Article_On_Conflict>;
};

/** on_conflict condition type for table "_manytomany.article" */
export type _Manytomany_Article_On_Conflict = {
  constraint: _Manytomany_Article_Constraint;
  update_columns?: Array<_Manytomany_Article_Update_Column>;
  where?: InputMaybe<_Manytomany_Article_Bool_Exp>;
};

/** Ordering options when selecting data from "_manytomany.article". */
export type _Manytomany_Article_Order_By = {
  article_tags_aggregate?: InputMaybe<_Manytomany_Article_Tag_Aggregate_Order_By>;
  author_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _manytomany_article */
export type _Manytomany_Article_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "_manytomany.article" */
export enum _Manytomany_Article_Select_Column {
  /** column name */
  AuthorName = 'author_name',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "_manytomany.article" */
export type _Manytomany_Article_Set_Input = {
  author_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type _Manytomany_Article_Stddev_Fields = {
  __typename?: '_manytomany_article_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type _Manytomany_Article_Stddev_Pop_Fields = {
  __typename?: '_manytomany_article_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type _Manytomany_Article_Stddev_Samp_Fields = {
  __typename?: '_manytomany_article_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type _Manytomany_Article_Sum_Fields = {
  __typename?: '_manytomany_article_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "_manytomany.article_tag" */
export type _Manytomany_Article_Tag = {
  __typename?: '_manytomany_article_tag';
  /** An object relationship */
  article: _Manytomany_Article;
  article_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  tag: _Manytomany_Tag;
  tag_id: Scalars['Int'];
};

/** aggregated selection of "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Aggregate = {
  __typename?: '_manytomany_article_tag_aggregate';
  aggregate?: Maybe<_Manytomany_Article_Tag_Aggregate_Fields>;
  nodes: Array<_Manytomany_Article_Tag>;
};

/** aggregate fields of "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Aggregate_Fields = {
  __typename?: '_manytomany_article_tag_aggregate_fields';
  avg?: Maybe<_Manytomany_Article_Tag_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_Manytomany_Article_Tag_Max_Fields>;
  min?: Maybe<_Manytomany_Article_Tag_Min_Fields>;
  stddev?: Maybe<_Manytomany_Article_Tag_Stddev_Fields>;
  stddev_pop?: Maybe<_Manytomany_Article_Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Manytomany_Article_Tag_Stddev_Samp_Fields>;
  sum?: Maybe<_Manytomany_Article_Tag_Sum_Fields>;
  var_pop?: Maybe<_Manytomany_Article_Tag_Var_Pop_Fields>;
  var_samp?: Maybe<_Manytomany_Article_Tag_Var_Samp_Fields>;
  variance?: Maybe<_Manytomany_Article_Tag_Variance_Fields>;
};


/** aggregate fields of "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_Manytomany_Article_Tag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Aggregate_Order_By = {
  avg?: InputMaybe<_Manytomany_Article_Tag_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<_Manytomany_Article_Tag_Max_Order_By>;
  min?: InputMaybe<_Manytomany_Article_Tag_Min_Order_By>;
  stddev?: InputMaybe<_Manytomany_Article_Tag_Stddev_Order_By>;
  stddev_pop?: InputMaybe<_Manytomany_Article_Tag_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<_Manytomany_Article_Tag_Stddev_Samp_Order_By>;
  sum?: InputMaybe<_Manytomany_Article_Tag_Sum_Order_By>;
  var_pop?: InputMaybe<_Manytomany_Article_Tag_Var_Pop_Order_By>;
  var_samp?: InputMaybe<_Manytomany_Article_Tag_Var_Samp_Order_By>;
  variance?: InputMaybe<_Manytomany_Article_Tag_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Arr_Rel_Insert_Input = {
  data: Array<_Manytomany_Article_Tag_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<_Manytomany_Article_Tag_On_Conflict>;
};

/** aggregate avg on columns */
export type _Manytomany_Article_Tag_Avg_Fields = {
  __typename?: '_manytomany_article_tag_avg_fields';
  article_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Avg_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "_manytomany.article_tag". All fields are combined with a logical 'AND'. */
export type _Manytomany_Article_Tag_Bool_Exp = {
  _and?: InputMaybe<Array<_Manytomany_Article_Tag_Bool_Exp>>;
  _not?: InputMaybe<_Manytomany_Article_Tag_Bool_Exp>;
  _or?: InputMaybe<Array<_Manytomany_Article_Tag_Bool_Exp>>;
  article?: InputMaybe<_Manytomany_Article_Bool_Exp>;
  article_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  tag?: InputMaybe<_Manytomany_Tag_Bool_Exp>;
  tag_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "_manytomany.article_tag" */
export enum _Manytomany_Article_Tag_Constraint {
  /** unique or primary key constraint */
  ArticleTagPkey = 'article_tag_pkey'
}

/** input type for incrementing numeric columns in table "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Inc_Input = {
  article_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  tag_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Insert_Input = {
  article?: InputMaybe<_Manytomany_Article_Obj_Rel_Insert_Input>;
  article_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  tag?: InputMaybe<_Manytomany_Tag_Obj_Rel_Insert_Input>;
  tag_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type _Manytomany_Article_Tag_Max_Fields = {
  __typename?: '_manytomany_article_tag_max_fields';
  article_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Max_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type _Manytomany_Article_Tag_Min_Fields = {
  __typename?: '_manytomany_article_tag_min_fields';
  article_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Min_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Mutation_Response = {
  __typename?: '_manytomany_article_tag_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Manytomany_Article_Tag>;
};

/** on_conflict condition type for table "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_On_Conflict = {
  constraint: _Manytomany_Article_Tag_Constraint;
  update_columns?: Array<_Manytomany_Article_Tag_Update_Column>;
  where?: InputMaybe<_Manytomany_Article_Tag_Bool_Exp>;
};

/** Ordering options when selecting data from "_manytomany.article_tag". */
export type _Manytomany_Article_Tag_Order_By = {
  article?: InputMaybe<_Manytomany_Article_Order_By>;
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag?: InputMaybe<_Manytomany_Tag_Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _manytomany_article_tag */
export type _Manytomany_Article_Tag_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "_manytomany.article_tag" */
export enum _Manytomany_Article_Tag_Select_Column {
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  Id = 'id',
  /** column name */
  TagId = 'tag_id'
}

/** input type for updating data in table "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Set_Input = {
  article_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  tag_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type _Manytomany_Article_Tag_Stddev_Fields = {
  __typename?: '_manytomany_article_tag_stddev_fields';
  article_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Stddev_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type _Manytomany_Article_Tag_Stddev_Pop_Fields = {
  __typename?: '_manytomany_article_tag_stddev_pop_fields';
  article_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Stddev_Pop_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type _Manytomany_Article_Tag_Stddev_Samp_Fields = {
  __typename?: '_manytomany_article_tag_stddev_samp_fields';
  article_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Stddev_Samp_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type _Manytomany_Article_Tag_Sum_Fields = {
  __typename?: '_manytomany_article_tag_sum_fields';
  article_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tag_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Sum_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** update columns of table "_manytomany.article_tag" */
export enum _Manytomany_Article_Tag_Update_Column {
  /** column name */
  ArticleId = 'article_id',
  /** column name */
  Id = 'id',
  /** column name */
  TagId = 'tag_id'
}

/** aggregate var_pop on columns */
export type _Manytomany_Article_Tag_Var_Pop_Fields = {
  __typename?: '_manytomany_article_tag_var_pop_fields';
  article_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Var_Pop_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type _Manytomany_Article_Tag_Var_Samp_Fields = {
  __typename?: '_manytomany_article_tag_var_samp_fields';
  article_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Var_Samp_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type _Manytomany_Article_Tag_Variance_Fields = {
  __typename?: '_manytomany_article_tag_variance_fields';
  article_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tag_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "_manytomany.article_tag" */
export type _Manytomany_Article_Tag_Variance_Order_By = {
  article_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  tag_id?: InputMaybe<Order_By>;
};

/** update columns of table "_manytomany.article" */
export enum _Manytomany_Article_Update_Column {
  /** column name */
  AuthorName = 'author_name',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type _Manytomany_Article_Var_Pop_Fields = {
  __typename?: '_manytomany_article_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type _Manytomany_Article_Var_Samp_Fields = {
  __typename?: '_manytomany_article_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type _Manytomany_Article_Variance_Fields = {
  __typename?: '_manytomany_article_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "_manytomany.tag" */
export type _Manytomany_Tag = {
  __typename?: '_manytomany_tag';
  /** An array relationship */
  article_tags: Array<_Manytomany_Article_Tag>;
  /** An aggregate relationship */
  article_tags_aggregate: _Manytomany_Article_Tag_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "_manytomany.tag" */
export type _Manytomany_TagArticle_TagsArgs = {
  distinct_on?: InputMaybe<Array<_Manytomany_Article_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Manytomany_Article_Tag_Order_By>>;
  where?: InputMaybe<_Manytomany_Article_Tag_Bool_Exp>;
};


/** columns and relationships of "_manytomany.tag" */
export type _Manytomany_TagArticle_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Manytomany_Article_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Manytomany_Article_Tag_Order_By>>;
  where?: InputMaybe<_Manytomany_Article_Tag_Bool_Exp>;
};

/** aggregated selection of "_manytomany.tag" */
export type _Manytomany_Tag_Aggregate = {
  __typename?: '_manytomany_tag_aggregate';
  aggregate?: Maybe<_Manytomany_Tag_Aggregate_Fields>;
  nodes: Array<_Manytomany_Tag>;
};

/** aggregate fields of "_manytomany.tag" */
export type _Manytomany_Tag_Aggregate_Fields = {
  __typename?: '_manytomany_tag_aggregate_fields';
  avg?: Maybe<_Manytomany_Tag_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_Manytomany_Tag_Max_Fields>;
  min?: Maybe<_Manytomany_Tag_Min_Fields>;
  stddev?: Maybe<_Manytomany_Tag_Stddev_Fields>;
  stddev_pop?: Maybe<_Manytomany_Tag_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Manytomany_Tag_Stddev_Samp_Fields>;
  sum?: Maybe<_Manytomany_Tag_Sum_Fields>;
  var_pop?: Maybe<_Manytomany_Tag_Var_Pop_Fields>;
  var_samp?: Maybe<_Manytomany_Tag_Var_Samp_Fields>;
  variance?: Maybe<_Manytomany_Tag_Variance_Fields>;
};


/** aggregate fields of "_manytomany.tag" */
export type _Manytomany_Tag_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_Manytomany_Tag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type _Manytomany_Tag_Avg_Fields = {
  __typename?: '_manytomany_tag_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "_manytomany.tag". All fields are combined with a logical 'AND'. */
export type _Manytomany_Tag_Bool_Exp = {
  _and?: InputMaybe<Array<_Manytomany_Tag_Bool_Exp>>;
  _not?: InputMaybe<_Manytomany_Tag_Bool_Exp>;
  _or?: InputMaybe<Array<_Manytomany_Tag_Bool_Exp>>;
  article_tags?: InputMaybe<_Manytomany_Article_Tag_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "_manytomany.tag" */
export enum _Manytomany_Tag_Constraint {
  /** unique or primary key constraint */
  TagPkey = 'tag_pkey'
}

/** input type for incrementing numeric columns in table "_manytomany.tag" */
export type _Manytomany_Tag_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "_manytomany.tag" */
export type _Manytomany_Tag_Insert_Input = {
  article_tags?: InputMaybe<_Manytomany_Article_Tag_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type _Manytomany_Tag_Max_Fields = {
  __typename?: '_manytomany_tag_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type _Manytomany_Tag_Min_Fields = {
  __typename?: '_manytomany_tag_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "_manytomany.tag" */
export type _Manytomany_Tag_Mutation_Response = {
  __typename?: '_manytomany_tag_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Manytomany_Tag>;
};

/** input type for inserting object relation for remote table "_manytomany.tag" */
export type _Manytomany_Tag_Obj_Rel_Insert_Input = {
  data: _Manytomany_Tag_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<_Manytomany_Tag_On_Conflict>;
};

/** on_conflict condition type for table "_manytomany.tag" */
export type _Manytomany_Tag_On_Conflict = {
  constraint: _Manytomany_Tag_Constraint;
  update_columns?: Array<_Manytomany_Tag_Update_Column>;
  where?: InputMaybe<_Manytomany_Tag_Bool_Exp>;
};

/** Ordering options when selecting data from "_manytomany.tag". */
export type _Manytomany_Tag_Order_By = {
  article_tags_aggregate?: InputMaybe<_Manytomany_Article_Tag_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _manytomany_tag */
export type _Manytomany_Tag_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "_manytomany.tag" */
export enum _Manytomany_Tag_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "_manytomany.tag" */
export type _Manytomany_Tag_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type _Manytomany_Tag_Stddev_Fields = {
  __typename?: '_manytomany_tag_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type _Manytomany_Tag_Stddev_Pop_Fields = {
  __typename?: '_manytomany_tag_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type _Manytomany_Tag_Stddev_Samp_Fields = {
  __typename?: '_manytomany_tag_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type _Manytomany_Tag_Sum_Fields = {
  __typename?: '_manytomany_tag_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "_manytomany.tag" */
export enum _Manytomany_Tag_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type _Manytomany_Tag_Var_Pop_Fields = {
  __typename?: '_manytomany_tag_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type _Manytomany_Tag_Var_Samp_Fields = {
  __typename?: '_manytomany_tag_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type _Manytomany_Tag_Variance_Fields = {
  __typename?: '_manytomany_tag_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Author" */
  delete_Author?: Maybe<Author_Mutation_Response>;
  /** delete single row from the table: "Author" */
  delete_Author_by_pk?: Maybe<Author>;
  /** delete data from the table: "Book" */
  delete_Book?: Maybe<Book_Mutation_Response>;
  /** delete single row from the table: "Book" */
  delete_Book_by_pk?: Maybe<Book>;
  /** delete data from the table: "Tag" */
  delete_Tag?: Maybe<Tag_Mutation_Response>;
  /** delete single row from the table: "Tag" */
  delete_Tag_by_pk?: Maybe<Tag>;
  /** delete data from the table: "_manytomany.article" */
  delete__manytomany_article?: Maybe<_Manytomany_Article_Mutation_Response>;
  /** delete single row from the table: "_manytomany.article" */
  delete__manytomany_article_by_pk?: Maybe<_Manytomany_Article>;
  /** delete data from the table: "_manytomany.article_tag" */
  delete__manytomany_article_tag?: Maybe<_Manytomany_Article_Tag_Mutation_Response>;
  /** delete single row from the table: "_manytomany.article_tag" */
  delete__manytomany_article_tag_by_pk?: Maybe<_Manytomany_Article_Tag>;
  /** delete data from the table: "_manytomany.tag" */
  delete__manytomany_tag?: Maybe<_Manytomany_Tag_Mutation_Response>;
  /** delete single row from the table: "_manytomany.tag" */
  delete__manytomany_tag_by_pk?: Maybe<_Manytomany_Tag>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "Author" */
  insert_Author?: Maybe<Author_Mutation_Response>;
  /** insert a single row into the table: "Author" */
  insert_Author_one?: Maybe<Author>;
  /** insert data into the table: "Book" */
  insert_Book?: Maybe<Book_Mutation_Response>;
  /** insert a single row into the table: "Book" */
  insert_Book_one?: Maybe<Book>;
  /** insert data into the table: "Tag" */
  insert_Tag?: Maybe<Tag_Mutation_Response>;
  /** insert a single row into the table: "Tag" */
  insert_Tag_one?: Maybe<Tag>;
  /** insert data into the table: "_manytomany.article" */
  insert__manytomany_article?: Maybe<_Manytomany_Article_Mutation_Response>;
  /** insert a single row into the table: "_manytomany.article" */
  insert__manytomany_article_one?: Maybe<_Manytomany_Article>;
  /** insert data into the table: "_manytomany.article_tag" */
  insert__manytomany_article_tag?: Maybe<_Manytomany_Article_Tag_Mutation_Response>;
  /** insert a single row into the table: "_manytomany.article_tag" */
  insert__manytomany_article_tag_one?: Maybe<_Manytomany_Article_Tag>;
  /** insert data into the table: "_manytomany.tag" */
  insert__manytomany_tag?: Maybe<_Manytomany_Tag_Mutation_Response>;
  /** insert a single row into the table: "_manytomany.tag" */
  insert__manytomany_tag_one?: Maybe<_Manytomany_Tag>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "Author" */
  update_Author?: Maybe<Author_Mutation_Response>;
  /** update single row of the table: "Author" */
  update_Author_by_pk?: Maybe<Author>;
  /** update data of the table: "Book" */
  update_Book?: Maybe<Book_Mutation_Response>;
  /** update single row of the table: "Book" */
  update_Book_by_pk?: Maybe<Book>;
  /** update data of the table: "Tag" */
  update_Tag?: Maybe<Tag_Mutation_Response>;
  /** update single row of the table: "Tag" */
  update_Tag_by_pk?: Maybe<Tag>;
  /** update data of the table: "_manytomany.article" */
  update__manytomany_article?: Maybe<_Manytomany_Article_Mutation_Response>;
  /** update single row of the table: "_manytomany.article" */
  update__manytomany_article_by_pk?: Maybe<_Manytomany_Article>;
  /** update data of the table: "_manytomany.article_tag" */
  update__manytomany_article_tag?: Maybe<_Manytomany_Article_Tag_Mutation_Response>;
  /** update single row of the table: "_manytomany.article_tag" */
  update__manytomany_article_tag_by_pk?: Maybe<_Manytomany_Article_Tag>;
  /** update data of the table: "_manytomany.tag" */
  update__manytomany_tag?: Maybe<_Manytomany_Tag_Mutation_Response>;
  /** update single row of the table: "_manytomany.tag" */
  update__manytomany_tag_by_pk?: Maybe<_Manytomany_Tag>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_AuthorArgs = {
  where: Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Author_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_BookArgs = {
  where: Book_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Book_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TagArgs = {
  where: Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete__Manytomany_ArticleArgs = {
  where: _Manytomany_Article_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Manytomany_Article_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete__Manytomany_Article_TagArgs = {
  where: _Manytomany_Article_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Manytomany_Article_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete__Manytomany_TagArgs = {
  where: _Manytomany_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Manytomany_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  email: Scalars['String'];
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_AuthorArgs = {
  objects: Array<Author_Insert_Input>;
  on_conflict?: InputMaybe<Author_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Author_OneArgs = {
  object: Author_Insert_Input;
  on_conflict?: InputMaybe<Author_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BookArgs = {
  objects: Array<Book_Insert_Input>;
  on_conflict?: InputMaybe<Book_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Book_OneArgs = {
  object: Book_Insert_Input;
  on_conflict?: InputMaybe<Book_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TagArgs = {
  objects: Array<Tag_Insert_Input>;
  on_conflict?: InputMaybe<Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tag_OneArgs = {
  object: Tag_Insert_Input;
  on_conflict?: InputMaybe<Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Manytomany_ArticleArgs = {
  objects: Array<_Manytomany_Article_Insert_Input>;
  on_conflict?: InputMaybe<_Manytomany_Article_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Manytomany_Article_OneArgs = {
  object: _Manytomany_Article_Insert_Input;
  on_conflict?: InputMaybe<_Manytomany_Article_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Manytomany_Article_TagArgs = {
  objects: Array<_Manytomany_Article_Tag_Insert_Input>;
  on_conflict?: InputMaybe<_Manytomany_Article_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Manytomany_Article_Tag_OneArgs = {
  object: _Manytomany_Article_Tag_Insert_Input;
  on_conflict?: InputMaybe<_Manytomany_Article_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Manytomany_TagArgs = {
  objects: Array<_Manytomany_Tag_Insert_Input>;
  on_conflict?: InputMaybe<_Manytomany_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Manytomany_Tag_OneArgs = {
  object: _Manytomany_Tag_Insert_Input;
  on_conflict?: InputMaybe<_Manytomany_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthorArgs = {
  _set?: InputMaybe<Author_Set_Input>;
  where: Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Author_By_PkArgs = {
  _set?: InputMaybe<Author_Set_Input>;
  pk_columns: Author_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_BookArgs = {
  _set?: InputMaybe<Book_Set_Input>;
  where: Book_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Book_By_PkArgs = {
  _set?: InputMaybe<Book_Set_Input>;
  pk_columns: Book_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TagArgs = {
  _inc?: InputMaybe<Tag_Inc_Input>;
  _set?: InputMaybe<Tag_Set_Input>;
  where: Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tag_By_PkArgs = {
  _inc?: InputMaybe<Tag_Inc_Input>;
  _set?: InputMaybe<Tag_Set_Input>;
  pk_columns: Tag_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Manytomany_ArticleArgs = {
  _inc?: InputMaybe<_Manytomany_Article_Inc_Input>;
  _set?: InputMaybe<_Manytomany_Article_Set_Input>;
  where: _Manytomany_Article_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Manytomany_Article_By_PkArgs = {
  _inc?: InputMaybe<_Manytomany_Article_Inc_Input>;
  _set?: InputMaybe<_Manytomany_Article_Set_Input>;
  pk_columns: _Manytomany_Article_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Manytomany_Article_TagArgs = {
  _inc?: InputMaybe<_Manytomany_Article_Tag_Inc_Input>;
  _set?: InputMaybe<_Manytomany_Article_Tag_Set_Input>;
  where: _Manytomany_Article_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Manytomany_Article_Tag_By_PkArgs = {
  _inc?: InputMaybe<_Manytomany_Article_Tag_Inc_Input>;
  _set?: InputMaybe<_Manytomany_Article_Tag_Set_Input>;
  pk_columns: _Manytomany_Article_Tag_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Manytomany_TagArgs = {
  _inc?: InputMaybe<_Manytomany_Tag_Inc_Input>;
  _set?: InputMaybe<_Manytomany_Tag_Set_Input>;
  where: _Manytomany_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Manytomany_Tag_By_PkArgs = {
  _inc?: InputMaybe<_Manytomany_Tag_Inc_Input>;
  _set?: InputMaybe<_Manytomany_Tag_Set_Input>;
  pk_columns: _Manytomany_Tag_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Author" */
  Author: Array<Author>;
  /** fetch aggregated fields from the table: "Author" */
  Author_aggregate: Author_Aggregate;
  /** fetch data from the table: "Author" using primary key columns */
  Author_by_pk?: Maybe<Author>;
  /** fetch data from the table: "Book" */
  Book: Array<Book>;
  /** fetch aggregated fields from the table: "Book" */
  Book_aggregate: Book_Aggregate;
  /** fetch data from the table: "Book" using primary key columns */
  Book_by_pk?: Maybe<Book>;
  /** fetch data from the table: "Tag" */
  Tag: Array<Tag>;
  /** fetch aggregated fields from the table: "Tag" */
  Tag_aggregate: Tag_Aggregate;
  /** fetch data from the table: "Tag" using primary key columns */
  Tag_by_pk?: Maybe<Tag>;
  /** fetch data from the table: "_manytomany.article" */
  _manytomany_article: Array<_Manytomany_Article>;
  /** fetch aggregated fields from the table: "_manytomany.article" */
  _manytomany_article_aggregate: _Manytomany_Article_Aggregate;
  /** fetch data from the table: "_manytomany.article" using primary key columns */
  _manytomany_article_by_pk?: Maybe<_Manytomany_Article>;
  /** fetch data from the table: "_manytomany.article_tag" */
  _manytomany_article_tag: Array<_Manytomany_Article_Tag>;
  /** fetch aggregated fields from the table: "_manytomany.article_tag" */
  _manytomany_article_tag_aggregate: _Manytomany_Article_Tag_Aggregate;
  /** fetch data from the table: "_manytomany.article_tag" using primary key columns */
  _manytomany_article_tag_by_pk?: Maybe<_Manytomany_Article_Tag>;
  /** fetch data from the table: "_manytomany.tag" */
  _manytomany_tag: Array<_Manytomany_Tag>;
  /** fetch aggregated fields from the table: "_manytomany.tag" */
  _manytomany_tag_aggregate: _Manytomany_Tag_Aggregate;
  /** fetch data from the table: "_manytomany.tag" using primary key columns */
  _manytomany_tag_by_pk?: Maybe<_Manytomany_Tag>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAuthorArgs = {
  distinct_on?: InputMaybe<Array<Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Author_Order_By>>;
  where?: InputMaybe<Author_Bool_Exp>;
};


export type Query_RootAuthor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Author_Order_By>>;
  where?: InputMaybe<Author_Bool_Exp>;
};


export type Query_RootAuthor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBookArgs = {
  distinct_on?: InputMaybe<Array<Book_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Book_Order_By>>;
  where?: InputMaybe<Book_Bool_Exp>;
};


export type Query_RootBook_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Book_Order_By>>;
  where?: InputMaybe<Book_Bool_Exp>;
};


export type Query_RootBook_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTagArgs = {
  distinct_on?: InputMaybe<Array<Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tag_Order_By>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Query_RootTag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tag_Order_By>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Query_RootTag_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_Root_Manytomany_ArticleArgs = {
  distinct_on?: InputMaybe<Array<_Manytomany_Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Manytomany_Article_Order_By>>;
  where?: InputMaybe<_Manytomany_Article_Bool_Exp>;
};


export type Query_Root_Manytomany_Article_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Manytomany_Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Manytomany_Article_Order_By>>;
  where?: InputMaybe<_Manytomany_Article_Bool_Exp>;
};


export type Query_Root_Manytomany_Article_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_Root_Manytomany_Article_TagArgs = {
  distinct_on?: InputMaybe<Array<_Manytomany_Article_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Manytomany_Article_Tag_Order_By>>;
  where?: InputMaybe<_Manytomany_Article_Tag_Bool_Exp>;
};


export type Query_Root_Manytomany_Article_Tag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Manytomany_Article_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Manytomany_Article_Tag_Order_By>>;
  where?: InputMaybe<_Manytomany_Article_Tag_Bool_Exp>;
};


export type Query_Root_Manytomany_Article_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_Root_Manytomany_TagArgs = {
  distinct_on?: InputMaybe<Array<_Manytomany_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Manytomany_Tag_Order_By>>;
  where?: InputMaybe<_Manytomany_Tag_Bool_Exp>;
};


export type Query_Root_Manytomany_Tag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Manytomany_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Manytomany_Tag_Order_By>>;
  where?: InputMaybe<_Manytomany_Tag_Bool_Exp>;
};


export type Query_Root_Manytomany_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  email: Scalars['String'];
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Author" */
  Author: Array<Author>;
  /** fetch aggregated fields from the table: "Author" */
  Author_aggregate: Author_Aggregate;
  /** fetch data from the table: "Author" using primary key columns */
  Author_by_pk?: Maybe<Author>;
  /** fetch data from the table: "Book" */
  Book: Array<Book>;
  /** fetch aggregated fields from the table: "Book" */
  Book_aggregate: Book_Aggregate;
  /** fetch data from the table: "Book" using primary key columns */
  Book_by_pk?: Maybe<Book>;
  /** fetch data from the table: "Tag" */
  Tag: Array<Tag>;
  /** fetch aggregated fields from the table: "Tag" */
  Tag_aggregate: Tag_Aggregate;
  /** fetch data from the table: "Tag" using primary key columns */
  Tag_by_pk?: Maybe<Tag>;
  /** fetch data from the table: "_manytomany.article" */
  _manytomany_article: Array<_Manytomany_Article>;
  /** fetch aggregated fields from the table: "_manytomany.article" */
  _manytomany_article_aggregate: _Manytomany_Article_Aggregate;
  /** fetch data from the table: "_manytomany.article" using primary key columns */
  _manytomany_article_by_pk?: Maybe<_Manytomany_Article>;
  /** fetch data from the table: "_manytomany.article_tag" */
  _manytomany_article_tag: Array<_Manytomany_Article_Tag>;
  /** fetch aggregated fields from the table: "_manytomany.article_tag" */
  _manytomany_article_tag_aggregate: _Manytomany_Article_Tag_Aggregate;
  /** fetch data from the table: "_manytomany.article_tag" using primary key columns */
  _manytomany_article_tag_by_pk?: Maybe<_Manytomany_Article_Tag>;
  /** fetch data from the table: "_manytomany.tag" */
  _manytomany_tag: Array<_Manytomany_Tag>;
  /** fetch aggregated fields from the table: "_manytomany.tag" */
  _manytomany_tag_aggregate: _Manytomany_Tag_Aggregate;
  /** fetch data from the table: "_manytomany.tag" using primary key columns */
  _manytomany_tag_by_pk?: Maybe<_Manytomany_Tag>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootAuthorArgs = {
  distinct_on?: InputMaybe<Array<Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Author_Order_By>>;
  where?: InputMaybe<Author_Bool_Exp>;
};


export type Subscription_RootAuthor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Author_Order_By>>;
  where?: InputMaybe<Author_Bool_Exp>;
};


export type Subscription_RootAuthor_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBookArgs = {
  distinct_on?: InputMaybe<Array<Book_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Book_Order_By>>;
  where?: InputMaybe<Book_Bool_Exp>;
};


export type Subscription_RootBook_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Book_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Book_Order_By>>;
  where?: InputMaybe<Book_Bool_Exp>;
};


export type Subscription_RootBook_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTagArgs = {
  distinct_on?: InputMaybe<Array<Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tag_Order_By>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Subscription_RootTag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tag_Order_By>>;
  where?: InputMaybe<Tag_Bool_Exp>;
};


export type Subscription_RootTag_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_Root_Manytomany_ArticleArgs = {
  distinct_on?: InputMaybe<Array<_Manytomany_Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Manytomany_Article_Order_By>>;
  where?: InputMaybe<_Manytomany_Article_Bool_Exp>;
};


export type Subscription_Root_Manytomany_Article_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Manytomany_Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Manytomany_Article_Order_By>>;
  where?: InputMaybe<_Manytomany_Article_Bool_Exp>;
};


export type Subscription_Root_Manytomany_Article_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_Root_Manytomany_Article_TagArgs = {
  distinct_on?: InputMaybe<Array<_Manytomany_Article_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Manytomany_Article_Tag_Order_By>>;
  where?: InputMaybe<_Manytomany_Article_Tag_Bool_Exp>;
};


export type Subscription_Root_Manytomany_Article_Tag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Manytomany_Article_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Manytomany_Article_Tag_Order_By>>;
  where?: InputMaybe<_Manytomany_Article_Tag_Bool_Exp>;
};


export type Subscription_Root_Manytomany_Article_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_Root_Manytomany_TagArgs = {
  distinct_on?: InputMaybe<Array<_Manytomany_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Manytomany_Tag_Order_By>>;
  where?: InputMaybe<_Manytomany_Tag_Bool_Exp>;
};


export type Subscription_Root_Manytomany_Tag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Manytomany_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Manytomany_Tag_Order_By>>;
  where?: InputMaybe<_Manytomany_Tag_Bool_Exp>;
};


export type Subscription_Root_Manytomany_Tag_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  email: Scalars['String'];
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email: Scalars['String'];
  id: Scalars['String'];
  last_seen: Scalars['timestamptz'];
  nickname?: Maybe<Scalars['String']>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersIdKey = 'users_id_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  nickname?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  nickname?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_seen?: Maybe<Scalars['timestamptz']>;
  nickname?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  email: Scalars['String'];
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Nickname = 'nickname'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  last_seen?: InputMaybe<Scalars['timestamptz']>;
  nickname?: InputMaybe<Scalars['String']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Nickname = 'nickname'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type UserListQueryVariables = Exact<{ [key: string]: never; }>;


export type UserListQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, email: string, nickname?: string | null }> };


export const UserListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"nickname"}}]}}]}}]} as unknown as DocumentNode<UserListQuery, UserListQueryVariables>;