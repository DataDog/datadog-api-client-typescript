/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAmazonS3DestinationStorageClass } from "./ObservabilityPipelineAmazonS3DestinationStorageClass";
import { ObservabilityPipelineAmazonS3DestinationType } from "./ObservabilityPipelineAmazonS3DestinationType";
import { ObservabilityPipelineAwsAuth } from "./ObservabilityPipelineAwsAuth";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `amazon_s3` destination sends your logs in Datadog-rehydratable format to an Amazon S3 bucket for archiving.
 */
export class ObservabilityPipelineAmazonS3Destination {
  /**
   * AWS authentication credentials used for accessing AWS services such as S3.
   * If omitted, the system’s default credentials are used (for example, the IAM role and environment variables).
   */
  "auth"?: ObservabilityPipelineAwsAuth;
  /**
   * S3 bucket name.
   */
  "bucket": string;
  /**
   * Unique identifier for the destination component.
   */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
  /**
   * Optional prefix for object keys.
   */
  "keyPrefix"?: string;
  /**
   * AWS region of the S3 bucket.
   */
  "region": string;
  /**
   * S3 storage class.
   */
  "storageClass": ObservabilityPipelineAmazonS3DestinationStorageClass;
  /**
   * Configuration for enabling TLS encryption between the pipeline component and external services.
   */
  "tls"?: ObservabilityPipelineTls;
  /**
   * The destination type. Always `amazon_s3`.
   */
  "type": ObservabilityPipelineAmazonS3DestinationType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    auth: {
      baseName: "auth",
      type: "ObservabilityPipelineAwsAuth",
    },
    bucket: {
      baseName: "bucket",
      type: "string",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    keyPrefix: {
      baseName: "key_prefix",
      type: "string",
    },
    region: {
      baseName: "region",
      type: "string",
      required: true,
    },
    storageClass: {
      baseName: "storage_class",
      type: "ObservabilityPipelineAmazonS3DestinationStorageClass",
      required: true,
    },
    tls: {
      baseName: "tls",
      type: "ObservabilityPipelineTls",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineAmazonS3DestinationType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ObservabilityPipelineAmazonS3Destination.attributeTypeMap;
  }

  public constructor() {}
}
