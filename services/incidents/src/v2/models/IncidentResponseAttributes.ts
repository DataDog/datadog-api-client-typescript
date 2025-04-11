import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentFieldAttributes } from "./IncidentFieldAttributes";
import { IncidentNonDatadogCreator } from "./IncidentNonDatadogCreator";
import { IncidentNotificationHandle } from "./IncidentNotificationHandle";
import { IncidentSeverity } from "./IncidentSeverity";

/**
 * The incident's attributes from a response.
 */
export class IncidentResponseAttributes {
  /**
   * Timestamp of when the incident was archived.
   */
  "archived"?: Date;
  /**
   * The incident case id.
   */
  "caseId"?: number;
  /**
   * Timestamp when the incident was created.
   */
  "created"?: Date;
  /**
   * Length of the incident's customer impact in seconds.
   * Equals the difference between `customer_impact_start` and `customer_impact_end`.
   */
  "customerImpactDuration"?: number;
  /**
   * Timestamp when customers were no longer impacted by the incident.
   */
  "customerImpactEnd"?: Date;
  /**
   * A summary of the impact customers experienced during the incident.
   */
  "customerImpactScope"?: string;
  /**
   * Timestamp when customers began being impacted by the incident.
   */
  "customerImpactStart"?: Date;
  /**
   * A flag indicating whether the incident caused customer impact.
   */
  "customerImpacted"?: boolean;
  /**
   * Timestamp when the incident was detected.
   */
  "detected"?: Date;
  /**
   * A condensed view of the user-defined fields attached to incidents.
   */
  "fields"?: { [key: string]: IncidentFieldAttributes };
  /**
   * A unique identifier that represents an incident type.
   */
  "incidentTypeUuid"?: string;
  /**
   * Timestamp when the incident was last modified.
   */
  "modified"?: Date;
  /**
   * Incident's non Datadog creator.
   */
  "nonDatadogCreator"?: IncidentNonDatadogCreator;
  /**
   * Notification handles that will be notified of the incident during update.
   */
  "notificationHandles"?: Array<IncidentNotificationHandle>;
  /**
   * The monotonically increasing integer ID for the incident.
   */
  "publicId"?: number;
  /**
   * Timestamp when the incident's state was last changed from active or stable to resolved or completed.
   */
  "resolved"?: Date;
  /**
   * The incident severity.
   */
  "severity"?: IncidentSeverity;
  /**
   * The state incident.
   */
  "state"?: string;
  /**
   * The amount of time in seconds to detect the incident.
   * Equals the difference between `customer_impact_start` and `detected`.
   */
  "timeToDetect"?: number;
  /**
   * The amount of time in seconds to call incident after detection. Equals the difference of `detected` and `created`.
   */
  "timeToInternalResponse"?: number;
  /**
   * The amount of time in seconds to resolve customer impact after detecting the issue. Equals the difference between `customer_impact_end` and `detected`.
   */
  "timeToRepair"?: number;
  /**
   * The amount of time in seconds to resolve the incident after it was created. Equals the difference between `created` and `resolved`.
   */
  "timeToResolve"?: number;
  /**
   * The title of the incident, which summarizes what happened.
   */
  "title": string;
  /**
   * The incident visibility status.
   */
  "visibility"?: string;
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
    archived: {
      baseName: "archived",
      type: "Date",
      format: "date-time",
    },
    caseId: {
      baseName: "case_id",
      type: "number",
      format: "int64",
    },
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    customerImpactDuration: {
      baseName: "customer_impact_duration",
      type: "number",
      format: "int64",
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
    },
    detected: {
      baseName: "detected",
      type: "Date",
      format: "date-time",
    },
    fields: {
      baseName: "fields",
      type: "{ [key: string]: IncidentFieldAttributes; }",
    },
    incidentTypeUuid: {
      baseName: "incident_type_uuid",
      type: "string",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
    },
    nonDatadogCreator: {
      baseName: "non_datadog_creator",
      type: "IncidentNonDatadogCreator",
    },
    notificationHandles: {
      baseName: "notification_handles",
      type: "Array<IncidentNotificationHandle>",
    },
    publicId: {
      baseName: "public_id",
      type: "number",
      format: "int64",
    },
    resolved: {
      baseName: "resolved",
      type: "Date",
      format: "date-time",
    },
    severity: {
      baseName: "severity",
      type: "IncidentSeverity",
    },
    state: {
      baseName: "state",
      type: "string",
    },
    timeToDetect: {
      baseName: "time_to_detect",
      type: "number",
      format: "int64",
    },
    timeToInternalResponse: {
      baseName: "time_to_internal_response",
      type: "number",
      format: "int64",
    },
    timeToRepair: {
      baseName: "time_to_repair",
      type: "number",
      format: "int64",
    },
    timeToResolve: {
      baseName: "time_to_resolve",
      type: "number",
      format: "int64",
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    visibility: {
      baseName: "visibility",
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
    return IncidentResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
