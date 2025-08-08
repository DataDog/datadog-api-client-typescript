/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HTTPBody } from "./HTTPBody";
import { HTTPHeaderUpdate } from "./HTTPHeaderUpdate";
import { HTTPTokenAuthType } from "./HTTPTokenAuthType";
import { HTTPTokenUpdate } from "./HTTPTokenUpdate";
import { UrlParamUpdate } from "./UrlParamUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `HTTPTokenAuthUpdate` object.
 */
export class HTTPTokenAuthUpdate {
  /**
   * The definition of `HTTPBody` object.
   */
  "body"?: HTTPBody;
  /**
   * The `HTTPTokenAuthUpdate` `headers`.
   */
  "headers"?: Array<HTTPHeaderUpdate>;
  /**
   * The `HTTPTokenAuthUpdate` `tokens`.
   */
  "tokens"?: Array<HTTPTokenUpdate>;
  /**
   * The definition of the `HTTPTokenAuth` object.
   */
  "type": HTTPTokenAuthType;
  /**
   * The `HTTPTokenAuthUpdate` `url_parameters`.
   */
  "urlParameters"?: Array<UrlParamUpdate>;

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
    body: {
      baseName: "body",
      type: "HTTPBody",
    },
    headers: {
      baseName: "headers",
      type: "Array<HTTPHeaderUpdate>",
    },
    tokens: {
      baseName: "tokens",
      type: "Array<HTTPTokenUpdate>",
    },
    type: {
      baseName: "type",
      type: "HTTPTokenAuthType",
      required: true,
    },
    urlParameters: {
      baseName: "url_parameters",
      type: "Array<UrlParamUpdate>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HTTPTokenAuthUpdate.attributeTypeMap;
  }

  public constructor() {}
}
