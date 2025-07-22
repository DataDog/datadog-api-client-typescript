import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatsigAPIKeyType } from "./StatsigAPIKeyType";

/**
 * The definition of the `StatsigAPIKey` object.
 */
export class StatsigAPIKeyUpdate {
  /**
   * The `StatsigAPIKeyUpdate` `api_key`.
   */
  "apiKey"?: string;
  /**
   * The definition of the `StatsigAPIKey` object.
   */
  "type": StatsigAPIKeyType;
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
      type: "StatsigAPIKeyType",
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
    return StatsigAPIKeyUpdate.attributeTypeMap;
  }

  public constructor() {}
}
