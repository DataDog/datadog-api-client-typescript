/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EscalationPolicyData } from "./EscalationPolicyData";
import { EscalationPolicyIncluded } from "./EscalationPolicyIncluded";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with a list of escalation policies.
 */
export class EscalationPoliciesResponse {
  /**
   * A list of escalation policies.
   */
  "data"?: Array<EscalationPolicyData>;
  /**
   * Provides any included related resources, such as steps or targets, returned with the policy.
   */
  "included"?: Array<EscalationPolicyIncluded>;

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
    data: {
      baseName: "data",
      type: "Array<EscalationPolicyData>",
    },
    included: {
      baseName: "included",
      type: "Array<EscalationPolicyIncluded>",
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
    return EscalationPoliciesResponse.attributeTypeMap;
  }

  public constructor() {}
}
