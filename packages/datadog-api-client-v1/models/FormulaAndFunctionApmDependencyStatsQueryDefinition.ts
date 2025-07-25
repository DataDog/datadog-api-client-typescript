/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionApmDependencyStatName } from "./FormulaAndFunctionApmDependencyStatName";
import { FormulaAndFunctionApmDependencyStatsDataSource } from "./FormulaAndFunctionApmDependencyStatsDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A formula and functions APM dependency stats query.
 */
export class FormulaAndFunctionApmDependencyStatsQueryDefinition {
  /**
   * The source organization UUID for cross organization queries. Feature in Private Beta.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Data source for APM dependency stats queries.
   */
  "dataSource": FormulaAndFunctionApmDependencyStatsDataSource;
  /**
   * APM environment.
   */
  "env": string;
  /**
   * Determines whether stats for upstream or downstream dependencies should be queried.
   */
  "isUpstream"?: boolean;
  /**
   * Name of query to use in formulas.
   */
  "name": string;
  /**
   * Name of operation on service.
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
   * APM resource.
   */
  "resourceName": string;
  /**
   * APM service.
   */
  "service": string;
  /**
   * APM statistic.
   */
  "stat": FormulaAndFunctionApmDependencyStatName;

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
      type: "FormulaAndFunctionApmDependencyStatsDataSource",
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
      type: "FormulaAndFunctionApmDependencyStatName",
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
    return FormulaAndFunctionApmDependencyStatsQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
