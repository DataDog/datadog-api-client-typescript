import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaintenanceDataAttributesComponentsAffectedItems } from "./MaintenanceDataAttributesComponentsAffectedItems";
import { MaintenanceDataAttributesStatus } from "./MaintenanceDataAttributesStatus";
import { MaintenanceDataAttributesUpdatesItems } from "./MaintenanceDataAttributesUpdatesItems";

/**
 * The attributes of a maintenance.
 */
export class MaintenanceDataAttributes {
  /**
   * Timestamp of when the maintenance was completed.
   */
  "completedDate"?: Date;
  /**
   * The description shown when the maintenance is completed.
   */
  "completedDescription"?: string;
  /**
   * Components affected by the maintenance.
   */
  "componentsAffected"?: Array<MaintenanceDataAttributesComponentsAffectedItems>;
  /**
   * The description shown while the maintenance is in progress.
   */
  "inProgressDescription"?: string;
  /**
   * Timestamp of when the maintenance was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * Timestamp of when the maintenance was published.
   */
  "publishedDate"?: Date;
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
   * Title of the maintenance.
   */
  "title"?: string;
  /**
   * Past updates made to the maintenance.
   */
  "updates"?: Array<MaintenanceDataAttributesUpdatesItems>;
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
      type: "Array<MaintenanceDataAttributesComponentsAffectedItems>",
    },
    inProgressDescription: {
      baseName: "in_progress_description",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    publishedDate: {
      baseName: "published_date",
      type: "Date",
      format: "date-time",
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
    updates: {
      baseName: "updates",
      type: "Array<MaintenanceDataAttributesUpdatesItems>",
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
    return MaintenanceDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
