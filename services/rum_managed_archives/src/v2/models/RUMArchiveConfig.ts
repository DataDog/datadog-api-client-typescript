import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMArchiveConfigAttributes } from "./RUMArchiveConfigAttributes";
import { RUMArchiveConfigType } from "./RUMArchiveConfigType";

/**
 * JSON:API resource.
 */
export class RUMArchiveConfig {
  /**
   * Archive configuration.
   */
  "attributes": RUMArchiveConfigAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * JSON:API resource type.
   */
  "type": RUMArchiveConfigType;
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
      type: "RUMArchiveConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMArchiveConfigType",
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
    return RUMArchiveConfig.attributeTypeMap;
  }

  public constructor() {}
}
