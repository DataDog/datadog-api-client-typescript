/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a maintenance template.
 */
export class MaintenanceTemplateDataAttributes {
  /**
   * The description shown when a maintenance created from this template is completed.
   */
  "completedDescription"?: string;
  /**
   * The IDs of the components affected by a maintenance created from this template.
   */
  "componentIds"?: Array<string>;
  /**
   * Timestamp of when the maintenance template was created.
   */
  "createdAt"?: Date;
  /**
   * The description shown while a maintenance created from this template is in progress.
   */
  "inProgressDescription"?: string;
  /**
   * The title used for a maintenance created from this template.
   */
  "maintenanceTitle"?: string;
  /**
   * Timestamp of when the maintenance template was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * The name of the maintenance template.
   */
  "name"?: string;
  /**
   * The description shown when a maintenance created from this template is scheduled.
   */
  "scheduledDescription"?: string;

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
    completedDescription: {
      baseName: "completed_description",
      type: "string",
    },
    componentIds: {
      baseName: "component_ids",
      type: "Array<string>",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    inProgressDescription: {
      baseName: "in_progress_description",
      type: "string",
    },
    maintenanceTitle: {
      baseName: "maintenance_title",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    scheduledDescription: {
      baseName: "scheduled_description",
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
    return MaintenanceTemplateDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
