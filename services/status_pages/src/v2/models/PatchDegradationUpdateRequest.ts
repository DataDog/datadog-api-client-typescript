import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchDegradationUpdateRequestData } from "./PatchDegradationUpdateRequestData";

/**
 * Request object for editing a degradation update.
 */
export class PatchDegradationUpdateRequest {
  /**
   * The data object for editing a degradation update.
   */
  "data"?: PatchDegradationUpdateRequestData;
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
      type: "PatchDegradationUpdateRequestData",
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
    return PatchDegradationUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
