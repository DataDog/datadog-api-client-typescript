import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogQueryDefinitionGroupBySort } from "./LogQueryDefinitionGroupBySort";

/**
 * Defined items in the group.
 */
export class LogQueryDefinitionGroupBy {
  /**
   * Facet name.
   */
  "facet": string;
  /**
   * Maximum number of items in the group.
   */
  "limit"?: number;
  /**
   * Define a sorting method.
   */
  "sort"?: LogQueryDefinitionGroupBySort;
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
    facet: {
      baseName: "facet",
      type: "string",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "number",
      format: "int64",
    },
    sort: {
      baseName: "sort",
      type: "LogQueryDefinitionGroupBySort",
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
    return LogQueryDefinitionGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
