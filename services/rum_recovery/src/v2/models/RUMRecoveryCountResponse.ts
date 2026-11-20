import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRecoveryCountResponseData } from "./RUMRecoveryCountResponseData";

/**
 * JSON:API document.
 */
export class RUMRecoveryCountResponse {
  /**
   * JSON:API resource.
   */
  "data": RUMRecoveryCountResponseData;
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
      type: "RUMRecoveryCountResponseData",
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
    return RUMRecoveryCountResponse.attributeTypeMap;
  }

  public constructor() {}
}
