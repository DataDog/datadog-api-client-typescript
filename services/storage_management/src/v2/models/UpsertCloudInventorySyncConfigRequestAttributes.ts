import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudInventorySyncConfigAWSRequestAttributes } from "./CloudInventorySyncConfigAWSRequestAttributes";
import { CloudInventorySyncConfigAzureRequestAttributes } from "./CloudInventorySyncConfigAzureRequestAttributes";
import { CloudInventorySyncConfigGCPRequestAttributes } from "./CloudInventorySyncConfigGCPRequestAttributes";

/**
 * Settings for the cloud provider specified in `data.id`. Include only the matching provider object (`aws`, `gcp`, or `azure`).
 */
export class UpsertCloudInventorySyncConfigRequestAttributes {
  /**
   * AWS settings for the S3 bucket Storage Management reads inventory reports from.
   */
  "aws"?: CloudInventorySyncConfigAWSRequestAttributes;
  /**
   * Azure settings for the storage account and container with inventory data.
   */
  "azure"?: CloudInventorySyncConfigAzureRequestAttributes;
  /**
   * GCP settings for buckets involved in inventory reporting.
   */
  "gcp"?: CloudInventorySyncConfigGCPRequestAttributes;
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
    aws: {
      baseName: "aws",
      type: "CloudInventorySyncConfigAWSRequestAttributes",
    },
    azure: {
      baseName: "azure",
      type: "CloudInventorySyncConfigAzureRequestAttributes",
    },
    gcp: {
      baseName: "gcp",
      type: "CloudInventorySyncConfigGCPRequestAttributes",
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
    return UpsertCloudInventorySyncConfigRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
