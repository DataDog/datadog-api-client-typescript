import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ActionConnectionDataUpdate } from "./ActionConnectionDataUpdate";

/**
 * Request used to update an action connection.
 */
export class UpdateActionConnectionRequest {
  /**
   * Data related to the connection update.
   */
  "data": ActionConnectionDataUpdate;
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
      type: "ActionConnectionDataUpdate",
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
    return UpdateActionConnectionRequest.attributeTypeMap;
  }

  public constructor() {}
}
