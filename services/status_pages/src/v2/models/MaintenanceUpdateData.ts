import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceUpdateDataAttributes } from "./MaintenanceUpdateDataAttributes";
import { MaintenanceUpdateDataRelationships } from "./MaintenanceUpdateDataRelationships";
import { PatchMaintenanceUpdateRequestDataType } from "./PatchMaintenanceUpdateRequestDataType";

/**
 * The data object for a maintenance update.
 */
export class MaintenanceUpdateData {
  /**
   * Attributes of a maintenance update resource.
   */
  "attributes"?: MaintenanceUpdateDataAttributes;
  /**
   * The ID of the maintenance update.
   */
  "id": string;
  /**
   * Relationships of a maintenance update resource.
   */
  "relationships"?: MaintenanceUpdateDataRelationships;
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
      type: "MaintenanceUpdateDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "MaintenanceUpdateDataRelationships",
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
    return MaintenanceUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
