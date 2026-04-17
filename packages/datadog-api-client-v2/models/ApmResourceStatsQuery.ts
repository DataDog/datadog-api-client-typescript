/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApmResourceStatName } from "./ApmResourceStatName";
import { ApmResourceStatsDataSource } from "./ApmResourceStatsDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A query for APM resource statistics such as latency, error rate, and hit count, grouped by resource name.
 */
export class ApmResourceStatsQuery {
  /**
   * A data source for APM resource statistics queries.
   */
  "dataSource": ApmResourceStatsDataSource;
  /**
   * The environment to query.
   */
  "env": string;
  /**
   * Tag keys to group results by.
   */
  "groupBy"?: Array<string>;
  /**
   * The variable name for use in formulas.
   */
  "name": string;
  /**
   * The APM operation name.
   */
  "operationName"?: string;
  /**
   * Name of the second primary tag used within APM. Required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog
   */
  "primaryTagName"?: string;
  /**
   * Value of the second primary tag by which to filter APM data. `primary_tag_name` must also be specified.
   */
  "primaryTagValue"?: string;
  /**
   * The resource name to filter by.
   */
  "resourceName"?: string;
  /**
   * The service name to filter by.
   */
  "service": string;
  /**
   * The APM resource statistic to query.
   */
  "stat": ApmResourceStatName;

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
      type: "ApmResourceStatsDataSource",
      required: true,
    },
    env: {
      baseName: "env",
      type: "string",
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
    operationName: {
      baseName: "operation_name",
      type: "string",
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
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
    stat: {
      baseName: "stat",
      type: "ApmResourceStatName",
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
    return ApmResourceStatsQuery.attributeTypeMap;
  }

  public constructor() {}
}
