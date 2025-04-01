/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentSearchResponseFieldFacetData } from "./IncidentSearchResponseFieldFacetData";
import { IncidentSearchResponseNumericFacetData } from "./IncidentSearchResponseNumericFacetData";
import { IncidentSearchResponsePropertyFieldFacetData } from "./IncidentSearchResponsePropertyFieldFacetData";
import { IncidentSearchResponseUserFacetData } from "./IncidentSearchResponseUserFacetData";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Facet data for incidents returned by a search query.
*/
export class IncidentSearchResponseFacetsData {
  /**
   * Facet data for incident commander users.
  */
  "commander"?: Array<IncidentSearchResponseUserFacetData>;
  /**
   * Facet data for incident creator users.
  */
  "createdBy"?: Array<IncidentSearchResponseUserFacetData>;
  /**
   * Facet data for incident property fields.
  */
  "fields"?: Array<IncidentSearchResponsePropertyFieldFacetData>;
  /**
   * Facet data for incident impact attributes.
  */
  "impact"?: Array<IncidentSearchResponseFieldFacetData>;
  /**
   * Facet data for incident last modified by users.
  */
  "lastModifiedBy"?: Array<IncidentSearchResponseUserFacetData>;
  /**
   * Facet data for incident postmortem existence.
  */
  "postmortem"?: Array<IncidentSearchResponseFieldFacetData>;
  /**
   * Facet data for incident responder users.
  */
  "responder"?: Array<IncidentSearchResponseUserFacetData>;
  /**
   * Facet data for incident severity attributes.
  */
  "severity"?: Array<IncidentSearchResponseFieldFacetData>;
  /**
   * Facet data for incident state attributes.
  */
  "state"?: Array<IncidentSearchResponseFieldFacetData>;
  /**
   * Facet data for incident time to repair metrics.
  */
  "timeToRepair"?: Array<IncidentSearchResponseNumericFacetData>;
  /**
   * Facet data for incident time to resolve metrics.
  */
  "timeToResolve"?: Array<IncidentSearchResponseNumericFacetData>;

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
    "commander": {
      "baseName": "commander",
      "type": "Array<IncidentSearchResponseUserFacetData>",
    },
    "createdBy": {
      "baseName": "created_by",
      "type": "Array<IncidentSearchResponseUserFacetData>",
    },
    "fields": {
      "baseName": "fields",
      "type": "Array<IncidentSearchResponsePropertyFieldFacetData>",
    },
    "impact": {
      "baseName": "impact",
      "type": "Array<IncidentSearchResponseFieldFacetData>",
    },
    "lastModifiedBy": {
      "baseName": "last_modified_by",
      "type": "Array<IncidentSearchResponseUserFacetData>",
    },
    "postmortem": {
      "baseName": "postmortem",
      "type": "Array<IncidentSearchResponseFieldFacetData>",
    },
    "responder": {
      "baseName": "responder",
      "type": "Array<IncidentSearchResponseUserFacetData>",
    },
    "severity": {
      "baseName": "severity",
      "type": "Array<IncidentSearchResponseFieldFacetData>",
    },
    "state": {
      "baseName": "state",
      "type": "Array<IncidentSearchResponseFieldFacetData>",
    },
    "timeToRepair": {
      "baseName": "time_to_repair",
      "type": "Array<IncidentSearchResponseNumericFacetData>",
    },
    "timeToResolve": {
      "baseName": "time_to_resolve",
      "type": "Array<IncidentSearchResponseNumericFacetData>",
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




    return IncidentSearchResponseFacetsData.attributeTypeMap;

  }

  public constructor() {











  }
}









