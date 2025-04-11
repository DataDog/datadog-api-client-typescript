import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApmStatsQueryColumnType } from "./ApmStatsQueryColumnType";
import { ApmStatsQueryRowType } from "./ApmStatsQueryRowType";

/**
 * The APM stats query for table and distributions widgets.
 */
export class ApmStatsQueryDefinition {
  /**
   * Column properties used by the front end for display.
   */
  "columns"?: Array<ApmStatsQueryColumnType>;
  /**
   * Environment name.
   */
  "env": string;
  /**
   * Operation name associated with service.
   */
  "name": string;
  /**
   * The organization's host group name and value.
   */
  "primaryTag": string;
  /**
   * Resource name.
   */
  "resource"?: string;
  /**
   * The level of detail for the request.
   */
  "rowType": ApmStatsQueryRowType;
  /**
   * Service name.
   */
  "service": string;
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
    columns: {
      baseName: "columns",
      type: "Array<ApmStatsQueryColumnType>",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApmStatsQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
