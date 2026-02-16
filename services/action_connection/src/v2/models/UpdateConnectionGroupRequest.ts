import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConnectionGroupDataRequest } from "./ConnectionGroupDataRequest";

/**
 * Request for updating a connection group.
 */
export class UpdateConnectionGroupRequest {
  /**
   * Data object for updating a connection group.
   */
  "data": ConnectionGroupDataRequest;
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
      type: "ConnectionGroupDataRequest",
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
    return UpdateConnectionGroupRequest.attributeTypeMap;
  }

  public constructor() {}
}
