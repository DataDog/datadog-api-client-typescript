import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionEventsDataSource } from "./FormulaAndFunctionEventsDataSource";
import { ScatterplotDataProjectionQueryStorage } from "./ScatterplotDataProjectionQueryStorage";

/**
 * The query for a scatterplot data projection request.
 */
export class ScatterplotDataProjectionQuery {
  /**
   * Data source for event platform-based queries.
   */
  "dataSource": FormulaAndFunctionEventsDataSource;
  /**
   * Indexes to search.
   */
  "indexes"?: Array<string>;
  /**
   * The search query string.
   */
  "queryString": string;
  /**
   * Storage tier to query.
   */
  "storage"?: ScatterplotDataProjectionQueryStorage;
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
      type: "FormulaAndFunctionEventsDataSource",
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
      type: "ScatterplotDataProjectionQueryStorage",
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
    return ScatterplotDataProjectionQuery.attributeTypeMap;
  }

  public constructor() {}
}
