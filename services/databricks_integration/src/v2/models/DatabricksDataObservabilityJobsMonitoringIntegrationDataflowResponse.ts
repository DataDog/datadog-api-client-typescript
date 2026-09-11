import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsResponse } from "./DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsResponse";

/**
 * Data Jobs Monitoring, which collects performance, reliability, and cost data for your Databricks jobs.
 */
export class DatabricksDataObservabilityJobsMonitoringIntegrationDataflowResponse {
  /**
   * Whether Datadog collects this data. Set to `false` to stop collection.
   */
  "enabled"?: boolean;
  /**
   * Settings of the Data Jobs Monitoring dataflow.
   */
  "settings"?: DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsResponse;
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
      type: "DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsResponse",
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
    return DatabricksDataObservabilityJobsMonitoringIntegrationDataflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
