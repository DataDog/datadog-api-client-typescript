import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Health and usage metrics for your Databricks model serving endpoints. Not supported on accounts that authenticate with `private-action-runner`; on those accounts this dataflow collects no data even when enabled.
 */
export class DatabricksModelServingMetricsIntegrationDataflowResponse {
  /**
   * Whether Datadog collects this data. Set to `false` to stop collection.
   */
  "enabled"?: boolean;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksModelServingMetricsIntegrationDataflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
