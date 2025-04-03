import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfluentResourceResponseAttributes } from "./ConfluentResourceResponseAttributes";

/**
 * The attributes of a Confluent account.
 */
export class ConfluentAccountResponseAttributes {
  /**
   * The API key associated with your Confluent account.
   */
  "apiKey": string;
  /**
   * A list of Confluent resources associated with the Confluent account.
   */
  "resources"?: Array<ConfluentResourceResponseAttributes>;
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
    resources: {
      baseName: "resources",
      type: "Array<ConfluentResourceResponseAttributes>",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return ConfluentAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
