import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudflareGlobalAPITokenType } from "./CloudflareGlobalAPITokenType";
import { CloudflareGlobalAPITokenUpdateAuthEmail } from "./CloudflareGlobalAPITokenUpdateAuthEmail";
import { CloudflareGlobalAPITokenUpdateGlobalApiKey } from "./CloudflareGlobalAPITokenUpdateGlobalApiKey";

/**
 * The definition of the `CloudflareGlobalAPIToken` object.
 */
export class CloudflareGlobalAPITokenUpdate {
  /**
   * The `CloudflareGlobalAPITokenUpdate` `auth_email`.
   */
  "authEmail"?: CloudflareGlobalAPITokenUpdateAuthEmail;
  /**
   * The `CloudflareGlobalAPITokenUpdate` `global_api_key`.
   */
  "globalApiKey"?: CloudflareGlobalAPITokenUpdateGlobalApiKey;
  /**
   * The definition of the `CloudflareGlobalAPIToken` object.
   */
  "type": CloudflareGlobalAPITokenType;
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
    authEmail: {
      baseName: "auth_email",
      type: "CloudflareGlobalAPITokenUpdateAuthEmail",
    },
    globalApiKey: {
      baseName: "global_api_key",
      type: "CloudflareGlobalAPITokenUpdateGlobalApiKey",
    },
    type: {
      baseName: "type",
      type: "CloudflareGlobalAPITokenType",
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
    return CloudflareGlobalAPITokenUpdate.attributeTypeMap;
  }

  public constructor() {}
}
