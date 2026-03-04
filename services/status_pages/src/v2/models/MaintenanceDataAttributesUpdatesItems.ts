import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems } from "./MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems";

export class MaintenanceDataAttributesUpdatesItems {
  /**
   * The components affected at the time of the update.
   */
  "componentsAffected"?: Array<MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems>;
  /**
   * Timestamp of when the update was created.
   */
  "createdAt"?: Date;
  /**
   * Description of the update.
   */
  "description"?: string;
  /**
   * Identifier of the update.
   */
  "id"?: string;
  /**
   * Whether the update was applied manually by a user (true) or automatically by the system (false).
   */
  "manualTransition"?: boolean;
  /**
   * Timestamp of when the update was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * Timestamp of when the update started.
   */
  "startedAt"?: Date;
  /**
   * The status of the update.
   */
  "status"?: string;
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
    componentsAffected: {
      baseName: "components_affected",
      type: "Array<MaintenanceDataAttributesUpdatesItemsComponentsAffectedItems>",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    manualTransition: {
      baseName: "manual_transition",
      type: "boolean",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    startedAt: {
      baseName: "started_at",
      type: "Date",
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "string",
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
    return MaintenanceDataAttributesUpdatesItems.attributeTypeMap;
  }

  public constructor() {}
}
