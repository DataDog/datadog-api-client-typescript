import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceWindowUpdate } from "./MaintenanceWindowUpdate";

/**
 * Request payload for updating a maintenance window.
 */
export class MaintenanceWindowUpdateRequest {
  /**
   * Data object for updating a maintenance window.
   */
  "data": MaintenanceWindowUpdate;
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
      type: "MaintenanceWindowUpdate",
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
    return MaintenanceWindowUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
