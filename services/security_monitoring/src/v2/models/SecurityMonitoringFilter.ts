import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringFilterAction } from "./SecurityMonitoringFilterAction";

/**
 * The rule's suppression filter.
 */
export class SecurityMonitoringFilter {
  /**
   * The type of filtering action.
   */
  "action"?: SecurityMonitoringFilterAction;
  /**
   * Query for selecting logs to apply the filtering action.
   */
  "query"?: string;
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
    action: {
      baseName: "action",
      type: "SecurityMonitoringFilterAction",
    },
    query: {
      baseName: "query",
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
    return SecurityMonitoringFilter.attributeTypeMap;
  }

  public constructor() {}
}
