/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorConfigPolicyPolicyCreateRequest } from "./MonitorConfigPolicyPolicyCreateRequest";
import { MonitorConfigPolicyType } from "./MonitorConfigPolicyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
      type: "{ [key: string]: any; }",
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
