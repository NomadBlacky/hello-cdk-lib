import { Bucket } from '@aws-cdk/aws-s3';
import { Construct } from '@aws-cdk/core';

export interface HelloCdkLibProps {
  readonly bucketName: string;
}

export class HelloCdkLib extends Construct {
  readonly s3Bucket: Bucket;

  constructor(scope: Construct, id: string, props: HelloCdkLibProps) {
    super(scope, id);

    this.s3Bucket = new Bucket(this, 'Bucket', {
      bucketName: props.bucketName,
    });
  }
}
