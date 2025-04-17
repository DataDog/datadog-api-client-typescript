import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Defines the main attributes of an escalation policy, such as its description, name, and behavior on policy end.
 */
export class EscalationPolicyDataAttributes {
  /**
   * Provides a detailed text description of the escalation policy.
   */
  "description"?: string;
  /**
   * Specifies the name of the escalation policy.
   */
  "name": string;
  /**
   * Indicates whether the page is automatically resolved when the policy ends.
   */
  "resolvePageOnPolicyEnd"?: boolean;
  /**
   * Specifies how many times the escalation sequence is retried if there is no response.
   */
  "retries"?: number;
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
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    resolvePageOnPolicyEnd: {
      baseName: "resolve_page_on_policy_end",
      type: "boolean",
    },
    retries: {
      baseName: "retries",
      type: "number",
      format: "int64",
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
    return EscalationPolicyDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
