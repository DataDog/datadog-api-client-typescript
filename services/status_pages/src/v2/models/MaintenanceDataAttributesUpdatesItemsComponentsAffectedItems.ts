import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchMaintenanceRequestDataAttributesComponentsAffectedItemsStatus } from "./PatchMaintenanceRequestDataAttributesComponentsAffectedItemsStatus";

export class MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems {
  /**
   * Identifier of the component affected at the time of the update.
   */
  "id": string;
  /**
   * The name of the component affected at the time of the update.
   */
  "name"?: string;
  /**
   * The status of the component.
   */
  "status": PatchMaintenanceRequestDataAttributesComponentsAffectedItemsStatus;
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
      format: "uuid",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "PatchMaintenanceRequestDataAttributesComponentsAffectedItemsStatus",
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
    return MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems.attributeTypeMap;
  }

  public constructor() {}
}
