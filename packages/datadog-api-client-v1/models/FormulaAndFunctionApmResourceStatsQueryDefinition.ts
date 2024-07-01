/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionApmResourceStatName } from "./FormulaAndFunctionApmResourceStatName";
import { FormulaAndFunctionApmResourceStatsDataSource } from "./FormulaAndFunctionApmResourceStatsDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * APM resource stats query using formulas and functions.
 */
export class FormulaAndFunctionApmResourceStatsQueryDefinition {
  /**
   * The source organization UUID for cross organization queries. Feature in Private Beta.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Data source for APM resource stats queries.
   */
  "dataSource": FormulaAndFunctionApmResourceStatsDataSource;
  /**
   * APM environment.
   */
  "env": string;
  /**
   * Array of fields to group results by.
   */
  "groupBy"?: Array<string>;
  /**
   * Name of this query to use in formulas.
   */
  "name": string;
  /**
   * Name of operation on service.
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
   * APM resource name.
   */
  "resourceName"?: string;
  /**
   * APM service name.
   */
  "service": string;
  /**
   * APM resource stat name.
   */
  "stat": FormulaAndFunctionApmResourceStatName;

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
      type: "FormulaAndFunctionApmResourceStatsDataSource",
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
      type: "FormulaAndFunctionApmResourceStatName",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaAndFunctionApmResourceStatsQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
