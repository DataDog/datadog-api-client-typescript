import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConnectionGroupDataResponse } from "./ConnectionGroupDataResponse";

/**
 * Response for updating a connection group.
 */
export class UpdateConnectionGroupResponse {
  /**
   * Data object for a connection group.
   */
  "data": ConnectionGroupDataResponse;
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
      type: "ConnectionGroupDataResponse",
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
    return UpdateConnectionGroupResponse.attributeTypeMap;
  }

  public constructor() {}
}
