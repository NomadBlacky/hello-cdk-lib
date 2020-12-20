import { App, Stack } from '@aws-cdk/core';
import { HelloCdkLib } from '../src';
import '@aws-cdk/assert/jest';

test('HelloCdkLib', () => {
  const app = new App();
  const stack = new Stack(app);

  new HelloCdkLib(stack, 'TestStack', {
    bucketName: 'test',
  });

  expect(stack).toHaveResource('AWS::S3::Bucket', {
    BucketName: 'test',
  });
});
