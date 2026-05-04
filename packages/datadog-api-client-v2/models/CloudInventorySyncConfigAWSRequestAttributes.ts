/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS settings for the customer bucket that stores inventory reports.
 */
export class CloudInventorySyncConfigAWSRequestAttributes {
  /**
   * AWS account ID that owns the inventory bucket.
   */
  "awsAccountId": string;
  /**
   * Name of the S3 bucket containing inventory files.
   */
  "destinationBucketName": string;
  /**
   * AWS Region of the inventory bucket.
   */
  "destinationBucketRegion": string;
  /**
   * Optional object key prefix for inventory files. Use `/` or omit for the entire bucket.
   */
  "destinationPrefix"?: string;

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
    awsAccountId: {
      baseName: "aws_account_id",
      type: "string",
      required: true,
    },
    destinationBucketName: {
      baseName: "destination_bucket_name",
      type: "string",
      required: true,
    },
    destinationBucketRegion: {
      baseName: "destination_bucket_region",
      type: "string",
      required: true,
    },
    destinationPrefix: {
      baseName: "destination_prefix",
      type: "string",
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
    return CloudInventorySyncConfigAWSRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
