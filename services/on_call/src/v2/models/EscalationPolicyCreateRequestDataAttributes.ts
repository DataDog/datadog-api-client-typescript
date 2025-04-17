import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EscalationPolicyCreateRequestDataAttributesStepsItems } from "./EscalationPolicyCreateRequestDataAttributesStepsItems";

/**
 * Defines the attributes for creating an escalation policy, including its description, name, resolution behavior, retries, and steps.
 */
export class EscalationPolicyCreateRequestDataAttributes {
  /**
   * Provides a detailed text description of the new escalation policy.
   */
  "description"?: string;
  /**
   * Specifies the name for the new escalation policy.
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
   * A list of escalation steps, each defining assignment, escalation timeout, and targets for the new policy.
   */
  "steps": Array<EscalationPolicyCreateRequestDataAttributesStepsItems>;
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
    steps: {
      baseName: "steps",
      type: "Array<EscalationPolicyCreateRequestDataAttributesStepsItems>",
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
    return EscalationPolicyCreateRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
