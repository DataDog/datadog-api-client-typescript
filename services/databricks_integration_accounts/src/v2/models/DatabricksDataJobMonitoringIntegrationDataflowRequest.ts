import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksDataJobMonitoringIntegrationDataflowSettingsRequest } from "./DatabricksDataJobMonitoringIntegrationDataflowSettingsRequest";

/**
 * The Databricks Data Jobs Monitoring dataflow.
 */
export class DatabricksDataJobMonitoringIntegrationDataflowRequest {
  /**
   * Whether the Databricks dataflow is enabled.
   */
  "enabled"?: boolean;
  /**
   * Settings of the Databricks Data Jobs Monitoring dataflow. Only the fields provided are changed.
   */
  "settings"?: DatabricksDataJobMonitoringIntegrationDataflowSettingsRequest;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    settings: {
      baseName: "settings",
      type: "DatabricksDataJobMonitoringIntegrationDataflowSettingsRequest",
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
    return DatabricksDataJobMonitoringIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
