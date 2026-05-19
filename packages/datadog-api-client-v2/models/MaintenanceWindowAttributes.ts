/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a maintenance window, including its schedule and the query that determines which cases are affected.
 */
export class MaintenanceWindowAttributes {
  /**
   * The UUID of the user who created this maintenance window. Read-only.
   */
  "createdBy"?: string;
  /**
   * The ISO 8601 timestamp when the maintenance window ends and normal notification behavior resumes.
   */
  "endAt": Date;
  /**
   * A human-readable name for the maintenance window (for example, `Database migration - Dec 15`).
   */
  "name": string;
  /**
   * A case search query that determines which cases are affected during the maintenance window. Uses the same syntax as the Case Management search bar.
   */
  "query": string;
  /**
   * The ISO 8601 timestamp when the maintenance window begins and notifications start being suppressed.
   */
  "startAt": Date;
  /**
   * The UUID of the user who last modified this maintenance window. Read-only.
   */
  "updatedBy"?: string;

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
    createdBy: {
      baseName: "created_by",
      type: "string",
    },
    endAt: {
      baseName: "end_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    startAt: {
      baseName: "start_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    updatedBy: {
      baseName: "updated_by",
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
    return MaintenanceWindowAttributes.attributeTypeMap;
  }

  public constructor() {}
}
