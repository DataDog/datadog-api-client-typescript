import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsNetworkTestResponseData } from "./SyntheticsNetworkTestResponseData";

/**
 * Network Path test response.
 */
export class SyntheticsNetworkTestResponse {
  /**
   * Network Path test response data.
   */
  "data"?: SyntheticsNetworkTestResponseData;
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
      type: "SyntheticsNetworkTestResponseData",
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
    return SyntheticsNetworkTestResponse.attributeTypeMap;
  }

  public constructor() {}
}
