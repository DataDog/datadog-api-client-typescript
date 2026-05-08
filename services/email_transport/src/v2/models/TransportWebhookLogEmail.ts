import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The email address details.
 */
export class TransportWebhookLogEmail {
  /**
   * The recipient email address.
   */
  "address"?: string;
  /**
   * The recipient domain.
   */
  "domain"?: string;
  /**
   * The email subject line.
   */
  "subject"?: string;
  /**
   * Email categorization tags applied by the transport provider (for example, "transactional", "marketing").
   */
  "type"?: Array<string>;
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
    address: {
      baseName: "address",
      type: "string",
    },
    domain: {
      baseName: "domain",
      type: "string",
    },
    subject: {
      baseName: "subject",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "Array<string>",
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
    return TransportWebhookLogEmail.attributeTypeMap;
  }

  public constructor() {}
}
