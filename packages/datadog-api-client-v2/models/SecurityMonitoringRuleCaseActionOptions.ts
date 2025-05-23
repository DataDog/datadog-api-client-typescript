/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Options for the rule action
 */
export class SecurityMonitoringRuleCaseActionOptions {
  /**
   * Duration of the action in seconds. 0 indicates no expiration.
   */
  "duration"?: number;
  /**
   * Used with the case action of type 'user_behavior'. The value specified in this field is applied as a risk tag to all users affected by the rule.
   */
  "userBehaviorName"?: string;

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
    duration: {
      baseName: "duration",
      type: "number",
      format: "int64",
    },
    userBehaviorName: {
      baseName: "userBehaviorName",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringRuleCaseActionOptions.attributeTypeMap;
  }

  public constructor() {}
}
