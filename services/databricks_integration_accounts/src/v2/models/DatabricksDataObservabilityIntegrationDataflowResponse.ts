import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatabricksDataObservabilityIntegrationDataflowSettingsResponse } from "./DatabricksDataObservabilityIntegrationDataflowSettingsResponse";

/**
 * The Databricks data observability dataflow.
 */
export class DatabricksDataObservabilityIntegrationDataflowResponse {
  /**
   * Whether the Databricks dataflow is enabled.
   */
  "enabled"?: boolean;
  /**
   * Settings of the Databricks data observability dataflow.
   */
  "settings"?: DatabricksDataObservabilityIntegrationDataflowSettingsResponse;
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
      type: "DatabricksDataObservabilityIntegrationDataflowSettingsResponse",
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
    return DatabricksDataObservabilityIntegrationDataflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
