/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalAssigneeUpdateAttributes } from "./SecurityMonitoringSignalAssigneeUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data containing the patch for changing the assignee of a signal.
 */
export class SecurityMonitoringSignalAssigneeUpdateData {
  /**
   * Attributes describing the new assignee of a security signal.
   */
  "attributes": SecurityMonitoringSignalAssigneeUpdateAttributes;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringSignalAssigneeUpdateAttributes",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSignalAssigneeUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
