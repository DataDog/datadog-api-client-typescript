import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse } from "./DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse";

/**
 * Data Observability, which collects lineage and data quality information from your Databricks catalogs so you can explore how data flows and detect, resolve, and prevent quality issues.
 */
export class DatabricksDataObservabilityQualityMonitoringIntegrationDataflowResponse {
  /**
   * Whether Datadog collects this data. Set to `false` to stop collection.
   */
  "enabled"?: boolean;
  /**
   * Settings of the Data Observability dataflow.
   */
  "settings"?: DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse;
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
      type: "DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse",
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
    return DatabricksDataObservabilityQualityMonitoringIntegrationDataflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
