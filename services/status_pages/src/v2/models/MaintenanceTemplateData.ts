import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceTemplateDataAttributes } from "./MaintenanceTemplateDataAttributes";
import { MaintenanceTemplateDataRelationships } from "./MaintenanceTemplateDataRelationships";
import { PatchMaintenanceTemplateRequestDataType } from "./PatchMaintenanceTemplateRequestDataType";

/**
 * The data object for a maintenance template.
 */
export class MaintenanceTemplateData {
  /**
   * The attributes of a maintenance template.
   */
  "attributes"?: MaintenanceTemplateDataAttributes;
  /**
   * The ID of the maintenance template.
   */
  "id"?: string;
  /**
   * The relationships of a maintenance template.
   */
  "relationships"?: MaintenanceTemplateDataRelationships;
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
    attributes: {
      baseName: "attributes",
      type: "MaintenanceTemplateDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "MaintenanceTemplateDataRelationships",
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
    return MaintenanceTemplateData.attributeTypeMap;
  }

  public constructor() {}
}
