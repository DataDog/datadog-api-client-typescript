import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The rum-based metric filter. Events matching this filter will be aggregated in this metric.
 */
export class RumMetricFilter {
  /**
   * The search query - following the RUM search syntax.
   */
  "query": string;
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
    query: {
      baseName: "query",
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
    return RumMetricFilter.attributeTypeMap;
  }

  public constructor() {}
}
