/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardSearchAggregationBucketKey } from "./DashboardSearchAggregationBucketKey";
import { DashboardSearchAggregationBucketMultiKey } from "./DashboardSearchAggregationBucketMultiKey";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Aggregations of dashboard search results.
 */
export class DashboardSearchAggregations {
  /**
   * Aggregation by author.
   */
  "author"?: Array<DashboardSearchAggregationBucketMultiKey>;
  /**
   * Aggregation by share status.
   */
  "isShared"?: Array<DashboardSearchAggregationBucketKey>;
  /**
   * Aggregation by share type.
   */
  "shareType"?: Array<DashboardSearchAggregationBucketKey>;
  /**
   * Aggregation by who shared the dashboard.
   */
  "sharedByHandle"?: Array<DashboardSearchAggregationBucketKey>;
  /**
   * Aggregation by status.
   */
  "status"?: Array<DashboardSearchAggregationBucketKey>;
  /**
   * Aggregation by tags.
   */
  "tags"?: Array<DashboardSearchAggregationBucketKey>;
  /**
   * Aggregation by template variable names.
   */
  "templateVariablesName"?: Array<DashboardSearchAggregationBucketKey>;
  /**
   * Aggregation by dashboard type.
   */
  "type"?: Array<DashboardSearchAggregationBucketKey>;
  /**
   * Aggregation by widget metrics.
   */
  "widgetsMetrics"?: Array<DashboardSearchAggregationBucketKey>;
  /**
   * Aggregation by widget type.
   */
  "widgetsType"?: Array<DashboardSearchAggregationBucketKey>;

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
    author: {
      baseName: "author",
      type: "Array<DashboardSearchAggregationBucketMultiKey>",
    },
    isShared: {
      baseName: "is_shared",
      type: "Array<DashboardSearchAggregationBucketKey>",
    },
    shareType: {
      baseName: "share_type",
      type: "Array<DashboardSearchAggregationBucketKey>",
    },
    sharedByHandle: {
      baseName: "shared_by.handle",
      type: "Array<DashboardSearchAggregationBucketKey>",
    },
    status: {
      baseName: "status",
      type: "Array<DashboardSearchAggregationBucketKey>",
    },
    tags: {
      baseName: "tags",
      type: "Array<DashboardSearchAggregationBucketKey>",
    },
    templateVariablesName: {
      baseName: "template_variables.name",
      type: "Array<DashboardSearchAggregationBucketKey>",
    },
    type: {
      baseName: "type",
      type: "Array<DashboardSearchAggregationBucketKey>",
    },
    widgetsMetrics: {
      baseName: "widgets.metrics",
      type: "Array<DashboardSearchAggregationBucketKey>",
    },
    widgetsType: {
      baseName: "widgets.type",
      type: "Array<DashboardSearchAggregationBucketKey>",
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
    return DashboardSearchAggregations.attributeTypeMap;
  }

  public constructor() {}
}
