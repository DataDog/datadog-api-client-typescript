/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsEventOccurrenceQueryDataSource } from "./ProductAnalyticsEventOccurrenceQueryDataSource";
import { ProductAnalyticsEventOccurrenceQuerySearch } from "./ProductAnalyticsEventOccurrenceQuerySearch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ProductAnalyticsEventOccurrenceQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": ProductAnalyticsEventOccurrenceQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "search": ProductAnalyticsEventOccurrenceQuerySearch;

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
      type: "ProductAnalyticsEventOccurrenceQueryDataSource",
      required: true,
    },
    search: {
      baseName: "search",
      type: "ProductAnalyticsEventOccurrenceQuerySearch",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProductAnalyticsEventOccurrenceQuery.attributeTypeMap;
  }

  public constructor() {}
}
