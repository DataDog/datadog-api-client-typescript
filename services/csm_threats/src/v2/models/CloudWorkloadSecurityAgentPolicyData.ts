import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudWorkloadSecurityAgentPolicyAttributes } from "./CloudWorkloadSecurityAgentPolicyAttributes";
import { CloudWorkloadSecurityAgentPolicyType } from "./CloudWorkloadSecurityAgentPolicyType";

/**
 * Object for a single Agent policy
 */
export class CloudWorkloadSecurityAgentPolicyData {
  /**
   * A Cloud Workload Security Agent policy returned by the API
   */
  "attributes"?: CloudWorkloadSecurityAgentPolicyAttributes;
  /**
   * The ID of the Agent policy
   */
  "id"?: string;
  /**
   * The type of the resource, must always be `policy`
   */
  "type"?: CloudWorkloadSecurityAgentPolicyType;
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
      type: "CloudWorkloadSecurityAgentPolicyAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CloudWorkloadSecurityAgentPolicyType",
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
    return CloudWorkloadSecurityAgentPolicyData.attributeTypeMap;
  }

  public constructor() {}
}
