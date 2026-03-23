import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the query response, containing the matched records and total count.
 */
export class QueryResponseDataAttributes {
  /**
   * The list of matching records returned by the query, each as a map of attribute names to values.
   */
  "hits"?: Array<{ [key: string]: any }>;
  /**
   * Total number of records matching the query, regardless of the limit applied.
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
    hits: {
      baseName: "hits",
      type: "Array<{ [key: string]: any; }>",
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
    return QueryResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
