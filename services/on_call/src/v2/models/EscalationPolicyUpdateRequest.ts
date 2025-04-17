import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyUpdateRequestData } from "./EscalationPolicyUpdateRequestData";

/**
 * Represents a request to update an existing escalation policy, including the updated policy data.
 */
export class EscalationPolicyUpdateRequest {
  /**
   * Represents the data for updating an existing escalation policy, including its ID, attributes, relationships, and resource type.
   */
  "data": EscalationPolicyUpdateRequestData;
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
      type: "EscalationPolicyUpdateRequestData",
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
    return EscalationPolicyUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
