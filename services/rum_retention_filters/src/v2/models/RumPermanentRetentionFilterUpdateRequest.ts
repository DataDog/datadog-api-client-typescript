import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumPermanentRetentionFilterUpdateData } from "./RumPermanentRetentionFilterUpdateData";

/**
 * The permanent RUM retention filter body to update.
 */
export class RumPermanentRetentionFilterUpdateRequest {
  /**
   * The new permanent RUM retention filter configuration to update.
   */
  "data": RumPermanentRetentionFilterUpdateData;
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
      type: "RumPermanentRetentionFilterUpdateData",
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
    return RumPermanentRetentionFilterUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
