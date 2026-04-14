/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsFunnelCompute } from "./ProductAnalyticsFunnelCompute";
import { ProductAnalyticsFunnelDataSource } from "./ProductAnalyticsFunnelDataSource";
import { ProductAnalyticsFunnelGroupBy } from "./ProductAnalyticsFunnelGroupBy";
import { UserJourneySearch } from "./UserJourneySearch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * User journey funnel query definition.
 */
export class ProductAnalyticsFunnelQuery {
  /**
   * Compute configuration for user journey funnel.
   */
  "compute"?: ProductAnalyticsFunnelCompute;
  /**
   * Data source for user journey funnel queries.
   */
  "dataSource": ProductAnalyticsFunnelDataSource;
  /**
   * Group by configuration.
   */
  "groupBy"?: Array<ProductAnalyticsFunnelGroupBy>;
  /**
   * User journey search configuration.
   */
  "search": UserJourneySearch;
  /**
   * Subquery ID.
   */
  "subqueryId"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    compute: {
      baseName: "compute",
      type: "ProductAnalyticsFunnelCompute",
    },
    dataSource: {
      baseName: "data_source",
      type: "ProductAnalyticsFunnelDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<ProductAnalyticsFunnelGroupBy>",
    },
    search: {
      baseName: "search",
      type: "UserJourneySearch",
      required: true,
    },
    subqueryId: {
      baseName: "subquery_id",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProductAnalyticsFunnelQuery.attributeTypeMap;
  }

  public constructor() {}
}
