import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MaxSessionDurationUpdateData } from "./MaxSessionDurationUpdateData";

/**
 * A request to update the maximum session duration for an organization.
 */
export class MaxSessionDurationUpdateRequest {
  /**
   * The data object for a maximum session duration update request.
   */
  "data": MaxSessionDurationUpdateData;
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
      type: "MaxSessionDurationUpdateData",
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
