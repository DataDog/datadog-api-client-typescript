import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApmMetricsDataSource } from "./ApmMetricsDataSource";
import { ApmMetricsSpanKind } from "./ApmMetricsSpanKind";
import { ApmMetricsStat } from "./ApmMetricsStat";

/**
 * A query for APM trace metrics such as hits, errors, and latency percentiles, aggregated across services.
 */
export class ApmMetricsQuery {
  /**
   * A data source for APM metrics queries.
   */
  "dataSource": ApmMetricsDataSource;
  /**
   * Optional fields to group the query results by.
   */
  "groupBy"?: Array<string>;
  /**
   * The variable name for use in formulas.
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
   * Additional filters for the query using metrics query syntax (for example, env, primary_tag).
   */
  "queryFilter"?: string;
  /**
   * The resource hash for exact matching.
   */
  "resourceHash"?: string;
  /**
   * The full name of a specific resource to filter by.
   */
  "resourceName"?: string;
  /**
   * The service name to filter by.
   */
  "service"?: string;
  /**
   * Describes the relationship between the span, its parents, and its children in a trace.
   */
  "spanKind"?: ApmMetricsSpanKind;
  /**
   * The APM metric statistic to query.
   */
  "stat": ApmMetricsStat;
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
      type: "ApmMetricsDataSource",
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
      type: "ApmMetricsSpanKind",
    },
    stat: {
      baseName: "stat",
      type: "ApmMetricsStat",
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
    return ApmMetricsQuery.attributeTypeMap;
  }

  public constructor() {}
}
