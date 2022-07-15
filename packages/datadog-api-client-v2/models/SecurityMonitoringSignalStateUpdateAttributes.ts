/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalArchiveReason } from "./SecurityMonitoringSignalArchiveReason";
import { SecurityMonitoringSignalState } from "./SecurityMonitoringSignalState";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes describing the change of state of a security signal.
 */
export class SecurityMonitoringSignalStateUpdateAttributes {
  /**
   * Optional comment to display on archived signals.
   */
  "archiveComment"?: string;
  /**
   * Reason a signal is archived.
   */
  "archiveReason"?: SecurityMonitoringSignalArchiveReason;
  /**
   * The new triage state of the signal.
   */
  "state": SecurityMonitoringSignalState;
  /**
   * Version of the updated signal. If server side version is higher, update will be rejected.
   */
  "version"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

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
    state: {
      baseName: "state",
      type: "SecurityMonitoringSignalState",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSignalStateUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
