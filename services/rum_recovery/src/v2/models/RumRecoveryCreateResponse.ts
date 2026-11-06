import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRecoveryCreateResponseData } from "./RumRecoveryCreateResponseData";

/**
 * JSON:API document.
 */
export class RumRecoveryCreateResponse {
  /**
   * JSON:API resource.
   */
  "data": RumRecoveryCreateResponseData;
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
      type: "RumRecoveryCreateResponseData",
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
    return RumRecoveryCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
