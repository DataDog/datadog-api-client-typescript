import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ClickupAPIKeyApiToken } from "./ClickupAPIKeyApiToken";
import { ClickupAPIKeyType } from "./ClickupAPIKeyType";

/**
 * The definition of the `ClickupAPIKey` object.
 */
export class ClickupAPIKey {
  /**
   * The `ClickupAPIKey` `api_token`.
   */
  "apiToken": ClickupAPIKeyApiToken;
  /**
   * The definition of the `ClickupAPIKey` object.
   */
  "type": ClickupAPIKeyType;
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
    apiToken: {
      baseName: "api_token",
      type: "ClickupAPIKeyApiToken",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ClickupAPIKeyType",
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
    return ClickupAPIKey.attributeTypeMap;
  }

  public constructor() {}
}
