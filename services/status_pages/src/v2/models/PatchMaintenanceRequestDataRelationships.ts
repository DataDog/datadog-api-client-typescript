import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchMaintenanceRequestDataRelationshipsTemplate } from "./PatchMaintenanceRequestDataRelationshipsTemplate";

/**
 * The supported relationships for updating a maintenance.
 */
export class PatchMaintenanceRequestDataRelationships {
  /**
   * The template used to create the maintenance.
   */
  "template"?: PatchMaintenanceRequestDataRelationshipsTemplate;
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
      type: "PatchMaintenanceRequestDataRelationshipsTemplate",
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
    return PatchMaintenanceRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
