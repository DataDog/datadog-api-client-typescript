import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRetentionFilterData } from "./RUMRetentionFilterData";

/**
 * The RUM retention filter object.
 */
export class RUMRetentionFilterResponse {
  /**
   * The RUM retention filter.
   */
  "data"?: RUMRetentionFilterData;
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
      type: "RUMRetentionFilterData",
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
    return RUMRetentionFilterResponse.attributeTypeMap;
  }

  public constructor() {}
}
