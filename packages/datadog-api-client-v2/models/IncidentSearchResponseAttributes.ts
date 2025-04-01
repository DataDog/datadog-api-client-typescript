/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentSearchResponseFacetsData } from "./IncidentSearchResponseFacetsData";
import { IncidentSearchResponseIncidentsData } from "./IncidentSearchResponseIncidentsData";

import { HttpFile } from "../../datadog-api-client-common/http/http";

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
    "facets": {
      "baseName": "facets",
      "type": "IncidentSearchResponseFacetsData",
      "required": true,
    },
    "incidents": {
      "baseName": "incidents",
      "type": "Array<IncidentSearchResponseIncidentsData>",
      "required": true,
    },
    "total": {
      "baseName": "total",
      "type": "number",
      "required": true,
      "format": "int32",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return IncidentSearchResponseAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









