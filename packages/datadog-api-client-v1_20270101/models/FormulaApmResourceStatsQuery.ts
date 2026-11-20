/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApmResourceStat } from "./ApmResourceStat";
import { FormulaApmResourceStatsQueryDataSource } from "./FormulaApmResourceStatsQueryDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaApmResourceStatsQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaApmResourceStatsQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "env": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy": Array<string>;
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
  "peerService"?: string;
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
  "resourceName"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "service": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "stat": ApmResourceStat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "version"?: string;

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
      type: "FormulaApmResourceStatsQueryDataSource",
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
      required: true,
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
    peerService: {
      baseName: "peer.service",
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
      type: "ApmResourceStat",
      required: true,
    },
    version: {
      baseName: "version",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaApmResourceStatsQuery.attributeTypeMap;
  }

  public constructor() {}
}
