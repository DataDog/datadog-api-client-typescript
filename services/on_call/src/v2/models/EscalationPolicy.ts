import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyData } from "./EscalationPolicyData";
import { EscalationPolicyIncluded } from "./EscalationPolicyIncluded";

/**
 * Represents a complete escalation policy response, including policy data and optionally included related resources.
 */
export class EscalationPolicy {
  /**
   * Represents the data for a single escalation policy, including its attributes, ID, relationships, and resource type.
   */
  "data"?: EscalationPolicyData;
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
      type: "EscalationPolicyData",
    },
    included: {
      baseName: "included",
      type: "Array<EscalationPolicyIncluded>",
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
    return EscalationPolicy.attributeTypeMap;
  }

  public constructor() {}
}
