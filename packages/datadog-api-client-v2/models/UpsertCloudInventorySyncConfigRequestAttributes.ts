/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudInventorySyncConfigAWSRequestAttributes } from "./CloudInventorySyncConfigAWSRequestAttributes";
import { CloudInventorySyncConfigAzureRequestAttributes } from "./CloudInventorySyncConfigAzureRequestAttributes";
import { CloudInventorySyncConfigGCPRequestAttributes } from "./CloudInventorySyncConfigGCPRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Provider-specific configuration. Include the object that matches `data.id` (`aws`, `gcp`, or `azure`).
 */
export class UpsertCloudInventorySyncConfigRequestAttributes {
  /**
   * AWS settings for the customer bucket that stores inventory reports.
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
