import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRecoveryCreateResponseData } from "./RUMRecoveryCreateResponseData";

/**
 * JSON:API document.
 */
export class RUMRecoveryCreateResponse {
  /**
   * JSON:API resource.
   */
  "data": RUMRecoveryCreateResponseData;
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
      type: "RUMRecoveryCreateResponseData",
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
    return RUMRecoveryCreateResponse.attributeTypeMap;
  }

  public constructor() {}
}
