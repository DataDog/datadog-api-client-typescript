import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateConnectionRequestData } from "./UpdateConnectionRequestData";

/**
 * Request body for updating an existing data source connection by adding, modifying, or removing fields.
 */
export class UpdateConnectionRequest {
  /**
   * The data object containing the resource identifier and attributes for updating an existing connection.
   */
  "data"?: UpdateConnectionRequestData;
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
      type: "UpdateConnectionRequestData",
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
    return UpdateConnectionRequest.attributeTypeMap;
  }

  public constructor() {}
}
