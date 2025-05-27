import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyDataAttributes } from "./EscalationPolicyDataAttributes";
import { EscalationPolicyDataRelationships } from "./EscalationPolicyDataRelationships";
import { EscalationPolicyDataType } from "./EscalationPolicyDataType";

/**
 * Represents the data for a single escalation policy, including its attributes, ID, relationships, and resource type.
 */
export class EscalationPolicyData {
  /**
   * Defines the main attributes of an escalation policy, such as its name and behavior on policy end.
   */
  "attributes"?: EscalationPolicyDataAttributes;
  /**
   * Specifies the unique identifier of the escalation policy.
   */
  "id"?: string;
  /**
   * Represents the relationships for an escalation policy, including references to steps and teams.
   */
  "relationships"?: EscalationPolicyDataRelationships;
  /**
   * Indicates that the resource is of type `policies`.
   */
  "type": EscalationPolicyDataType;
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
      type: "EscalationPolicyDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "EscalationPolicyDataRelationships",
    },
    type: {
      baseName: "type",
      type: "EscalationPolicyDataType",
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
    return EscalationPolicyData.attributeTypeMap;
  }

  public constructor() {}
}
