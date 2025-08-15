/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudflareGlobalAPITokenType } from "./CloudflareGlobalAPITokenType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the `CloudflareGlobalAPIToken` object.
 */
export class CloudflareGlobalAPIToken {
  /**
   * The `CloudflareGlobalAPIToken` `auth_email`.
   */
  "authEmail": string;
  /**
   * The `CloudflareGlobalAPIToken` `global_api_key`.
   */
  "globalApiKey": string;
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
      type: "string",
      required: true,
    },
    globalApiKey: {
      baseName: "global_api_key",
      type: "string",
      required: true,
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
    return CloudflareGlobalAPIToken.attributeTypeMap;
  }

  public constructor() {}
}
