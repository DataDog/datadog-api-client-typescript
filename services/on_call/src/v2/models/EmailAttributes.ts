import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EmailFormatType } from "./EmailFormatType";

/**
 * Attributes for an on-call email.
 */
export class EmailAttributes {
  /**
   * Whether the email is currently active.
   */
  "active"?: boolean;
  /**
   * Email address.
   */
  "address"?: string;
  /**
   * Optional display alias for the email.
   */
  "alias"?: string;
  /**
   * Preferred content formats for notifications.
   */
  "formats"?: Array<EmailFormatType>;
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
    active: {
      baseName: "active",
      type: "boolean",
    },
    address: {
      baseName: "address",
      type: "string",
    },
    alias: {
      baseName: "alias",
      type: "string",
    },
    formats: {
      baseName: "formats",
      type: "Array<EmailFormatType>",
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
    return EmailAttributes.attributeTypeMap;
  }

  public constructor() {}
}
