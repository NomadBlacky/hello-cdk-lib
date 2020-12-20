import { App, Stack } from '@aws-cdk/core';
import { HelloCdkLib } from './index';

const app = new App();

const stack = new Stack(app, 'HelloCdkLibExampleStack');

new HelloCdkLib(stack, 'HelloCdkLib', {
  bucketName: 'hello-cdk-lib-test-bucket',
});
