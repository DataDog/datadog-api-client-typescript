import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMRetentionFilterCreateData } from "./RUMRetentionFilterCreateData";

/**
 * The RUM retention filter body to create.
 */
export class RUMRetentionFilterCreateRequest {
  /**
   * The new RUM retention filter properties to create.
   */
  "data": RUMRetentionFilterCreateData;
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
      type: "RUMRetentionFilterCreateData",
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
    return RUMRetentionFilterCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
