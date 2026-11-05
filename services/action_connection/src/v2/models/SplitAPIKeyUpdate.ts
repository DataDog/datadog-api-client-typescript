import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SplitAPIKeyType } from "./SplitAPIKeyType";
import { SplitAPIKeyUpdateApiKey } from "./SplitAPIKeyUpdateApiKey";

/**
 * The definition of the `SplitAPIKey` object.
 */
export class SplitAPIKeyUpdate {
  /**
   * The `SplitAPIKeyUpdate` `api_key`.
   */
  "apiKey"?: SplitAPIKeyUpdateApiKey;
  /**
   * The definition of the `SplitAPIKey` object.
   */
  "type": SplitAPIKeyType;
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
      type: "SplitAPIKeyUpdateApiKey",
    },
    type: {
      baseName: "type",
      type: "SplitAPIKeyType",
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
    return SplitAPIKeyUpdate.attributeTypeMap;
  }

  public constructor() {}
}
