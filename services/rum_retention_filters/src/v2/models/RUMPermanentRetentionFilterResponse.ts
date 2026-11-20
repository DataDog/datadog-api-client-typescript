import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMPermanentRetentionFilterData } from "./RUMPermanentRetentionFilterData";

/**
 * A permanent RUM retention filter object.
 */
export class RUMPermanentRetentionFilterResponse {
  /**
   * A permanent RUM retention filter.
   */
  "data"?: RUMPermanentRetentionFilterData;
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
      type: "RUMPermanentRetentionFilterData",
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
    return RUMPermanentRetentionFilterResponse.attributeTypeMap;
  }

  public constructor() {}
}
