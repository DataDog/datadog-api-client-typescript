import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ActionConnectionDataType } from "./ActionConnectionDataType";
import { ConnectionDataAttributesResponse } from "./ConnectionDataAttributesResponse";

/**
 * Data object for an action connection.
 */
export class ConnectionDataResponse {
  /**
   * Attributes of an action connection.
   */
  "attributes": ConnectionDataAttributesResponse;
  /**
   * The unique identifier of the connection.
   */
  "id": string;
  /**
   * The definition of `ActionConnectionDataType` object.
   */
  "type": ActionConnectionDataType;
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
    attributes: {
      baseName: "attributes",
      type: "ConnectionDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ActionConnectionDataType",
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
    return ConnectionDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
