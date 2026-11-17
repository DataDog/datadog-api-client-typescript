import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NebiusCloudIntegrationAccountMetricsConfigRequest } from "./NebiusCloudIntegrationAccountMetricsConfigRequest";

/**
 * Settings for creating the Nebius Cloud integration account.
 */
export class NebiusCloudIntegrationAccountSettingsRequest {
  /**
   * Tags applied to all metrics, logs, and resources collected from this Nebius Cloud account. Defaults to no tags.
   */
  "accountTags"?: Array<string>;
  /**
   * Configuration for metric collection from this Nebius Cloud account.
   */
  "metricsConfig"?: NebiusCloudIntegrationAccountMetricsConfigRequest;
  /**
   * ID of the Nebius tenant to monitor, the organizational workspace identifier. Found in the Nebius console under Administration > Organization.
   */
  "tenantId": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accountTags: {
      baseName: "account_tags",
      type: "Array<string>",
    },
    metricsConfig: {
      baseName: "metrics_config",
      type: "NebiusCloudIntegrationAccountMetricsConfigRequest",
    },
    tenantId: {
      baseName: "tenant_id",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NebiusCloudIntegrationAccountSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
