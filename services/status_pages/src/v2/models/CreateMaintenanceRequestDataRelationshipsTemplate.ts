import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateMaintenanceRequestDataRelationshipsTemplateData } from "./CreateMaintenanceRequestDataRelationshipsTemplateData";

/**
 * The template used to create the maintenance.
 */
export class CreateMaintenanceRequestDataRelationshipsTemplate {
  /**
   * The data object identifying the template used to create the maintenance.
   */
  "data": CreateMaintenanceRequestDataRelationshipsTemplateData;
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
      type: "CreateMaintenanceRequestDataRelationshipsTemplateData",
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
    return CreateMaintenanceRequestDataRelationshipsTemplate.attributeTypeMap;
  }

  public constructor() {}
}
