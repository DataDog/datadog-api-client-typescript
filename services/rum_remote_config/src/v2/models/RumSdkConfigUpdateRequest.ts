import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSdkConfigUpdateData } from "./RumSdkConfigUpdateData";

/**
 * Request body for updating a RUM SDK configuration.
 */
export class RumSdkConfigUpdateRequest {
  /**
   * The data object for updating a RUM SDK configuration.
   */
  "data": RumSdkConfigUpdateData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "RumSdkConfigUpdateData",
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
    return RumSdkConfigUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
