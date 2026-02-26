import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceDataAttributesStatus } from "./MaintenanceDataAttributesStatus";
import { PatchMaintenanceRequestDataAttributesComponentsAffectedItems } from "./PatchMaintenanceRequestDataAttributesComponentsAffectedItems";

/**
 * The supported attributes for updating a maintenance.
 */
export class PatchMaintenanceRequestDataAttributes {
  /**
   * Timestamp of when the maintenance was completed.
   */
  "completedDate"?: Date;
  /**
   * The description shown when the maintenance is completed.
   */
  "completedDescription"?: string;
  /**
   * The components affected by the maintenance.
   */
  "componentsAffected"?: Array<PatchMaintenanceRequestDataAttributesComponentsAffectedItems>;
  /**
   * The description shown while the maintenance is in progress.
   */
  "inProgressDescription"?: string;
  /**
   * The description shown when the maintenance is scheduled.
   */
  "scheduledDescription"?: string;
  /**
   * Timestamp of when the maintenance is scheduled to start.
   */
  "startDate"?: Date;
  /**
   * The status of the maintenance.
   */
  "status"?: MaintenanceDataAttributesStatus;
  /**
   * The title of the maintenance.
   */
  "title"?: string;
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
    completedDate: {
      baseName: "completed_date",
      type: "Date",
      format: "date-time",
    },
    completedDescription: {
      baseName: "completed_description",
      type: "string",
    },
    componentsAffected: {
      baseName: "components_affected",
      type: "Array<PatchMaintenanceRequestDataAttributesComponentsAffectedItems>",
    },
    inProgressDescription: {
      baseName: "in_progress_description",
      type: "string",
    },
    scheduledDescription: {
      baseName: "scheduled_description",
      type: "string",
    },
    startDate: {
      baseName: "start_date",
      type: "Date",
      format: "date-time",
    },
    status: {
      baseName: "status",
      type: "MaintenanceDataAttributesStatus",
    },
    title: {
      baseName: "title",
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
    return PatchMaintenanceRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
