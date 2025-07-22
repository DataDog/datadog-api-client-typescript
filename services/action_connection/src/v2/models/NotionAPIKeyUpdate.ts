import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotionAPIKeyType } from "./NotionAPIKeyType";

/**
 * The definition of the `NotionAPIKey` object.
 */
export class NotionAPIKeyUpdate {
  /**
   * The `NotionAPIKeyUpdate` `api_token`.
   */
  "apiToken"?: string;
  /**
   * The definition of the `NotionAPIKey` object.
   */
  "type": NotionAPIKeyType;
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
      type: "NotionAPIKeyType",
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
    return NotionAPIKeyUpdate.attributeTypeMap;
  }

  public constructor() {}
}
