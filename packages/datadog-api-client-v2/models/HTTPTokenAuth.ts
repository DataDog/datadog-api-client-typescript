/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HTTPBody } from "./HTTPBody";
import { HTTPHeader } from "./HTTPHeader";
import { HTTPToken } from "./HTTPToken";
import { HTTPTokenAuthType } from "./HTTPTokenAuthType";
import { UrlParam } from "./UrlParam";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `HTTPTokenAuth` object.
 */
export class HTTPTokenAuth {
  /**
   * The definition of `HTTPBody` object.
   */
  "body"?: HTTPBody;
  /**
   * The `HTTPTokenAuth` `headers`.
   */
  "headers"?: Array<HTTPHeader>;
  /**
   * The `HTTPTokenAuth` `tokens`.
   */
  "tokens"?: Array<HTTPToken>;
  /**
   * The definition of `HTTPTokenAuthType` object.
   */
  "type": HTTPTokenAuthType;
  /**
   * The `HTTPTokenAuth` `url_parameters`.
   */
  "urlParameters"?: Array<UrlParam>;

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
      type: "Array<HTTPHeader>",
    },
    tokens: {
      baseName: "tokens",
      type: "Array<HTTPToken>",
    },
    type: {
      baseName: "type",
      type: "HTTPTokenAuthType",
      required: true,
    },
    urlParameters: {
      baseName: "url_parameters",
      type: "Array<UrlParam>",
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
    return HTTPTokenAuth.attributeTypeMap;
  }

  public constructor() {}
}
