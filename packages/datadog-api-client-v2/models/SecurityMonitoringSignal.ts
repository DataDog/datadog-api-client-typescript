/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalAttributes } from "./SecurityMonitoringSignalAttributes";
import { SecurityMonitoringSignalType } from "./SecurityMonitoringSignalType";

import { AttributeTypeMap } from "../util";

/**
 * Object description of a security signal.
 */
export class SecurityMonitoringSignal {
  /**
   * The object containing all signal attributes and their
   * associated values.
   */
  "attributes"?: SecurityMonitoringSignalAttributes;
  /**
   * The unique ID of the security signal.
   */
  "id"?: string;
  /**
   * The type of event.
   */
  "type"?: SecurityMonitoringSignalType;

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
      type: "SecurityMonitoringSignalAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringSignalType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSignal.attributeTypeMap;
  }

  public constructor() {}
}
