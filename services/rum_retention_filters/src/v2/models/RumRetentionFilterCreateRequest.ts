import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumRetentionFilterCreateData } from "./RumRetentionFilterCreateData";

/**
 * The RUM retention filter body to create.
 */
export class RumRetentionFilterCreateRequest {
  /**
   * The new RUM retention filter properties to create.
   */
  "data": RumRetentionFilterCreateData;
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
      type: "RumRetentionFilterCreateData",
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
    return RumRetentionFilterCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
