import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchMaintenanceTemplateRequestDataType } from "./PatchMaintenanceTemplateRequestDataType";

/**
 * The data object identifying the template the maintenance was created from.
 */
export class MaintenanceDataRelationshipsTemplateData {
  /**
   * The ID of the maintenance template.
   */
  "id": string;
  /**
   * Maintenance templates resource type.
   */
  "type": PatchMaintenanceTemplateRequestDataType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "PatchMaintenanceTemplateRequestDataType",
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
    return MaintenanceDataRelationshipsTemplateData.attributeTypeMap;
  }

  public constructor() {}
}
