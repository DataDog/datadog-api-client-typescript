/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionEventsDataSource } from "./FormulaAndFunctionEventsDataSource";
import { ScatterplotDataProjectionQueryStorage } from "./ScatterplotDataProjectionQueryStorage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
