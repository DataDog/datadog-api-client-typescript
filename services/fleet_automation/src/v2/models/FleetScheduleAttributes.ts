import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetScheduleRecurrenceRule } from "./FleetScheduleRecurrenceRule";
import { FleetScheduleStatus } from "./FleetScheduleStatus";

/**
 * Attributes of a schedule in the response.
 */
export class FleetScheduleAttributes {
  /**
   * Unix timestamp (seconds since epoch) when the schedule was created.
   */
  "createdAtUnix"?: number;
  /**
   * User handle of the person who created the schedule.
   */
  "createdBy"?: string;
  /**
   * Human-readable name for the schedule.
   */
  "name"?: string;
  /**
   * Query used to filter and select target hosts for scheduled deployments. Uses the Datadog query syntax.
   */
  "query"?: string;
  /**
   * Defines the recurrence pattern for the schedule. Specifies when deployments should be
   * automatically triggered based on maintenance windows.
   */
  "rule"?: FleetScheduleRecurrenceRule;
  /**
   * The status of the schedule.
   * - `active`: The schedule is active and will create deployments according to its recurrence rule.
   * - `inactive`: The schedule is inactive and will not create any deployments.
   */
  "status"?: FleetScheduleStatus;
  /**
   * Unix timestamp (seconds since epoch) when the schedule was last updated.
   */
  "updatedAtUnix"?: number;
  /**
   * User handle of the person who last updated the schedule.
   */
  "updatedBy"?: string;
  /**
   * Number of major versions behind the latest to target for upgrades.
   * - 0: Always upgrade to the latest version
   * - 1: Upgrade to latest minus 1 major version
   * - 2: Upgrade to latest minus 2 major versions
   * Maximum value is 2.
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
    createdAtUnix: {
      baseName: "created_at_unix",
      type: "number",
      format: "int64",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    rule: {
      baseName: "rule",
      type: "FleetScheduleRecurrenceRule",
    },
    status: {
      baseName: "status",
      type: "FleetScheduleStatus",
    },
    updatedAtUnix: {
      baseName: "updated_at_unix",
      type: "number",
      format: "int64",
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
    return FleetScheduleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
