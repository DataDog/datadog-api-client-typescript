/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentFieldAttributes } from "./IncidentFieldAttributes";
import { IncidentNotificationHandle } from "./IncidentNotificationHandle";
import { IncidentTimelineCellCreateAttributes } from "./IncidentTimelineCellCreateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The incident's attributes for a create request.
 */
export class IncidentCreateAttributes {
  /**
   * The IncidentCreateAttributes additional_notifications.
   */
  "additionalNotifications"?: string;
  /**
   * The IncidentCreateAttributes archived.
   */
  "archived"?: Date;
  /**
   * The IncidentCreateAttributes case_id.
   */
  "caseId"?: number;
  /**
   * The IncidentCreateAttributes creation_idempotency_key.
   */
  "creationIdempotencyKey"?: string;
  /**
   * The IncidentCreateAttributes customer_impact_end.
   */
  "customerImpactEnd"?: Date;
  /**
   * Required if `customer_impacted:"true"`. A summary of the impact customers experienced during the incident.
   */
  "customerImpactScope"?: string;
  /**
   * The IncidentCreateAttributes customer_impact_start.
   */
  "customerImpactStart"?: Date;
  /**
   * A flag indicating whether the incident caused customer impact.
   */
  "customerImpacted": boolean;
  /**
   * The IncidentCreateAttributes detected.
   */
  "detected"?: Date;
  /**
   * The IncidentCreateAttributes duration.
   */
  "duration"?: number;
  /**
   * A condensed view of the user-defined fields for which to create initial selections.
   */
  "fields"?: { [key: string]: IncidentFieldAttributes };
  /**
   * The IncidentCreateAttributes incident_type_uuid.
   */
  "incidentTypeUuid"?: string;
  /**
   * An array of initial timeline cells to be placed at the beginning of the incident timeline.
   */
  "initialCells"?: Array<IncidentTimelineCellCreateAttributes>;
  /**
   * Notification handles that will be notified of the incident at creation.
   */
  "notificationHandles"?: Array<IncidentNotificationHandle>;
  /**
   * The IncidentCreateAttributes public_id.
   */
  "publicId"?: number;
  /**
   * The IncidentCreateAttributes resolved.
   */
  "resolved"?: Date;
  /**
   * The IncidentCreateAttributes severity.
   */
  "severity"?: string;
  /**
   * The IncidentCreateAttributes state.
   */
  "state"?: string;
  /**
   * The IncidentCreateAttributes time_to_resolve.
   */
  "timeToResolve"?: number;
  /**
   * The title of the incident, which summarizes what happened.
   */
  "title": string;

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
    additionalNotifications: {
      baseName: "additional_notifications",
      type: "string",
    },
    archived: {
      baseName: "archived",
      type: "Date",
      format: "date-time",
    },
    caseId: {
      baseName: "case_id",
      type: "number",
      format: "int32",
    },
    creationIdempotencyKey: {
      baseName: "creation_idempotency_key",
      type: "string",
    },
    customerImpactEnd: {
      baseName: "customer_impact_end",
      type: "Date",
      format: "date-time",
    },
    customerImpactScope: {
      baseName: "customer_impact_scope",
      type: "string",
    },
    customerImpactStart: {
      baseName: "customer_impact_start",
      type: "Date",
      format: "date-time",
    },
    customerImpacted: {
      baseName: "customer_impacted",
      type: "boolean",
      required: true,
    },
    detected: {
      baseName: "detected",
      type: "Date",
      format: "date-time",
    },
    duration: {
      baseName: "duration",
      type: "number",
      format: "int32",
    },
    fields: {
      baseName: "fields",
      type: "{ [key: string]: IncidentFieldAttributes; }",
    },
    incidentTypeUuid: {
      baseName: "incident_type_uuid",
      type: "string",
    },
    initialCells: {
      baseName: "initial_cells",
      type: "Array<IncidentTimelineCellCreateAttributes>",
    },
    notificationHandles: {
      baseName: "notification_handles",
      type: "Array<IncidentNotificationHandle>",
    },
    publicId: {
      baseName: "public_id",
      type: "number",
      format: "int32",
    },
    resolved: {
      baseName: "resolved",
      type: "Date",
      format: "date-time",
    },
    severity: {
      baseName: "severity",
      type: "string",
    },
    state: {
      baseName: "state",
      type: "string",
    },
    timeToResolve: {
      baseName: "time_to_resolve",
      type: "number",
      format: "int32",
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
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
    return IncidentCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
