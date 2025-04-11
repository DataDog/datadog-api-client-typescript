import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes object for updating a Confluent account.
 */
export class ConfluentAccountUpdateRequestAttributes {
  /**
   * The API key associated with your Confluent account.
   */
  "apiKey": string;
  /**
   * The API secret associated with your Confluent account.
   */
  "apiSecret": string;
  /**
   * A list of strings representing tags. Can be a single key, or key-value pairs separated by a colon.
   */
  "tags"?: Array<string>;
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
    apiKey: {
      baseName: "api_key",
      type: "string",
      required: true,
    },
    apiSecret: {
      baseName: "api_secret",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
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
    return ConfluentAccountUpdateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
