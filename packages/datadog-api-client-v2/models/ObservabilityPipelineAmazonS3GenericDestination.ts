/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineAmazonS3DestinationStorageClass } from "./ObservabilityPipelineAmazonS3DestinationStorageClass";
import { ObservabilityPipelineAmazonS3GenericBatchSettings } from "./ObservabilityPipelineAmazonS3GenericBatchSettings";
import { ObservabilityPipelineAmazonS3GenericCompression } from "./ObservabilityPipelineAmazonS3GenericCompression";
import { ObservabilityPipelineAmazonS3GenericDestinationType } from "./ObservabilityPipelineAmazonS3GenericDestinationType";
import { ObservabilityPipelineAmazonS3GenericEncoding } from "./ObservabilityPipelineAmazonS3GenericEncoding";
import { ObservabilityPipelineAwsAuth } from "./ObservabilityPipelineAwsAuth";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `amazon_s3_generic` destination sends your logs to an Amazon S3 bucket.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineAmazonS3GenericDestination {
  /**
   * AWS authentication credentials used for accessing AWS services such as S3.
   * If omitted, the system’s default credentials are used (for example, the IAM role and environment variables).
   */
  "auth"?: ObservabilityPipelineAwsAuth;
  /**
   * Event batching settings
   */
  "batchSettings"?: ObservabilityPipelineAmazonS3GenericBatchSettings;
  /**
   * S3 bucket name.
   */
  "bucket": string;
  /**
   * Compression algorithm applied to encoded logs.
   */
  "compression": ObservabilityPipelineAmazonS3GenericCompression;
  /**
   * Encoding format for the destination.
   */
  "encoding": ObservabilityPipelineAmazonS3GenericEncoding;
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
   * The destination type. Always `amazon_s3_generic`.
   */
  "type": ObservabilityPipelineAmazonS3GenericDestinationType;

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
    batchSettings: {
      baseName: "batch_settings",
      type: "ObservabilityPipelineAmazonS3GenericBatchSettings",
    },
    bucket: {
      baseName: "bucket",
      type: "string",
      required: true,
    },
    compression: {
      baseName: "compression",
      type: "ObservabilityPipelineAmazonS3GenericCompression",
      required: true,
    },
    encoding: {
      baseName: "encoding",
      type: "ObservabilityPipelineAmazonS3GenericEncoding",
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
    type: {
      baseName: "type",
      type: "ObservabilityPipelineAmazonS3GenericDestinationType",
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
    return ObservabilityPipelineAmazonS3GenericDestination.attributeTypeMap;
  }

  public constructor() {}
}
