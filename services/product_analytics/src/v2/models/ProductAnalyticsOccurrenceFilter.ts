import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Filter for occurrence-based queries.
 */
export class ProductAnalyticsOccurrenceFilter {
  /**
   * Additional metadata.
   */
  "meta"?: { [key: string]: string };
  /**
   * Comparison operator (=, >=, <=, >, <).
   */
  "operator": string;
  /**
   * The occurrence count threshold as a string.
   */
  "value": string;
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
    meta: {
      baseName: "meta",
      type: "{ [key: string]: string; }",
    },
    operator: {
      baseName: "operator",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
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
    return ProductAnalyticsOccurrenceFilter.attributeTypeMap;
  }

  public constructor() {}
}
