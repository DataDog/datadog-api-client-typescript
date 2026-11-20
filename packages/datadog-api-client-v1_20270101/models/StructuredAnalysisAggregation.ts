/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnalysisAggregationSort } from "./AnalysisAggregationSort";
import { StructuredAnalysisAggregationType } from "./StructuredAnalysisAggregationType";
import { StructuredAnalysisCompute } from "./StructuredAnalysisCompute";
import { StructuredAnalysisGroupBy } from "./StructuredAnalysisGroupBy";
import { StructuredAnalysisTimeAggregation } from "./StructuredAnalysisTimeAggregation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StructuredAnalysisAggregation {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute"?: Array<StructuredAnalysisCompute>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<StructuredAnalysisGroupBy>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: AnalysisAggregationSort;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "timeAggregation"?: StructuredAnalysisTimeAggregation;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": StructuredAnalysisAggregationType;

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
      type: "Array<StructuredAnalysisCompute>",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<StructuredAnalysisGroupBy>",
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "double",
    },
    sort: {
      baseName: "sort",
      type: "AnalysisAggregationSort",
    },
    timeAggregation: {
      baseName: "time_aggregation",
      type: "StructuredAnalysisTimeAggregation",
    },
    type: {
      baseName: "type",
      type: "StructuredAnalysisAggregationType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StructuredAnalysisAggregation.attributeTypeMap;
  }

  public constructor() {}
}
