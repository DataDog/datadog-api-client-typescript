/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HTTPTokenResponseValue } from "./HTTPTokenResponseValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An HTTP authentication token returned by the API. Its type is implicitly `SECRET`.
 */
export class HTTPTokenResponse {
  /**
   * Name of the HTTP authentication token.
   */
  "name": string;
  /**
   * The `HTTPTokenResponse` `value`.
   */
  "value": HTTPTokenResponseValue;

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
    value: {
      baseName: "value",
      type: "HTTPTokenResponseValue",
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
    return HTTPTokenResponse.attributeTypeMap;
  }

  public constructor() {}
}
