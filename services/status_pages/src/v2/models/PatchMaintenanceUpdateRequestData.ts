import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchMaintenanceUpdateRequestDataAttributes } from "./PatchMaintenanceUpdateRequestDataAttributes";
import { PatchMaintenanceUpdateRequestDataType } from "./PatchMaintenanceUpdateRequestDataType";

/**
 * The data object for editing a maintenance update.
 */
export class PatchMaintenanceUpdateRequestData {
  /**
   * Attributes for editing a maintenance update.
   */
  "attributes"?: PatchMaintenanceUpdateRequestDataAttributes;
  /**
   * The ID of the maintenance update to edit. Must match the `update_id` path parameter.
   */
  "id": string;
  /**
   * Maintenance updates resource type.
   */
  "type": PatchMaintenanceUpdateRequestDataType;
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
      type: "PatchMaintenanceUpdateRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "PatchMaintenanceUpdateRequestDataType",
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
    return PatchMaintenanceUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
