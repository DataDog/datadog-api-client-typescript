import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorConfigPolicyPolicy } from "./MonitorConfigPolicyPolicy";
import { MonitorConfigPolicyType } from "./MonitorConfigPolicyType";

/**
 * Policy and policy type for a monitor configuration policy.
 */
export class MonitorConfigPolicyAttributeResponse {
  /**
   * Configuration for the policy.
   */
  "policy"?: MonitorConfigPolicyPolicy;
  /**
   * The monitor configuration policy type.
   */
  "policyType"?: MonitorConfigPolicyType;
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
    policy: {
      baseName: "policy",
      type: "MonitorConfigPolicyPolicy",
    },
    policyType: {
      baseName: "policy_type",
      type: "MonitorConfigPolicyType",
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
    return MonitorConfigPolicyAttributeResponse.attributeTypeMap;
  }

  public constructor() {}
}
