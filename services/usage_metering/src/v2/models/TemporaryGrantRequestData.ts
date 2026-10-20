import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TemporaryGrantRequestAttributes } from "./TemporaryGrantRequestAttributes";
import { TemporaryGrantRequestType } from "./TemporaryGrantRequestType";

/**
 * A temporary grant request resource.
 */
export class TemporaryGrantRequestData {
  /**
   * Request history and the linked grant state. List and detail reads include grant_state for approved requests. Decision responses record the decision; read the request for current grant state.
   */
  "attributes": TemporaryGrantRequestAttributes;
  /**
   * Server-generated request UUID.
   */
  "id": string;
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
      type: "TemporaryGrantRequestAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
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
    return TemporaryGrantRequestData.attributeTypeMap;
  }

  public constructor() {}
}
