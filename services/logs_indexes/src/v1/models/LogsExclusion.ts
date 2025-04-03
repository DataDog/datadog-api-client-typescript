import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsExclusionFilter } from "./LogsExclusionFilter";

/**
 * Represents the index exclusion filter object from configuration API.
 */
export class LogsExclusion {
  /**
   * Exclusion filter is defined by a query, a sampling rule, and a active/inactive toggle.
   */
  "filter"?: LogsExclusionFilter;
  /**
   * Whether or not the exclusion filter is active.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the index exclusion filter.
   */
  "name": string;
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
    filter: {
      baseName: "filter",
      type: "LogsExclusionFilter",
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return LogsExclusion.attributeTypeMap;
  }

  public constructor() {}
}
