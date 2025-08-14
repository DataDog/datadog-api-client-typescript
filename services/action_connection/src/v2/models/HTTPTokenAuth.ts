import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HTTPBody } from "./HTTPBody";
import { HTTPHeader } from "./HTTPHeader";
import { HTTPToken } from "./HTTPToken";
import { HTTPTokenAuthType } from "./HTTPTokenAuthType";
import { UrlParam } from "./UrlParam";

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
   * The definition of the `HTTPTokenAuth` object.
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
      type: "{ [key: string]: any; }",
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
