import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyCreateRequestData } from "./EscalationPolicyCreateRequestData";

/**
 * Represents a request to create a new escalation policy, including the policy data.
 */
export class EscalationPolicyCreateRequest {
  /**
   * Represents the data for creating an escalation policy, including its attributes, relationships, and resource type.
   */
  "data": EscalationPolicyCreateRequestData;
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
      type: "EscalationPolicyCreateRequestData",
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
    return EscalationPolicyCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
