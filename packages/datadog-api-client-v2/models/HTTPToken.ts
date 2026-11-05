/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HTTPTokenValue } from "./HTTPTokenValue";
import { TokenType } from "./TokenType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `HTTPToken` object.
 */
export class HTTPToken {
  /**
   * The `HTTPToken` `name`.
   */
  "name": string;
  /**
   * The definition of `TokenType` object.
   */
  "type": TokenType;
  /**
   * The `HTTPToken` `value`.
   */
  "value": HTTPTokenValue;

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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TokenType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "HTTPTokenValue",
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
    return HTTPToken.attributeTypeMap;
  }

  public constructor() {}
}
