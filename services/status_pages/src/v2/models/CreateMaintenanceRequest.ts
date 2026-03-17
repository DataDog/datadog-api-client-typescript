import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateMaintenanceRequestData } from "./CreateMaintenanceRequestData";

/**
 * Request object for creating a maintenance.
 */
export class CreateMaintenanceRequest {
  /**
   * The data object for creating a maintenance.
   */
  "data"?: CreateMaintenanceRequestData;
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
      type: "CreateMaintenanceRequestData",
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
    return CreateMaintenanceRequest.attributeTypeMap;
  }

  public constructor() {}
}
