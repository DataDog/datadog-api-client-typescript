import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentResponseMetaPagination } from "./IncidentResponseMetaPagination";

/**
 * The metadata object containing pagination metadata.
 */
export class IncidentSearchResponseMeta {
  /**
   * Pagination properties.
   */
  "pagination"?: IncidentResponseMetaPagination;
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
      type: "IncidentResponseMetaPagination",
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
    return IncidentSearchResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
