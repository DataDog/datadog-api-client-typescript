/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApmStatsQueryRowType } from "./ApmStatsQueryRowType";
import { QueryTableColumnRequest } from "./QueryTableColumnRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ApmStatsQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns"?: Array<QueryTableColumnRequest>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "env": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "primaryTag": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "resource"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "rowType": ApmStatsQueryRowType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "service": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<QueryTableColumnRequest>",
    },
    env: {
      baseName: "env",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    primaryTag: {
      baseName: "primary_tag",
      type: "string",
      required: true,
    },
    resource: {
      baseName: "resource",
      type: "string",
    },
    rowType: {
      baseName: "row_type",
      type: "ApmStatsQueryRowType",
      required: true,
    },
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApmStatsQuery.attributeTypeMap;
  }

  public constructor() {}
}
