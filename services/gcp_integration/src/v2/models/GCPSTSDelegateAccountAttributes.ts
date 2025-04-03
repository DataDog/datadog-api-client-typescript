import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Your delegate account attributes.
 */
export class GCPSTSDelegateAccountAttributes {
  /**
   * Your organization's Datadog principal email address.
   */
  "delegateAccountEmail"?: string;
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
    delegateAccountEmail: {
      baseName: "delegate_account_email",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GCPSTSDelegateAccountAttributes.attributeTypeMap;
  }

  public constructor() {}
}
