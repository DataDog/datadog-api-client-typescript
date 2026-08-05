import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateBackfilledMaintenanceRequestDataAttributes } from "./CreateBackfilledMaintenanceRequestDataAttributes";
import { CreateBackfilledMaintenanceRequestDataRelationships } from "./CreateBackfilledMaintenanceRequestDataRelationships";
import { PatchMaintenanceRequestDataType } from "./PatchMaintenanceRequestDataType";

/**
 * The data object for creating a backfilled maintenance.
 */
export class CreateBackfilledMaintenanceRequestData {
  /**
   * The supported attributes for creating a backfilled maintenance.
   */
  "attributes"?: CreateBackfilledMaintenanceRequestDataAttributes;
  /**
   * The supported relationships for creating a backfilled maintenance.
   */
  "relationships"?: CreateBackfilledMaintenanceRequestDataRelationships;
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
      type: "CreateBackfilledMaintenanceRequestDataAttributes",
    },
    relationships: {
      baseName: "relationships",
      type: "CreateBackfilledMaintenanceRequestDataRelationships",
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
    return CreateBackfilledMaintenanceRequestData.attributeTypeMap;
  }

  public constructor() {}
}
