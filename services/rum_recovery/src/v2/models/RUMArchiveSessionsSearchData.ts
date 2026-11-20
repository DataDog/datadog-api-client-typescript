import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RUMArchiveSessionsSearchAttributes } from "./RUMArchiveSessionsSearchAttributes";

/**
 * JSON:API resource.
 */
export class RUMArchiveSessionsSearchData {
  /**
   * Archived-session query. A window wider than configured archive retention is narrowed before searching.
   */
  "attributes": RUMArchiveSessionsSearchAttributes;
  /**
   * Optional resource identifier.
   */
  "id"?: string;
  /**
   * JSON:API resource type.
   */
  "type"?: string;
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
      type: "RUMArchiveSessionsSearchAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return RUMArchiveSessionsSearchData.attributeTypeMap;
  }

  public constructor() {}
}
