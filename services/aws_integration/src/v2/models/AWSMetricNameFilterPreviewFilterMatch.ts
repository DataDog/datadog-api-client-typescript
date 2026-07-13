import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A metric name filter pattern and how many metrics it matched.
 */
export class AWSMetricNameFilterPreviewFilterMatch {
  /**
   * The number of Datadog metric names matched by this pattern.
   */
  "matchCount": number;
  /**
   * The metric name filter pattern.
   */
  "pattern": string;
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
    matchCount: {
      baseName: "match_count",
      type: "number",
      required: true,
      format: "int64",
    },
    pattern: {
      baseName: "pattern",
      type: "string",
      required: true,
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
    return AWSMetricNameFilterPreviewFilterMatch.attributeTypeMap;
  }

  public constructor() {}
}
