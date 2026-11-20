import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRetentionQuotaConfigUpdateData } from "./RUMRetentionQuotaConfigUpdateData";

/**
 * The body of a request to create or update a RUM retention quota configuration.
 */
export class RUMRetentionQuotaConfigUpdateRequest {
  /**
   * The RUM retention quota configuration to create or update.
   */
  "data": RUMRetentionQuotaConfigUpdateData;
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
      type: "RUMRetentionQuotaConfigUpdateData",
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
    return RUMRetentionQuotaConfigUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
