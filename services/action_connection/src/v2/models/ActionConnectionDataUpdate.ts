import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ActionConnectionAttributesUpdate } from "./ActionConnectionAttributesUpdate";
import { ActionConnectionDataType } from "./ActionConnectionDataType";

/**
 * Data related to the connection update.
 */
export class ActionConnectionDataUpdate {
  /**
   * The definition of `ActionConnectionAttributesUpdate` object.
   */
  "attributes": ActionConnectionAttributesUpdate;
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
      type: "ActionConnectionAttributesUpdate",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ActionConnectionDataType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ActionConnectionDataUpdate.attributeTypeMap;
  }

  public constructor() {}
}
