/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the AWS access details object.
 */
export class TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail {
  /**
   * The ID of the AWS account.
   */
  "awsAccountId"?: string;
  /**
   * The name of the AWS bucket.
   */
  "awsBucketName"?: string;
  /**
   * The relative file path from the S3 bucket root to the CSV file.
   */
  "filePath"?: string;

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
    },
    awsBucketName: {
      baseName: "aws_bucket_name",
      type: "string",
    },
    filePath: {
      baseName: "file_path",
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
    return TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail.attributeTypeMap;
  }

  public constructor() {}
}
