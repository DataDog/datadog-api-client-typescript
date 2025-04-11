import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsFilter } from "./LogsFilter";

/**
 * Object describing the logs filter.
 */
export class LogsCategoryProcessorCategory {
  /**
   * Filter for logs.
   */
  "filter"?: LogsFilter;
  /**
   * Value to assign to the target attribute.
   */
  "name"?: string;
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
      type: "LogsFilter",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return LogsCategoryProcessorCategory.attributeTypeMap;
  }

  public constructor() {}
}
