import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateMaintenanceRequestDataRelationshipsTemplate } from "./CreateMaintenanceRequestDataRelationshipsTemplate";

/**
 * The supported relationships for creating a maintenance.
 */
export class CreateMaintenanceRequestDataRelationships {
  /**
   * The template used to create the maintenance.
   */
  "template"?: CreateMaintenanceRequestDataRelationshipsTemplate;
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
    template: {
      baseName: "template",
      type: "CreateMaintenanceRequestDataRelationshipsTemplate",
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
    return CreateMaintenanceRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
