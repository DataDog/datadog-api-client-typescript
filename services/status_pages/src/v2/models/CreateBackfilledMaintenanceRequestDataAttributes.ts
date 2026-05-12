import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateBackfilledMaintenanceRequestDataAttributesUpdatesItems } from "./CreateBackfilledMaintenanceRequestDataAttributesUpdatesItems";

/**
 * The supported attributes for creating a backfilled maintenance.
 */
export class CreateBackfilledMaintenanceRequestDataAttributes {
  /**
   * The title of the backfilled maintenance.
   */
  "title": string;
  /**
   * The list of updates. Exactly two updates are required: the start (`in_progress`) and the end (`completed`).
   */
  "updates": [
    CreateBackfilledMaintenanceRequestDataAttributesUpdatesItems,
    CreateBackfilledMaintenanceRequestDataAttributesUpdatesItems,
  ];
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
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    updates: {
      baseName: "updates",
      type: "[CreateBackfilledMaintenanceRequestDataAttributesUpdatesItems, CreateBackfilledMaintenanceRequestDataAttributesUpdatesItems]",
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
    return CreateBackfilledMaintenanceRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
