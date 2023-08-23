/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentSearchResponseFieldFacetData } from "./IncidentSearchResponseFieldFacetData";
import { IncidentSearchResponseNumericFacetData } from "./IncidentSearchResponseNumericFacetData";
import { IncidentSearchResponsePropertyFieldFacetData } from "./IncidentSearchResponsePropertyFieldFacetData";
import { IncidentSearchResponseUserFacetData } from "./IncidentSearchResponseUserFacetData";

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
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    commander: {
      type: "Array<IncidentSearchResponseUserFacetData>",
    },
    createdBy: {
      baseName: "created_by",
      type: "Array<IncidentSearchResponseUserFacetData>",
    },
    fields: {
      type: "Array<IncidentSearchResponsePropertyFieldFacetData>",
    },
    impact: {
      type: "Array<IncidentSearchResponseFieldFacetData>",
    },
    lastModifiedBy: {
      baseName: "last_modified_by",
      type: "Array<IncidentSearchResponseUserFacetData>",
    },
    postmortem: {
      type: "Array<IncidentSearchResponseFieldFacetData>",
    },
    responder: {
      type: "Array<IncidentSearchResponseUserFacetData>",
    },
    severity: {
      type: "Array<IncidentSearchResponseFieldFacetData>",
    },
    state: {
      type: "Array<IncidentSearchResponseFieldFacetData>",
    },
    timeToRepair: {
      baseName: "time_to_repair",
      type: "Array<IncidentSearchResponseNumericFacetData>",
    },
    timeToResolve: {
      baseName: "time_to_resolve",
      type: "Array<IncidentSearchResponseNumericFacetData>",
    },
  };
}
