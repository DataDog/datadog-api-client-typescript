/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentSearchResponseFieldFacetData } from "./IncidentSearchResponseFieldFacetData";
import { IncidentSearchResponseNumericFacetDataAggregates } from "./IncidentSearchResponseNumericFacetDataAggregates";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Facet data for the incident property fields.
*/
export class IncidentSearchResponsePropertyFieldFacetData {
  /**
   * Aggregate information for numeric incident data.
  */
  "aggregates"?: IncidentSearchResponseNumericFacetDataAggregates;
  /**
   * Facet data for the property field of an incident.
  */
  "facets": Array<IncidentSearchResponseFieldFacetData>;
  /**
   * Name of the incident property field.
  */
  "name": string;

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
    "aggregates": {
      "baseName": "aggregates",
      "type": "IncidentSearchResponseNumericFacetDataAggregates",
    },
    "facets": {
      "baseName": "facets",
      "type": "Array<IncidentSearchResponseFieldFacetData>",
      "required": true,
    },
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
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




    return IncidentSearchResponsePropertyFieldFacetData.attributeTypeMap;

  }

  public constructor() {











  }
}









