import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentSearchResponseFacetsData } from "./IncidentSearchResponseFacetsData";
import { IncidentSearchResponseIncidentsData } from "./IncidentSearchResponseIncidentsData";

/**
 * Attributes returned by an incident search.
 */
export class IncidentSearchResponseAttributes {
  /**
   * Facet data for incidents returned by a search query.
   */
  "facets": IncidentSearchResponseFacetsData;
  /**
   * Incidents returned by the search.
   */
  "incidents": Array<IncidentSearchResponseIncidentsData>;
  /**
   * Number of incidents returned by the search.
   */
  "total": number;
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
    facets: {
      baseName: "facets",
      type: "IncidentSearchResponseFacetsData",
      required: true,
    },
    incidents: {
      baseName: "incidents",
      type: "Array<IncidentSearchResponseIncidentsData>",
      required: true,
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int32",
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
    return IncidentSearchResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
