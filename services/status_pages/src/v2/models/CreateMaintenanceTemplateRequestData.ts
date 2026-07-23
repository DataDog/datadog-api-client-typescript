import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateMaintenanceTemplateRequestDataAttributes } from "./CreateMaintenanceTemplateRequestDataAttributes";
import { PatchMaintenanceTemplateRequestDataType } from "./PatchMaintenanceTemplateRequestDataType";

/**
 * The data object for creating a maintenance template.
 */
export class CreateMaintenanceTemplateRequestData {
  /**
   * The attributes for creating a maintenance template.
   */
  "attributes"?: CreateMaintenanceTemplateRequestDataAttributes;
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
      type: "CreateMaintenanceTemplateRequestDataAttributes",
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
    return CreateMaintenanceTemplateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
