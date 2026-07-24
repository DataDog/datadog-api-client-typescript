import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceTemplateDataRelationshipsCreatedByUserData } from "./MaintenanceTemplateDataRelationshipsCreatedByUserData";

/**
 * The Datadog user who created the maintenance template.
 */
export class MaintenanceTemplateDataRelationshipsCreatedByUser {
  /**
   * The data object identifying the Datadog user who created the maintenance template.
   */
  "data": MaintenanceTemplateDataRelationshipsCreatedByUserData;
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
      type: "MaintenanceTemplateDataRelationshipsCreatedByUserData",
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
    return MaintenanceTemplateDataRelationshipsCreatedByUser.attributeTypeMap;
  }

  public constructor() {}
}
