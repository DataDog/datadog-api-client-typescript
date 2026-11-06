import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRecoveryCancelData } from "./RumRecoveryCancelData";

/**
 * JSON:API document.
 */
export class RumRecoveryCancelRequest {
  /**
   * JSON:API resource.
   */
  "data": RumRecoveryCancelData;
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
      type: "RumRecoveryCancelData",
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
    return RumRecoveryCancelRequest.attributeTypeMap;
  }

  public constructor() {}
}
