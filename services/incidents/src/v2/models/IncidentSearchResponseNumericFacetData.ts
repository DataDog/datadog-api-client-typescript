import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentSearchResponseNumericFacetDataAggregates } from "./IncidentSearchResponseNumericFacetDataAggregates";

/**
 * Facet data numeric attributes of an incident.
 */
export class IncidentSearchResponseNumericFacetData {
  /**
   * Aggregate information for numeric incident data.
   */
  "aggregates": IncidentSearchResponseNumericFacetDataAggregates;
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
    aggregates: {
      baseName: "aggregates",
      type: "IncidentSearchResponseNumericFacetDataAggregates",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
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
    return IncidentSearchResponseNumericFacetData.attributeTypeMap;
  }

  public constructor() {}
}
