import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Search result.
 */
export class MetricSearchResponseResults {
  /**
   * List of metrics that match the search query.
   */
  "metrics"?: Array<string>;
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
    metrics: {
      baseName: "metrics",
      type: "Array<string>",
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
    return MetricSearchResponseResults.attributeTypeMap;
  }

  public constructor() {}
}
