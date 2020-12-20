# API Reference

**Classes**

Name|Description
----|-----------
[HelloCdkLib](#hello-cdk-lib-hellocdklib)|*No description*


**Structs**

Name|Description
----|-----------
[HelloCdkLibProps](#hello-cdk-lib-hellocdklibprops)|*No description*



## class HelloCdkLib  <a id="hello-cdk-lib-hellocdklib"></a>



__Implements__: [IConstruct](#constructs-iconstruct), [IConstruct](#aws-cdk-core-iconstruct), [IConstruct](#constructs-iconstruct), [IDependable](#aws-cdk-core-idependable)
__Extends__: [Construct](#aws-cdk-core-construct)

### Initializer




```ts
new HelloCdkLib(scope: Construct, id: string, props: HelloCdkLibProps)
```

* **scope** (<code>[Construct](#aws-cdk-core-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[HelloCdkLibProps](#hello-cdk-lib-hellocdklibprops)</code>)  *No description*
  * **bucketName** (<code>string</code>)  *No description* 



### Properties


Name | Type | Description 
-----|------|-------------
**s3Bucket** | <code>[Bucket](#aws-cdk-aws-s3-bucket)</code> | <span></span>



## struct HelloCdkLibProps  <a id="hello-cdk-lib-hellocdklibprops"></a>






Name | Type | Description 
-----|------|-------------
**bucketName** | <code>string</code> | <span></span>



