import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRecoveryCancelData } from "./RUMRecoveryCancelData";

/**
 * JSON:API document.
 */
export class RUMRecoveryCancelRequest {
  /**
   * JSON:API resource.
   */
  "data": RUMRecoveryCancelData;
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
      type: "RUMRecoveryCancelData",
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
    return RUMRecoveryCancelRequest.attributeTypeMap;
  }

  public constructor() {}
}
