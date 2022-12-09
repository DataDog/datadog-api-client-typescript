/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalArchiveReason } from "./SecurityMonitoringSignalArchiveReason";
import { SecurityMonitoringSignalState } from "./SecurityMonitoringSignalState";
import { SecurityMonitoringTriageUser } from "./SecurityMonitoringTriageUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSignalTriageAttributes.attributeTypeMap;
  }

  public constructor() {}
}
