import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Defines the metric and aggregation used as the sort value.
 */
export class SplitConfigSortCompute {
  /**
   * How to aggregate the sort metric for the purposes of ordering.
   */
  "aggregation": string;
  /**
   * The metric to use for sorting graphs.
   */
  "metric": string;
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
    aggregation: {
      baseName: "aggregation",
      type: "string",
      required: true,
    },
    metric: {
      baseName: "metric",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SplitConfigSortCompute.attributeTypeMap;
  }

  public constructor() {}
}
