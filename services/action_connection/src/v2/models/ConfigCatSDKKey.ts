import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConfigCatSDKKeyApiPassword } from "./ConfigCatSDKKeyApiPassword";
import { ConfigCatSDKKeyApiUsername } from "./ConfigCatSDKKeyApiUsername";
import { ConfigCatSDKKeySdkKey } from "./ConfigCatSDKKeySdkKey";
import { ConfigCatSDKKeyType } from "./ConfigCatSDKKeyType";

/**
 * The definition of the `ConfigCatSDKKey` object.
 */
export class ConfigCatSDKKey {
  /**
   * The `ConfigCatSDKKey` `api_password`.
   */
  "apiPassword": ConfigCatSDKKeyApiPassword;
  /**
   * The `ConfigCatSDKKey` `api_username`.
   */
  "apiUsername": ConfigCatSDKKeyApiUsername;
  /**
   * The `ConfigCatSDKKey` `sdk_key`.
   */
  "sdkKey": ConfigCatSDKKeySdkKey;
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
      type: "ConfigCatSDKKeyApiPassword",
      required: true,
    },
    apiUsername: {
      baseName: "api_username",
      type: "ConfigCatSDKKeyApiUsername",
      required: true,
    },
    sdkKey: {
      baseName: "sdk_key",
      type: "ConfigCatSDKKeySdkKey",
      required: true,
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
    return ConfigCatSDKKey.attributeTypeMap;
  }

  public constructor() {}
}
