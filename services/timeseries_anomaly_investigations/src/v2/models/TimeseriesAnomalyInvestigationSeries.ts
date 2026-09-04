import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Logical series on which the anomaly was detected.
 */
export class TimeseriesAnomalyInvestigationSeries {
  /**
   * Tags identifying the selected group. Empty for a query without grouping.
   */
  "groupTags": Array<string>;
  /**
   * Display label for the selected series.
   */
  "label": string;
  /**
   * Zero-based index of the caller's formula that produced the series.
   */
  "queryIndex": number;
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
    groupTags: {
      baseName: "group_tags",
      type: "Array<string>",
      required: true,
    },
    label: {
      baseName: "label",
      type: "string",
      required: true,
    },
    queryIndex: {
      baseName: "query_index",
      type: "number",
      required: true,
      format: "int64",
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
    return TimeseriesAnomalyInvestigationSeries.attributeTypeMap;
  }

  public constructor() {}
}
