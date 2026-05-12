/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the API key validation response.
 */
export class ValidateV2Attributes {
  /**
   * The UUID of the API key.
   */
  "apiKeyId": string;
  /**
   * List of scope names associated with the API key.
   */
  "apiKeyScopes": Array<string>;
  /**
   * Whether the API key is valid.
   */
  "valid": boolean;

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
    apiKeyId: {
      baseName: "api_key_id",
      type: "string",
      required: true,
    },
    apiKeyScopes: {
      baseName: "api_key_scopes",
      type: "Array<string>",
      required: true,
    },
    valid: {
      baseName: "valid",
      type: "boolean",
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
    return ValidateV2Attributes.attributeTypeMap;
  }

  public constructor() {}
}
