import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMArchiveSessionAttributes } from "./RUMArchiveSessionAttributes";
import { RUMArchiveSessionType } from "./RUMArchiveSessionType";

/**
 * JSON:API resource.
 */
export class RUMArchiveSession {
  /**
   * Archived session metadata.
   */
  "attributes": RUMArchiveSessionAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * JSON:API resource type.
   */
  "type": RUMArchiveSessionType;
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
      type: "RUMArchiveSessionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RUMArchiveSessionType",
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
    return RUMArchiveSession.attributeTypeMap;
  }

  public constructor() {}
}
