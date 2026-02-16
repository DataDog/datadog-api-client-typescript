import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConnectionGroupDataAttributesRequest } from "./ConnectionGroupDataAttributesRequest";
import { ConnectionGroupType } from "./ConnectionGroupType";

/**
 * Data object for updating a connection group.
 */
export class ConnectionGroupDataRequest {
  /**
   * Attributes for updating a connection group.
   */
  "attributes"?: ConnectionGroupDataAttributesRequest;
  /**
   * The definition of `ConnectionGroupType` object.
   */
  "type": ConnectionGroupType;
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
      type: "ConnectionGroupDataAttributesRequest",
    },
    type: {
      baseName: "type",
      type: "ConnectionGroupType",
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
    return ConnectionGroupDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
