import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceDataAttributes } from "./MaintenanceDataAttributes";
import { MaintenanceDataRelationships } from "./MaintenanceDataRelationships";
import { PatchMaintenanceRequestDataType } from "./PatchMaintenanceRequestDataType";

export class MaintenanceData {
  /**
   * The attributes of a maintenance.
   */
  "attributes"?: MaintenanceDataAttributes;
  /**
   * The ID of the maintenance.
   */
  "id"?: string;
  /**
   * The relationships of a maintenance.
   */
  "relationships"?: MaintenanceDataRelationships;
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
      type: "MaintenanceDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "MaintenanceDataRelationships",
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
    return MaintenanceData.attributeTypeMap;
  }

  public constructor() {}
}
