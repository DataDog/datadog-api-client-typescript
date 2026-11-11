import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the Cloud Cost Management dataflow.
 */
export class NebiusCloudCostCollectionIntegrationDataflowSettingsResponse {
  /**
   * ID of the Nebius Object Storage access key used to read the cost export bucket.
   */
  "accessKeyId"?: string;
  /**
   * Name of the Nebius Object Storage bucket holding the cost export.
   */
  "bucketName"?: string;
  /**
   * Prefix path within the bucket that locates the cost export.
   */
  "bucketPrefixPath"?: string;
  /**
   * Region of the Nebius Object Storage bucket, such as `eu-north1`.
   */
  "bucketRegion"?: string;
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
    accessKeyId: {
      baseName: "access_key_id",
      type: "string",
    },
    bucketName: {
      baseName: "bucket_name",
      type: "string",
    },
    bucketPrefixPath: {
      baseName: "bucket_prefix_path",
      type: "string",
    },
    bucketRegion: {
      baseName: "bucket_region",
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
    return NebiusCloudCostCollectionIntegrationDataflowSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
