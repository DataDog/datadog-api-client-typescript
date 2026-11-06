import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumArchiveConfig } from "./RumArchiveConfig";

/**
 * JSON:API document.
 */
export class RumArchiveConfigResponse {
  /**
   * JSON:API resource.
   */
  "data": RumArchiveConfig;
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
      type: "RumArchiveConfig",
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
    return RumArchiveConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
