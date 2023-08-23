/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentSearchResponseFacetsData } from "./IncidentSearchResponseFacetsData";
import { IncidentSearchResponseIncidentsData } from "./IncidentSearchResponseIncidentsData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    facets: {
      type: "IncidentSearchResponseFacetsData",
      required: true,
    },
    incidents: {
      type: "Array<IncidentSearchResponseIncidentsData>",
      required: true,
    },
    total: {
      type: "number",
      required: true,
      format: "int32",
    },
  };
}
