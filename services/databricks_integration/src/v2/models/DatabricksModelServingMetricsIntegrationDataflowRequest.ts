import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Health and usage metrics for your Databricks model serving endpoints. Not supported on accounts that authenticate with `private-action-runner`; on those accounts this dataflow collects no data.
 */
export class DatabricksModelServingMetricsIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `false`; set to `true` to start collection.
   */
  "enabled"?: boolean;
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatabricksModelServingMetricsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
