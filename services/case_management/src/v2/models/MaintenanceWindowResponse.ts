import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceWindow } from "./MaintenanceWindow";

/**
 * Response containing a single maintenance window.
 */
export class MaintenanceWindowResponse {
  /**
   * A maintenance window that defines a scheduled time period during which case-related notifications and automation rules are suppressed. Each maintenance window applies to cases matching a specified query.
   */
  "data": MaintenanceWindow;
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
    data: {
      baseName: "data",
      type: "MaintenanceWindow",
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
    return MaintenanceWindowResponse.attributeTypeMap;
  }

  public constructor() {}
}
