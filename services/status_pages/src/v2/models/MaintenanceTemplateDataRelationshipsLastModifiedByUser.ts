import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceTemplateDataRelationshipsLastModifiedByUserData } from "./MaintenanceTemplateDataRelationshipsLastModifiedByUserData";

/**
 * The Datadog user who last modified the maintenance template.
 */
export class MaintenanceTemplateDataRelationshipsLastModifiedByUser {
  /**
   * The data object identifying the Datadog user who last modified the maintenance template.
   */
  "data": MaintenanceTemplateDataRelationshipsLastModifiedByUserData;
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
      type: "MaintenanceTemplateDataRelationshipsLastModifiedByUserData",
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
    return MaintenanceTemplateDataRelationshipsLastModifiedByUser.attributeTypeMap;
  }

  public constructor() {}
}
