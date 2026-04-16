import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetIoCIndicatorResponseData } from "./GetIoCIndicatorResponseData";

/**
 * Response for the get indicator of compromise endpoint.
 */
export class GetIoCIndicatorResponse {
  /**
   * IoC indicator response data object.
   */
  "data"?: GetIoCIndicatorResponseData;
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
      type: "GetIoCIndicatorResponseData",
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
    return GetIoCIndicatorResponse.attributeTypeMap;
  }

  public constructor() {}
}
