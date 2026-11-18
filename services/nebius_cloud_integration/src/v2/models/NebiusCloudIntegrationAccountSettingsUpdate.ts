import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NebiusCloudIntegrationAccountMetricsConfigUpdate } from "./NebiusCloudIntegrationAccountMetricsConfigUpdate";

/**
 * Settings for updating the Nebius Cloud integration account. Only the fields provided are changed.
 */
export class NebiusCloudIntegrationAccountSettingsUpdate {
  /**
   * Tags applied to all metrics, logs, and resources collected from this Nebius Cloud account. Sending it replaces the whole list; send an empty array to remove all tags, or omit it to keep the stored list.
   */
  "accountTags"?: Array<string>;
  /**
   * Configuration for metric collection. Only the fields provided are changed.
   */
  "metricsConfig"?: NebiusCloudIntegrationAccountMetricsConfigUpdate;
  /**
   * ID of the Nebius tenant to monitor. An empty value is ignored and the stored tenant ID is kept.
   */
  "tenantId"?: string;
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
      type: "NebiusCloudIntegrationAccountMetricsConfigUpdate",
    },
    tenantId: {
      baseName: "tenant_id",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NebiusCloudIntegrationAccountSettingsUpdate.attributeTypeMap;
  }

  public constructor() {}
}
