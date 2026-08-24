import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRetentionQuotaConfigData } from "./RumRetentionQuotaConfigData";

/**
 * The RUM retention quota configuration response.
 */
export class RumRetentionQuotaConfigResponse {
  /**
   * The RUM retention quota configuration object.
   */
  "data": RumRetentionQuotaConfigData;
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
      type: "RumRetentionQuotaConfigData",
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
    return RumRetentionQuotaConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
