import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalArchiveReason } from "./SecurityMonitoringSignalArchiveReason";
import { SecurityMonitoringSignalState } from "./SecurityMonitoringSignalState";
import { SecurityMonitoringTriageUser } from "./SecurityMonitoringTriageUser";

/**
 * Attributes describing a triage state update operation over a security signal.
 */
export class SecurityMonitoringSignalTriageAttributes {
  /**
   * Optional comment to display on archived signals.
   */
  "archiveComment"?: string;
  /**
   * Timestamp of the last edit to the comment.
   */
  "archiveCommentTimestamp"?: number;
  /**
   * Object representing a given user entity.
   */
  "archiveCommentUser"?: SecurityMonitoringTriageUser;
  /**
   * Reason a signal is archived.
   */
  "archiveReason"?: SecurityMonitoringSignalArchiveReason;
  /**
   * Object representing a given user entity.
   */
  "assignee": SecurityMonitoringTriageUser;
  /**
   * Array of incidents that are associated with this signal.
   */
  "incidentIds": Array<number>;
  /**
   * The new triage state of the signal.
   */
  "state": SecurityMonitoringSignalState;
  /**
   * Timestamp of the last update to the signal state.
   */
  "stateUpdateTimestamp"?: number;
  /**
   * Object representing a given user entity.
   */
  "stateUpdateUser"?: SecurityMonitoringTriageUser;
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
    archiveComment: {
      baseName: "archive_comment",
      type: "string",
    },
    archiveCommentTimestamp: {
      baseName: "archive_comment_timestamp",
      type: "number",
      format: "int64",
    },
    archiveCommentUser: {
      baseName: "archive_comment_user",
      type: "SecurityMonitoringTriageUser",
    },
    archiveReason: {
      baseName: "archive_reason",
      type: "SecurityMonitoringSignalArchiveReason",
    },
    assignee: {
      baseName: "assignee",
      type: "SecurityMonitoringTriageUser",
      required: true,
    },
    incidentIds: {
      baseName: "incident_ids",
      type: "Array<number>",
      required: true,
      format: "int64",
    },
    state: {
      baseName: "state",
      type: "SecurityMonitoringSignalState",
      required: true,
    },
    stateUpdateTimestamp: {
      baseName: "state_update_timestamp",
      type: "number",
      format: "int64",
    },
    stateUpdateUser: {
      baseName: "state_update_user",
      type: "SecurityMonitoringTriageUser",
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
    return SecurityMonitoringSignalTriageAttributes.attributeTypeMap;
  }

  public constructor() {}
}
