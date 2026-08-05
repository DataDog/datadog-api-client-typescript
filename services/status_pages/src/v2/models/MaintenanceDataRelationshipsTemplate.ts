import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceDataRelationshipsTemplateData } from "./MaintenanceDataRelationshipsTemplateData";

/**
 * The template the maintenance was created from.
 */
export class MaintenanceDataRelationshipsTemplate {
  /**
   * The data object identifying the template the maintenance was created from.
   */
  "data": MaintenanceDataRelationshipsTemplateData;
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
      type: "MaintenanceDataRelationshipsTemplateData",
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
    return MaintenanceDataRelationshipsTemplate.attributeTypeMap;
  }

  public constructor() {}
}
