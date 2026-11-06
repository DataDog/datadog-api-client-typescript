import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRecoveryCreateData } from "./RumRecoveryCreateData";

/**
 * JSON:API document.
 */
export class RumRecoveryCreateRequest {
  /**
   * JSON:API resource.
   */
  "data": RumRecoveryCreateData;
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
      type: "RumRecoveryCreateData",
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
    return RumRecoveryCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
