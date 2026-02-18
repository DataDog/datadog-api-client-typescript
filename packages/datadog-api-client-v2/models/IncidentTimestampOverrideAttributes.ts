/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimestampType } from "./TimestampType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an incident timestamp override.
 */
export class IncidentTimestampOverrideAttributes {
  /**
   * Timestamp of when the override was created.
   */
  "createdAt": Date;
  /**
   * Timestamp of when the override was deleted (soft delete).
   */
  "deletedAt": Date | null;
  /**
   * The UUID of the incident.
   */
  "incidentId": string;
  /**
   * Timestamp of when the override was last modified.
   */
  "modifiedAt": Date;
  /**
   * The type of timestamp being overridden.
   */
  "timestampType": TimestampType;
  /**
   * The timestamp value for the override.
   */
  "timestampValue": Date;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    incidentId: {
      baseName: "incident_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    timestampType: {
      baseName: "timestamp_type",
      type: "TimestampType",
      required: true,
    },
    timestampValue: {
      baseName: "timestamp_value",
      type: "Date",
      required: true,
      format: "date-time",
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
    return IncidentTimestampOverrideAttributes.attributeTypeMap;
  }

  public constructor() {}
}
