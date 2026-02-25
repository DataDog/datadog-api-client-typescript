/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsOccurrenceQueryDataSource } from "./ProductAnalyticsOccurrenceQueryDataSource";
import { ProductAnalyticsOccurrenceSearch } from "./ProductAnalyticsOccurrenceSearch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Product Analytics occurrence-filtered query.
 */
export class ProductAnalyticsOccurrenceQuery {
  /**
   * The data source identifier for occurrence queries.
   */
  "dataSource": ProductAnalyticsOccurrenceQueryDataSource;
  /**
   * Search parameters for an occurrence query.
   */
  "search": ProductAnalyticsOccurrenceSearch;

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
      type: "ProductAnalyticsOccurrenceQueryDataSource",
      required: true,
    },
    search: {
      baseName: "search",
      type: "ProductAnalyticsOccurrenceSearch",
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
    return ProductAnalyticsOccurrenceQuery.attributeTypeMap;
  }

  public constructor() {}
}
