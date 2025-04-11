import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentSearchResponseAttributes } from "./IncidentSearchResponseAttributes";
import { IncidentSearchResultsType } from "./IncidentSearchResultsType";

/**
 * Data returned by an incident search.
 */
export class IncidentSearchResponseData {
  /**
   * Attributes returned by an incident search.
   */
  "attributes"?: IncidentSearchResponseAttributes;
  /**
   * Incident search result type.
   */
  "type"?: IncidentSearchResultsType;
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
      type: "IncidentSearchResponseAttributes",
    },
    type: {
      baseName: "type",
      type: "IncidentSearchResultsType",
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
    return IncidentSearchResponseData.attributeTypeMap;
  }

  public constructor() {}
}
