import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApmDependencyStatName } from "./ApmDependencyStatName";
import { ApmDependencyStatsDataSource } from "./ApmDependencyStatsDataSource";

/**
 * A query for APM dependency statistics between services, such as call latency and error rates.
 */
export class ApmDependencyStatsQuery {
  /**
   * Organization UUIDs to query when using [cross-organization visibility](/account_management/org_settings/cross_org_visibility/). Limited to one organization UUID.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * A data source for APM dependency statistics queries.
   */
  "dataSource": ApmDependencyStatsDataSource;
  /**
   * The environment to query.
   */
  "env": string;
  /**
   * Determines whether stats for upstream or downstream dependencies should be queried.
   */
  "isUpstream"?: boolean;
  /**
   * The variable name for use in formulas.
   */
  "name": string;
  /**
   * The APM operation name.
   */
  "operationName": string;
  /**
   * The name of the second primary tag used within APM; required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog.
   */
  "primaryTagName"?: string;
  /**
   * Filter APM data by the second primary tag. `primary_tag_name` must also be specified.
   */
  "primaryTagValue"?: string;
  /**
   * The resource name to filter by.
   */
  "resourceName": string;
  /**
   * The service name to filter by.
   */
  "service": string;
  /**
   * The APM dependency statistic to query.
   */
  "stat": ApmDependencyStatName;
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
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "ApmDependencyStatsDataSource",
      required: true,
    },
    env: {
      baseName: "env",
      type: "string",
      required: true,
    },
    isUpstream: {
      baseName: "is_upstream",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    operationName: {
      baseName: "operation_name",
      type: "string",
      required: true,
    },
    primaryTagName: {
      baseName: "primary_tag_name",
      type: "string",
    },
    primaryTagValue: {
      baseName: "primary_tag_value",
      type: "string",
    },
    resourceName: {
      baseName: "resource_name",
      type: "string",
      required: true,
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
    stat: {
      baseName: "stat",
      type: "ApmDependencyStatName",
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
    return ApmDependencyStatsQuery.attributeTypeMap;
  }

  public constructor() {}
}
