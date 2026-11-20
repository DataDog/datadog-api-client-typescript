import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRetentionQuotaConfigData } from "./RUMRetentionQuotaConfigData";

/**
 * The RUM retention quota configuration response.
 */
export class RUMRetentionQuotaConfigResponse {
  /**
   * The RUM retention quota configuration object.
   */
  "data": RUMRetentionQuotaConfigData;
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
      type: "RUMRetentionQuotaConfigData",
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
    return RUMRetentionQuotaConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
