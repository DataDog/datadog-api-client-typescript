import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GreyNoiseAPIKeyType } from "./GreyNoiseAPIKeyType";

/**
 * The definition of the `GreyNoiseAPIKey` object.
 */
export class GreyNoiseAPIKeyUpdate {
  /**
   * The `GreyNoiseAPIKeyUpdate` `api_key`.
   */
  "apiKey"?: string;
  /**
   * The definition of the `GreyNoiseAPIKey` object.
   */
  "type": GreyNoiseAPIKeyType;
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
      type: "GreyNoiseAPIKeyType",
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
    return GreyNoiseAPIKeyUpdate.attributeTypeMap;
  }

  public constructor() {}
}
