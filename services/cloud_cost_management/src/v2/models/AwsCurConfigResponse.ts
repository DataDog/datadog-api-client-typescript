import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AwsCurConfigResponseData } from "./AwsCurConfigResponseData";

/**
 * The definition of `AwsCurConfigResponse` object.
 */
export class AwsCurConfigResponse {
  /**
   * The definition of `AwsCurConfigResponseData` object.
   */
  "data"?: AwsCurConfigResponseData;
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
      type: "AwsCurConfigResponseData",
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
    return AwsCurConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
