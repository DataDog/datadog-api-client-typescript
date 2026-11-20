import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApmDependencyStat } from "./ApmDependencyStat";
import { FormulaApmDependencyStatsQueryDataSource } from "./FormulaApmDependencyStatsQueryDataSource";

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
