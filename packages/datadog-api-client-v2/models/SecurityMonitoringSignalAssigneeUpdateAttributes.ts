/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringTriageUser } from "./SecurityMonitoringTriageUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes describing the new assignee of a security signal.
 */
export class SecurityMonitoringSignalAssigneeUpdateAttributes {
  /**
   * Object representing a given user entity.
   */
  "assignee": SecurityMonitoringTriageUser;
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
    assignee: {
      baseName: "assignee",
      type: "SecurityMonitoringTriageUser",
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
    return SecurityMonitoringSignalAssigneeUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
