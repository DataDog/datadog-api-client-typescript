import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Recipient for an `EMAIL` target.
 */
export class NotificationRuleTargetConfigurationRecipient {
  /**
   * Email address to notify.
   */
  "email"?: string;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotificationRuleTargetConfigurationRecipient.attributeTypeMap;
  }

  public constructor() {}
}
