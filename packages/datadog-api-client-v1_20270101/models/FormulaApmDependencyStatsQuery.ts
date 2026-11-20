/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApmDependencyStat } from "./ApmDependencyStat";
import { FormulaApmDependencyStatsQueryDataSource } from "./FormulaApmDependencyStatsQueryDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaApmDependencyStatsQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaApmDependencyStatsQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "env": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "isUpstream"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "operationName": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "primaryTagName"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "primaryTagValue"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "resourceName": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "service": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "stat": ApmDependencyStat;

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
      type: "FormulaApmDependencyStatsQueryDataSource",
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
      type: "ApmDependencyStat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaApmDependencyStatsQuery.attributeTypeMap;
  }

  public constructor() {}
}
