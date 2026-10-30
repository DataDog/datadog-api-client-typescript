import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TemporaryGrantRequestCreateAttributes } from "./TemporaryGrantRequestCreateAttributes";
import { TemporaryGrantRequestType } from "./TemporaryGrantRequestType";

/**
 * The request resource to create. The server generates its ID.
 */
export class TemporaryGrantRequestCreateData {
  /**
   * Immutable terms and justification for a temporary grant request.
   */
  "attributes": TemporaryGrantRequestCreateAttributes;
  /**
   * The temporary grant request resource type.
   */
  "type": TemporaryGrantRequestType;
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
      type: "TemporaryGrantRequestCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TemporaryGrantRequestType",
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
    return TemporaryGrantRequestCreateData.attributeTypeMap;
  }

  public constructor() {}
}
