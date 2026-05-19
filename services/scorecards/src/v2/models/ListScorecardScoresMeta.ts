import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination metadata for scores.
 */
export class ListScorecardScoresMeta {
  /**
   * The number of results returned in this page.
   */
  "count"?: number;
  /**
   * The page limit.
   */
  "limit"?: number;
  /**
   * The page offset.
   */
  "offset"?: number;
  /**
   * The total number of results.
   */
  "total"?: number;
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
    count: {
      baseName: "count",
      type: "number",
      format: "int64",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    offset: {
      baseName: "offset",
      type: "number",
      format: "int64",
    },
    total: {
      baseName: "total",
      type: "number",
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
    return ListScorecardScoresMeta.attributeTypeMap;
  }

  public constructor() {}
}
