import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamsResponseMetaPagination } from "./TeamsResponseMetaPagination";

/**
 * Teams response metadata.
 */
export class TeamsResponseMeta {
  /**
   * Teams response metadata.
   */
  "pagination"?: TeamsResponseMetaPagination;
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
    pagination: {
      baseName: "pagination",
      type: "TeamsResponseMetaPagination",
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
    return TeamsResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
