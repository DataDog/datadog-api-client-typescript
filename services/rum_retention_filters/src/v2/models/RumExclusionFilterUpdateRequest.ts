import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumExclusionFilterUpdateData } from "./RumExclusionFilterUpdateData";

/**
 * The exclusion filter body to update.
 */
export class RumExclusionFilterUpdateRequest {
  /**
   * The exclusion filter properties to update.
   */
  "data": RumExclusionFilterUpdateData;
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
      type: "RumExclusionFilterUpdateData",
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
    return RumExclusionFilterUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
