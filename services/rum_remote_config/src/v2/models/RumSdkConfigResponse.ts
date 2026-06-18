import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumSdkConfigData } from "./RumSdkConfigData";

/**
 * Response containing a RUM SDK configuration.
 */
export class RumSdkConfigResponse {
  /**
   * The RUM SDK configuration data object.
   */
  "data": RumSdkConfigData;
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
      type: "RumSdkConfigData",
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
    return RumSdkConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
