import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyCreateRequestDataAttributes } from "./EscalationPolicyCreateRequestDataAttributes";
import { EscalationPolicyCreateRequestDataRelationships } from "./EscalationPolicyCreateRequestDataRelationships";
import { EscalationPolicyCreateRequestDataType } from "./EscalationPolicyCreateRequestDataType";

/**
 * Represents the data for creating an escalation policy, including its attributes, relationships, and resource type.
 */
export class EscalationPolicyCreateRequestData {
  /**
   * Defines the attributes for creating an escalation policy, including its description, name, resolution behavior, retries, and steps.
   */
  "attributes": EscalationPolicyCreateRequestDataAttributes;
  /**
   * Represents relationships in an escalation policy creation request, including references to teams.
   */
  "relationships"?: EscalationPolicyCreateRequestDataRelationships;
  /**
   * Indicates that the resource is of type `policies`.
   */
  "type": EscalationPolicyCreateRequestDataType;
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
      type: "EscalationPolicyCreateRequestDataAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "EscalationPolicyCreateRequestDataRelationships",
    },
    type: {
      baseName: "type",
      type: "EscalationPolicyCreateRequestDataType",
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
    return EscalationPolicyCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
