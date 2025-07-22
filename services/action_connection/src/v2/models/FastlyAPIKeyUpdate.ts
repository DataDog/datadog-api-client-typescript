import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FastlyAPIKeyType } from "./FastlyAPIKeyType";

/**
 * The definition of the `FastlyAPIKey` object.
 */
export class FastlyAPIKeyUpdate {
  /**
   * The `FastlyAPIKeyUpdate` `api_key`.
   */
  "apiKey"?: string;
  /**
   * The definition of the `FastlyAPIKey` object.
   */
  "type": FastlyAPIKeyType;
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
    },
    type: {
      baseName: "type",
      type: "FastlyAPIKeyType",
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
    return FastlyAPIKeyUpdate.attributeTypeMap;
  }

  public constructor() {}
}
