/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AudienceFilters } from "./AudienceFilters";
import { BaseProductAnalyticsQuery } from "./BaseProductAnalyticsQuery";
import { FormulaProductAnalyticsExtendedQuery20270101Indexes } from "../../datadog-api-client-v1/models/FormulaProductAnalyticsExtendedQuery20270101Indexes";
import { FormulaProductAnalyticsExtendedQueryDataSource } from "./FormulaProductAnalyticsExtendedQueryDataSource";
import { ProductAnalyticsCompute } from "./ProductAnalyticsCompute";
import { ProductAnalyticsGroupBy } from "./ProductAnalyticsGroupBy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaProductAnalyticsExtendedQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "audienceFilters"?: AudienceFilters;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute": ProductAnalyticsCompute;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaProductAnalyticsExtendedQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<ProductAnalyticsGroupBy>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "indexes"?: FormulaProductAnalyticsExtendedQuery20270101Indexes;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": BaseProductAnalyticsQuery;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    audienceFilters: {
      baseName: "audience_filters",
      type: "AudienceFilters",
    },
    compute: {
      baseName: "compute",
      type: "ProductAnalyticsCompute",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaProductAnalyticsExtendedQueryDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<ProductAnalyticsGroupBy>",
    },
    indexes: {
      baseName: "indexes",
      type: "FormulaProductAnalyticsExtendedQuery20270101Indexes",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "BaseProductAnalyticsQuery",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaProductAnalyticsExtendedQuery.attributeTypeMap;
  }

  public constructor() {}
}
