import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Aggregation bucket with multiple key values.
 */
export class NotebookSearchAggregationBucketMultiKey {
  /**
   * Number of results in this bucket.
   */
  "count": number;
  /**
   * Key values for this bucket.
   */
  "value": Array<string>;
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
      required: true,
      format: "int64",
    },
    value: {
      baseName: "value",
      type: "Array<string>",
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
    return NotebookSearchAggregationBucketMultiKey.attributeTypeMap;
  }

  public constructor() {}
}
