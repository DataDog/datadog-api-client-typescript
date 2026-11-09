import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AccessPolicyEffect } from "./AccessPolicyEffect";

/**
 * Attributes for creating a status page email access policy.
 */
export class CreateStatusPageEmailAccessPolicyRequestDataAttributes {
  /**
   * The effect applied when an email address matches the policy. Deny policies take precedence over allow policies.
   */
  "effect": AccessPolicyEffect;
  /**
   * The email address pattern matched by the policy. Supports an exact address (`user@example.com`), all addresses in a domain (`@example.com`), or all addresses in subdomains (`@*.example.com`).
   */
  "pattern": string;
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
    effect: {
      baseName: "effect",
      type: "AccessPolicyEffect",
      required: true,
    },
    pattern: {
      baseName: "pattern",
      type: "string",
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
    return CreateStatusPageEmailAccessPolicyRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
