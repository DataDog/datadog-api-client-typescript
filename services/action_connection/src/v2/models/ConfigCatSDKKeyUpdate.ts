import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfigCatSDKKeyType } from "./ConfigCatSDKKeyType";

/**
 * The definition of the `ConfigCatSDKKey` object.
 */
export class ConfigCatSDKKeyUpdate {
  /**
   * The `ConfigCatSDKKeyUpdate` `api_password`.
   */
  "apiPassword"?: string;
  /**
   * The `ConfigCatSDKKeyUpdate` `api_username`.
   */
  "apiUsername"?: string;
  /**
   * The `ConfigCatSDKKeyUpdate` `sdk_key`.
   */
  "sdkKey"?: string;
  /**
   * The definition of the `ConfigCatSDKKey` object.
   */
  "type": ConfigCatSDKKeyType;
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
    apiPassword: {
      baseName: "api_password",
      type: "string",
    },
    apiUsername: {
      baseName: "api_username",
      type: "string",
    },
    sdkKey: {
      baseName: "sdk_key",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ConfigCatSDKKeyType",
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
    return ConfigCatSDKKeyUpdate.attributeTypeMap;
  }

  public constructor() {}
}
