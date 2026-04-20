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
 * Attributes for updating the triage state or assignee of a security signal.
 */
export class SecurityMonitoringSignalUpdateAttributes {
  /**
   * Optional comment to display on archived signals.
   */
  "archiveComment"?: string;
  /**
   * Reason a signal is archived.
   */
  "archiveReason"?: SecurityMonitoringSignalArchiveReason;
  /**
   * Object representing a given user entity.
   */
  "assignee"?: SecurityMonitoringTriageUser;
  /**
   * The new triage state of the signal.
   */
  "state"?: SecurityMonitoringSignalState;
  /**
   * Version of the updated signal. If server side version is higher, update will be rejected.
   */
  "version"?: number;

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
    archiveReason: {
      baseName: "archive_reason",
      type: "SecurityMonitoringSignalArchiveReason",
    },
    assignee: {
      baseName: "assignee",
      type: "SecurityMonitoringTriageUser",
    },
    state: {
      baseName: "state",
      type: "SecurityMonitoringSignalState",
    },
    version: {
      baseName: "version",
      type: "number",
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
    return SecurityMonitoringSignalUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
