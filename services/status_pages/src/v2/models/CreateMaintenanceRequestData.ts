import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateMaintenanceRequestDataAttributes } from "./CreateMaintenanceRequestDataAttributes";
import { CreateMaintenanceRequestDataRelationships } from "./CreateMaintenanceRequestDataRelationships";
import { PatchMaintenanceRequestDataType } from "./PatchMaintenanceRequestDataType";

/**
 * The data object for creating a maintenance.
 */
export class CreateMaintenanceRequestData {
  /**
   * The supported attributes for creating a maintenance.
   */
  "attributes": CreateMaintenanceRequestDataAttributes;
  /**
   * The supported relationships for creating a maintenance.
   */
  "relationships"?: CreateMaintenanceRequestDataRelationships;
  /**
   * Maintenances resource type.
   */
  "type": PatchMaintenanceRequestDataType;
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
      type: "CreateMaintenanceRequestDataAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "CreateMaintenanceRequestDataRelationships",
    },
    type: {
      baseName: "type",
      type: "PatchMaintenanceRequestDataType",
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
    return CreateMaintenanceRequestData.attributeTypeMap;
  }

  public constructor() {}
}
