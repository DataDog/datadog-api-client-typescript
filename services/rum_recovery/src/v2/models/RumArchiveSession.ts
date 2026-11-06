import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumArchiveSessionAttributes } from "./RumArchiveSessionAttributes";
import { RumArchiveSessionType } from "./RumArchiveSessionType";

/**
 * JSON:API resource.
 */
export class RumArchiveSession {
  /**
   * Archived session metadata.
   */
  "attributes": RumArchiveSessionAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * JSON:API resource type.
   */
  "type": RumArchiveSessionType;
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
      type: "RumArchiveSessionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumArchiveSessionType",
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
    return RumArchiveSession.attributeTypeMap;
  }

  public constructor() {}
}
