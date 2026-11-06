import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRecoveryRequestData } from "./RumRecoveryRequestData";

/**
 * JSON:API document.
 */
export class RumRecoveryRequestResponse {
  /**
   * JSON:API resource.
   */
  "data": RumRecoveryRequestData;
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
      type: "RumRecoveryRequestData",
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
    return RumRecoveryRequestResponse.attributeTypeMap;
  }

  public constructor() {}
}
