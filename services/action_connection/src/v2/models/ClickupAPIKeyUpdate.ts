import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ClickupAPIKeyType } from "./ClickupAPIKeyType";

/**
 * The definition of the `ClickupAPIKey` object.
 */
export class ClickupAPIKeyUpdate {
  /**
   * The `ClickupAPIKeyUpdate` `api_token`.
   */
  "apiToken"?: string;
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
      type: "string",
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
    return ClickupAPIKeyUpdate.attributeTypeMap;
  }

  public constructor() {}
}
