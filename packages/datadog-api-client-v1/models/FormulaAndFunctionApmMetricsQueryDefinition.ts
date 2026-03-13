/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionApmMetricsDataSource } from "./FormulaAndFunctionApmMetricsDataSource";
import { FormulaAndFunctionApmMetricsSpanKind } from "./FormulaAndFunctionApmMetricsSpanKind";
import { FormulaAndFunctionApmMetricStatName } from "./FormulaAndFunctionApmMetricStatName";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A formula and functions APM metrics query.
 */
export class FormulaAndFunctionApmMetricsQueryDefinition {
  /**
   * Data source for APM metrics queries.
   */
  "dataSource": FormulaAndFunctionApmMetricsDataSource;
  /**
   * Optional fields to group the query results by.
   */
  "groupBy"?: Array<string>;
  /**
   * Name of this query to use in formulas.
   */
  "name": string;
  /**
   * Optional operation mode to aggregate across operation names.
   */
  "operationMode"?: string;
  /**
   * Name of operation on service. If not provided, the primary operation name is used.
   */
  "operationName"?: string;
  /**
   * Tags to query for a specific downstream entity (peer.service, peer.db_instance, peer.s3, peer.s3.bucket, etc.).
   */
  "peerTags"?: Array<string>;
  /**
   * Additional filters for the query using metrics query syntax (e.g., env, primary_tag).
   */
  "queryFilter"?: string;
  /**
   * The hash of a specific resource to filter by.
   */
  "resourceHash"?: string;
  /**
   * The full name of a specific resource to filter by.
   */
  "resourceName"?: string;
  /**
   * APM service name.
   */
  "service"?: string;
  /**
   * Describes the relationship between the span, its parents, and its children in a trace.
   */
  "spanKind"?: FormulaAndFunctionApmMetricsSpanKind;
  /**
   * APM metric stat name.
   */
  "stat": FormulaAndFunctionApmMetricStatName;

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
      type: "FormulaAndFunctionApmMetricsDataSource",
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
    service: {
      baseName: "service",
      type: "string",
    },
    spanKind: {
      baseName: "span_kind",
      type: "FormulaAndFunctionApmMetricsSpanKind",
    },
    stat: {
      baseName: "stat",
      type: "FormulaAndFunctionApmMetricStatName",
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
    return FormulaAndFunctionApmMetricsQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
