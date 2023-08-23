/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentFieldAttributes } from "./IncidentFieldAttributes";
import { IncidentNotificationHandle } from "./IncidentNotificationHandle";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The incident's attributes for an update request.
 */
export class IncidentUpdateAttributes {
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
   * A condensed view of the user-defined fields for which to update selections.
   */
  "fields"?: { [key: string]: IncidentFieldAttributes };
  /**
   * Notification handles that will be notified of the incident during update.
   */
  "notificationHandles"?: Array<IncidentNotificationHandle>;
  /**
   * The title of the incident, which summarizes what happened.
   */
  "title"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
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
    notificationHandles: {
      baseName: "notification_handles",
      type: "Array<IncidentNotificationHandle>",
    },
    title: {
      type: "string",
    },
  };
}
