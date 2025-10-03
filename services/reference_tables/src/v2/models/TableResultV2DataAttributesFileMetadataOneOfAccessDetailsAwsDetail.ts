import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `TableResultV2DataAttributesFileMetadataOneOfAccessDetailsAwsDetail` object.
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
