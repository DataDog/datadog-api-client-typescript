import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSNamespacesResponseData } from "./AWSNamespacesResponseData";

/**
 * AWS Namespaces response body.
 */
export class AWSNamespacesResponse {
  /**
   * AWS Namespaces response data.
   */
  "data": AWSNamespacesResponseData;
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
    data: {
      baseName: "data",
      type: "AWSNamespacesResponseData",
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
    return AWSNamespacesResponse.attributeTypeMap;
  }

  public constructor() {}
}
