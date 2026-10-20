import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TemporaryGrantRequestDecisionAttributes } from "./TemporaryGrantRequestDecisionAttributes";
import { TemporaryGrantRequestType } from "./TemporaryGrantRequestType";

/**
 * A decision on a pending request.
 */
export class TemporaryGrantRequestDecisionData {
  /**
   * Binary decision. Overrides, reason fields, and unknown attributes are rejected, including null values.
   */
  "attributes": TemporaryGrantRequestDecisionAttributes;
  /**
   * Optional request UUID. If supplied it must match request_id in the path.
   */
  "id"?: string;
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
      type: "TemporaryGrantRequestDecisionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
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
    return TemporaryGrantRequestDecisionData.attributeTypeMap;
  }

  public constructor() {}
}
