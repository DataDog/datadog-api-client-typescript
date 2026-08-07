import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceUpdateDataRelationshipsUserData } from "./MaintenanceUpdateDataRelationshipsUserData";

/**
 * A user relationship of a maintenance update.
 */
export class MaintenanceUpdateDataRelationshipsUser {
  /**
   * The data object identifying a Datadog user linked to a maintenance update.
   */
  "data": MaintenanceUpdateDataRelationshipsUserData;
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
      type: "MaintenanceUpdateDataRelationshipsUserData",
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
    return MaintenanceUpdateDataRelationshipsUser.attributeTypeMap;
  }

  public constructor() {}
}
