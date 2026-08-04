import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchMaintenanceTemplateRequestDataAttributes } from "./PatchMaintenanceTemplateRequestDataAttributes";
import { PatchMaintenanceTemplateRequestDataType } from "./PatchMaintenanceTemplateRequestDataType";

/**
 * The data object for updating a maintenance template.
 */
export class PatchMaintenanceTemplateRequestData {
  /**
   * The supported attributes for updating a maintenance template.
   */
  "attributes"?: PatchMaintenanceTemplateRequestDataAttributes;
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
    attributes: {
      baseName: "attributes",
      type: "PatchMaintenanceTemplateRequestDataAttributes",
    },
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
    return PatchMaintenanceTemplateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
