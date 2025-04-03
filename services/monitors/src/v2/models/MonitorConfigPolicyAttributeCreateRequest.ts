import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorConfigPolicyPolicyCreateRequest } from "./MonitorConfigPolicyPolicyCreateRequest";
import { MonitorConfigPolicyType } from "./MonitorConfigPolicyType";

/**
 * Policy and policy type for a monitor configuration policy.
 */
export class MonitorConfigPolicyAttributeCreateRequest {
  /**
   * Configuration for the policy.
   */
  "policy": MonitorConfigPolicyPolicyCreateRequest;
  /**
   * The monitor configuration policy type.
   */
  "policyType": MonitorConfigPolicyType;
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
      type: "MonitorConfigPolicyPolicyCreateRequest",
      required: true,
    },
    policyType: {
      baseName: "policy_type",
      type: "MonitorConfigPolicyType",
      required: true,
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
    return MonitorConfigPolicyAttributeCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
