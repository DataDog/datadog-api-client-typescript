import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceWindowCreate } from "./MaintenanceWindowCreate";

/**
 * Request payload for creating a maintenance window.
 */
export class MaintenanceWindowCreateRequest {
  /**
   * Data object for creating a maintenance window.
   */
  "data": MaintenanceWindowCreate;
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
      type: "MaintenanceWindowCreate",
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
    return MaintenanceWindowCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
