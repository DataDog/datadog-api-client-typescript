import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMSdkConfigData } from "./RUMSdkConfigData";

/**
 * Response containing a RUM SDK configuration.
 */
export class RUMSdkConfigResponse {
  /**
   * The RUM SDK configuration data object.
   */
  "data": RUMSdkConfigData;
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
      type: "RUMSdkConfigData",
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
    return RUMSdkConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
