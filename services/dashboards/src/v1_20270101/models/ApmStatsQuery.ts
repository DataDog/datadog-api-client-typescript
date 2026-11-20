import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApmStatsQueryRowType } from "./ApmStatsQueryRowType";
import { QueryTableColumnRequest } from "./QueryTableColumnRequest";

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
