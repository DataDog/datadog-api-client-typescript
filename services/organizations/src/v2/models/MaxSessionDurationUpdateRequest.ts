import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaxSessionDurationUpdateRequestData } from "./MaxSessionDurationUpdateRequestData";

/**
 * Request to update the maximum session duration.
 */
export class MaxSessionDurationUpdateRequest {
  /**
   * Data wrapper for maximum session duration update.
   */
  "data": MaxSessionDurationUpdateRequestData;
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
      type: "MaxSessionDurationUpdateRequestData",
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
    return MaxSessionDurationUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
