import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Query configuration for a data projection request.
 */
export class DataProjectionQuery {
  /**
   * Data source for the query.
   */
  "dataSource": string;
  /**
   * List of indexes to query.
   */
  "indexes"?: Array<string>;
  /**
   * The query string to filter events.
   */
  "queryString": string;
  /**
   * Storage location for the query.
   */
  "storage"?: string;
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
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    storage: {
      baseName: "storage",
      type: "string",
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
    return DataProjectionQuery.attributeTypeMap;
  }

  public constructor() {}
}
