/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a governance control that can be updated. Only the attributes present in the request are modified.
 */
export class GovernanceControlUpdateAttributes {
  /**
   * How often detections should be evaluated for the control.
   */
  "detectionFrequency"?: string;
  /**
   * A free-form map of parameter names to their configured values.
   */
  "detectionParameters"?: { [key: string]: any };
  /**
   * A free-form map of parameter names to their configured values.
   */
  "mitigationParameters"?: { [key: string]: any };
  /**
   * The mitigation type to configure for the control.
   */
  "mitigationType"?: string;
  /**
   * A new human-readable name for the control.
   */
  "name"?: string;
  /**
   * The notification frequency to configure for the control.
   */
  "notificationFrequency"?: string;
  /**
   * A free-form map of parameter names to their configured values.
   */
  "notificationParameters"?: { [key: string]: any };
  /**
   * The notification type to configure for the control.
   */
  "notificationType"?: string;

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
    detectionFrequency: {
      baseName: "detection_frequency",
      type: "string",
    },
    detectionParameters: {
      baseName: "detection_parameters",
      type: "{ [key: string]: any; }",
    },
    mitigationParameters: {
      baseName: "mitigation_parameters",
      type: "{ [key: string]: any; }",
    },
    mitigationType: {
      baseName: "mitigation_type",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    notificationFrequency: {
      baseName: "notification_frequency",
      type: "string",
    },
    notificationParameters: {
      baseName: "notification_parameters",
      type: "{ [key: string]: any; }",
    },
    notificationType: {
      baseName: "notification_type",
      type: "string",
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
    return GovernanceControlUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
