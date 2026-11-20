import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMConfigCreateData } from "./RUMConfigCreateData";

/**
 * Request body for creating the RUM configuration.
 */
export class RUMConfigCreateRequest {
  /**
   * Object describing the RUM configuration to create.
   */
  "data": RUMConfigCreateData;
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
      type: "RUMConfigCreateData",
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
    return RUMConfigCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
