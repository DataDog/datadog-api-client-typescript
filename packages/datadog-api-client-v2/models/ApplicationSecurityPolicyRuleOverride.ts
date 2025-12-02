/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Override WAF rule parameters for services in a policy.
 */
export class ApplicationSecurityPolicyRuleOverride {
  /**
   * When blocking is enabled, the rule will block the traffic matched by this rule.
   */
  "blocking": boolean;
  /**
   * When false, this rule will not match any traffic.
   */
  "enabled": boolean;
  /**
   * Override the parameters for this WAF rule identifier.
   */
  "id": string;

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
    blocking: {
      baseName: "blocking",
      type: "boolean",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
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
    return ApplicationSecurityPolicyRuleOverride.attributeTypeMap;
  }

  public constructor() {}
}
