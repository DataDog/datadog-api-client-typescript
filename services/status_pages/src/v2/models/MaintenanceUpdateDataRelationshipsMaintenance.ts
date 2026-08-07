import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceUpdateDataRelationshipsMaintenanceData } from "./MaintenanceUpdateDataRelationshipsMaintenanceData";

/**
 * The parent maintenance of the update.
 */
export class MaintenanceUpdateDataRelationshipsMaintenance {
  /**
   * The maintenance linked to a maintenance update.
   */
  "data": MaintenanceUpdateDataRelationshipsMaintenanceData;
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
      type: "MaintenanceUpdateDataRelationshipsMaintenanceData",
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
    return MaintenanceUpdateDataRelationshipsMaintenance.attributeTypeMap;
  }

  public constructor() {}
}
