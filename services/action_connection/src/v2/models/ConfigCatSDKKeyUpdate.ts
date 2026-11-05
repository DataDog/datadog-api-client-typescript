import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfigCatSDKKeyType } from "./ConfigCatSDKKeyType";
import { ConfigCatSDKKeyUpdateApiPassword } from "./ConfigCatSDKKeyUpdateApiPassword";
import { ConfigCatSDKKeyUpdateApiUsername } from "./ConfigCatSDKKeyUpdateApiUsername";
import { ConfigCatSDKKeyUpdateSdkKey } from "./ConfigCatSDKKeyUpdateSdkKey";

/**
 * The definition of the `ConfigCatSDKKey` object.
 */
export class ConfigCatSDKKeyUpdate {
  /**
   * The `ConfigCatSDKKeyUpdate` `api_password`.
   */
  "apiPassword"?: ConfigCatSDKKeyUpdateApiPassword;
  /**
   * The `ConfigCatSDKKeyUpdate` `api_username`.
   */
  "apiUsername"?: ConfigCatSDKKeyUpdateApiUsername;
  /**
   * The `ConfigCatSDKKeyUpdate` `sdk_key`.
   */
  "sdkKey"?: ConfigCatSDKKeyUpdateSdkKey;
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
      type: "ConfigCatSDKKeyUpdateApiPassword",
    },
    apiUsername: {
      baseName: "api_username",
      type: "ConfigCatSDKKeyUpdateApiUsername",
    },
    sdkKey: {
      baseName: "sdk_key",
      type: "ConfigCatSDKKeyUpdateSdkKey",
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
