import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * AWS settings for the S3 bucket Storage Management reads inventory reports from.
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
   * Object key prefix where inventory reports are written. Omit or set to `/` when reports are written at the bucket root.
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
