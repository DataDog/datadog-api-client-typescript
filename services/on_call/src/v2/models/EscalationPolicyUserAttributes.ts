import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserAttributesStatus } from "./UserAttributesStatus";

/**
 * Provides basic user information for an escalation policy, including a name and email address.
 */
export class EscalationPolicyUserAttributes {
  /**
   * The user's email address.
   */
  "email"?: string;
  /**
   * The user's name.
   */
  "name"?: string;
  /**
   * The user's status.
   */
  "status"?: UserAttributesStatus;
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
    email: {
      baseName: "email",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "UserAttributesStatus",
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
    return EscalationPolicyUserAttributes.attributeTypeMap;
  }

  public constructor() {}
}
