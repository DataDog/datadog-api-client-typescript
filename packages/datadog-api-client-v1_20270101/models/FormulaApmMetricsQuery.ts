/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApmMetricStat } from "./ApmMetricStat";
import { FormulaApmMetricsQueryDataSource } from "./FormulaApmMetricsQueryDataSource";
import { FormulaSemanticMode } from "./FormulaSemanticMode";
import { SpanKind } from "./SpanKind";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaApmMetricsQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "byocCluster"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaApmMetricsQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "operationMode"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "operationName"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "peerTags"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryFilter"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "resourceHash"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "resourceName"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "semanticMode"?: FormulaSemanticMode;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "service"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "spanKind"?: SpanKind;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "stat": ApmMetricStat;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    byocCluster: {
      baseName: "byoc_cluster",
      type: "string",
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaApmMetricsQueryDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    operationMode: {
      baseName: "operation_mode",
      type: "string",
    },
    operationName: {
      baseName: "operation_name",
      type: "string",
    },
    peerTags: {
      baseName: "peer_tags",
      type: "Array<string>",
    },
    queryFilter: {
      baseName: "query_filter",
      type: "string",
    },
    resourceHash: {
      baseName: "resource_hash",
      type: "string",
    },
    resourceName: {
      baseName: "resource_name",
      type: "string",
    },
    semanticMode: {
      baseName: "semantic_mode",
      type: "FormulaSemanticMode",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    spanKind: {
      baseName: "span_kind",
      type: "SpanKind",
    },
    stat: {
      baseName: "stat",
      type: "ApmMetricStat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaApmMetricsQuery.attributeTypeMap;
  }

  public constructor() {}
}
