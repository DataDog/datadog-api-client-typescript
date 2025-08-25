/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentTodoAssignee } from "./IncidentTodoAssignee";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident todo's attributes.
 */
export class IncidentTodoAttributes {
  /**
   * Array of todo assignees.
   */
  "assignees": Array<IncidentTodoAssignee>;
  /**
   * Timestamp when the todo was completed.
   */
  "completed"?: string;
  /**
   * The follow-up task's content.
   */
  "content": string;
  /**
   * Timestamp when the incident todo was created.
   */
  "created"?: Date;
  /**
   * Timestamp when the todo should be completed by.
   */
  "dueDate"?: string;
  /**
   * UUID of the incident this todo is connected to.
   */
  "incidentId"?: string;
  /**
   * Timestamp when the incident todo was last modified.
   */
  "modified"?: Date;

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
    assignees: {
      baseName: "assignees",
      type: "Array<IncidentTodoAssignee>",
      required: true,
    },
    completed: {
      baseName: "completed",
      type: "string",
    },
    content: {
      baseName: "content",
      type: "string",
      required: true,
    },
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    dueDate: {
      baseName: "due_date",
      type: "string",
    },
    incidentId: {
      baseName: "incident_id",
      type: "string",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentTodoAttributes.attributeTypeMap;
  }

  public constructor() {}
}
