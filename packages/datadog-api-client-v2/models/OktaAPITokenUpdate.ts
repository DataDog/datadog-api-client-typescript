/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OktaAPITokenType } from "./OktaAPITokenType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of the `OktaAPIToken` object.
 */
export class OktaAPITokenUpdate {
  /**
   * The `OktaAPITokenUpdate` `api_token`.
   */
  "apiToken"?: string;
  /**
   * The `OktaAPITokenUpdate` `domain`.
   */
  "domain"?: string;
  /**
   * The definition of the `OktaAPIToken` object.
   */
  "type": OktaAPITokenType;

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
    domain: {
      baseName: "domain",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "OktaAPITokenType",
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
    return OktaAPITokenUpdate.attributeTypeMap;
  }

  public constructor() {}
}
