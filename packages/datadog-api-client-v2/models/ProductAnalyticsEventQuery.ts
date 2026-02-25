/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsEventQueryDataSource } from "./ProductAnalyticsEventQueryDataSource";
import { ProductAnalyticsEventSearch } from "./ProductAnalyticsEventSearch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A standard Product Analytics event query.
 */
export class ProductAnalyticsEventQuery {
  /**
   * The data source identifier.
   */
  "dataSource": ProductAnalyticsEventQueryDataSource;
  /**
   * Search parameters for an event query.
   */
  "search": ProductAnalyticsEventSearch;

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
      type: "ProductAnalyticsEventQueryDataSource",
      required: true,
    },
    search: {
      baseName: "search",
      type: "ProductAnalyticsEventSearch",
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
    return ProductAnalyticsEventQuery.attributeTypeMap;
  }

  public constructor() {}
}
