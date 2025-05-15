import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudWorkloadSecurityAgentPolicyCreateAttributes } from "./CloudWorkloadSecurityAgentPolicyCreateAttributes";
import { CloudWorkloadSecurityAgentPolicyType } from "./CloudWorkloadSecurityAgentPolicyType";

/**
 * Object for a single Agent rule
 */
export class CloudWorkloadSecurityAgentPolicyCreateData {
  /**
   * Create a new Cloud Workload Security Agent policy
   */
  "attributes": CloudWorkloadSecurityAgentPolicyCreateAttributes;
  /**
   * The type of the resource, must always be `policy`
   */
  "type": CloudWorkloadSecurityAgentPolicyType;
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
    attributes: {
      baseName: "attributes",
      type: "CloudWorkloadSecurityAgentPolicyCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CloudWorkloadSecurityAgentPolicyType",
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
    return CloudWorkloadSecurityAgentPolicyCreateData.attributeTypeMap;
  }

  public constructor() {}
}
