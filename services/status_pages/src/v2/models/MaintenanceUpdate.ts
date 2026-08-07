import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceUpdateData } from "./MaintenanceUpdateData";

/**
 * Response object for a maintenance update.
 */
export class MaintenanceUpdate {
  /**
   * The data object for a maintenance update.
   */
  "data"?: MaintenanceUpdateData;
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
      type: "MaintenanceUpdateData",
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
    return MaintenanceUpdate.attributeTypeMap;
  }

  public constructor() {}
}
