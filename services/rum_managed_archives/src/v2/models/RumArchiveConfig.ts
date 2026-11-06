import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumArchiveConfigAttributes } from "./RumArchiveConfigAttributes";
import { RumArchiveConfigType } from "./RumArchiveConfigType";

/**
 * JSON:API resource.
 */
export class RumArchiveConfig {
  /**
   * Archive configuration.
   */
  "attributes": RumArchiveConfigAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * JSON:API resource type.
   */
  "type": RumArchiveConfigType;
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
      type: "RumArchiveConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RumArchiveConfigType",
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
    return RumArchiveConfig.attributeTypeMap;
  }

  public constructor() {}
}
