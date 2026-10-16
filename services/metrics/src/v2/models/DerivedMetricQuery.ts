import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A single query used in the definition of a derived metric.
 */
export class DerivedMetricQuery {
  /**
   * The data source that the query is run against.
   */
  "dataSource": string;
  /**
   * The name used to reference this query from the formula.
   */
  "name": string;
  /**
   * The query string executed against the data source.
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
    dataSource: {
      baseName: "data_source",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
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
    return DerivedMetricQuery.attributeTypeMap;
  }

  public constructor() {}
}
