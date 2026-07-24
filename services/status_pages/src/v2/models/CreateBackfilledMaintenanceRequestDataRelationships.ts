import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateBackfilledMaintenanceRequestDataRelationshipsTemplate } from "./CreateBackfilledMaintenanceRequestDataRelationshipsTemplate";

/**
 * The supported relationships for creating a backfilled maintenance.
 */
export class CreateBackfilledMaintenanceRequestDataRelationships {
  /**
   * The template used to create the backfilled maintenance.
   */
  "template"?: CreateBackfilledMaintenanceRequestDataRelationshipsTemplate;
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
      type: "CreateBackfilledMaintenanceRequestDataRelationshipsTemplate",
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
    return CreateBackfilledMaintenanceRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
