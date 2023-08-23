/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentFieldAttributes } from "./IncidentFieldAttributes";
import { IncidentNotificationHandle } from "./IncidentNotificationHandle";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The incident's attributes from a response.
 */
export class IncidentResponseAttributes {
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
   * Timestamp when the incident was last modified.
   */
  "modified"?: Date;
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
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    created: {
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
      type: "Date",
      format: "date-time",
    },
    fields: {
      type: "{ [key: string]: IncidentFieldAttributes; }",
    },
    modified: {
      type: "Date",
      format: "date-time",
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
      type: "Date",
      format: "date-time",
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
      type: "string",
      required: true,
    },
  };
}
