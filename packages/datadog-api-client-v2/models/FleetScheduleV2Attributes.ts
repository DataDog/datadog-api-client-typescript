/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FleetScheduleStatus } from "./FleetScheduleStatus";
import { FleetScheduleV2NotificationRule } from "./FleetScheduleV2NotificationRule";
import { FleetScheduleV2RecurrenceRule } from "./FleetScheduleV2RecurrenceRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a fleet schedule in the v2 API response.
 */
export class FleetScheduleV2Attributes {
  /**
   * RFC3339 timestamp when the schedule was created.
   */
  "createdAt"?: string;
  /**
   * User handle of the person who created the schedule.
   */
  "createdBy"?: string;
  /**
   * Whether this is the default schedule for the organization.
   */
  "isDefault"?: boolean;
  /**
   * Human-readable name for the schedule.
   */
  "name"?: string;
  /**
   * RFC3339 timestamp of the next scheduled maintenance window start time.
   * Absent when the next run time cannot be computed.
   */
  "nextRun"?: string;
  /**
   * Notification configuration attached to a schedule.
   *
   * Included when available. If the notification rule cannot be retrieved, this field is
   * omitted and the schedule is still returned. If the notification rule is retrieved but its
   * handles cannot be resolved, it is still included with an empty `handles` array.
   */
  "notificationRule"?: FleetScheduleV2NotificationRule;
  /**
   * Query used to filter and select target hosts for scheduled deployments.
   */
  "query"?: string;
  /**
   * Defines the recurrence pattern for the schedule.
   */
  "rule"?: FleetScheduleV2RecurrenceRule;
  /**
   * The status of the schedule.
   * - `active`: The schedule is active and will create deployments according to its recurrence rule.
   * - `inactive`: The schedule is inactive and will not create any deployments.
   */
  "status"?: FleetScheduleStatus;
  /**
   * RFC3339 timestamp when the schedule was last updated.
   */
  "updatedAt"?: string;
  /**
   * User handle of the person who last updated the schedule.
   */
  "updatedBy"?: string;
  /**
   * Number of major versions behind the latest to target for upgrades.
   * - 0: Always upgrade to the latest version.
   * - 1: Upgrade to latest minus 1 major version.
   * - 2: Upgrade to latest minus 2 major versions.
   */
  "versionToLatest"?: number;

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
      type: "string",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
    },
    isDefault: {
      baseName: "is_default",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    nextRun: {
      baseName: "next_run",
      type: "string",
    },
    notificationRule: {
      baseName: "notification_rule",
      type: "FleetScheduleV2NotificationRule",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    rule: {
      baseName: "rule",
      type: "FleetScheduleV2RecurrenceRule",
    },
    status: {
      baseName: "status",
      type: "FleetScheduleStatus",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "string",
    },
    updatedBy: {
      baseName: "updated_by",
      type: "string",
    },
    versionToLatest: {
      baseName: "version_to_latest",
      type: "number",
      format: "int64",
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
    return FleetScheduleV2Attributes.attributeTypeMap;
  }

  public constructor() {}
}
