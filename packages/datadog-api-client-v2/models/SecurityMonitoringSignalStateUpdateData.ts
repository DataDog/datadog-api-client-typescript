/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalStateUpdateAttributes } from "./SecurityMonitoringSignalStateUpdateAttributes";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Data containing the patch for changing the state of a signal.
 */
export class SecurityMonitoringSignalStateUpdateData {
  /**
   * Attributes describing the change of state of a security signal.
   */
  "attributes": SecurityMonitoringSignalStateUpdateAttributes;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringSignalStateUpdateAttributes",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSignalStateUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
