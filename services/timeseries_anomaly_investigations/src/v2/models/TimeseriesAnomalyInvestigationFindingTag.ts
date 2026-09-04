import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesAnomalyInvestigationFindingSynonym } from "./TimeseriesAnomalyInvestigationFindingSynonym";
import { TimeseriesAnomalyInvestigationInfluenceType } from "./TimeseriesAnomalyInvestigationInfluenceType";

/**
 * Structured tag evidence for an influential-tag finding.
 */
export class TimeseriesAnomalyInvestigationFindingTag {
  /**
   * Kind of influence a tag has on a series.
   */
  "influenceType": TimeseriesAnomalyInvestigationInfluenceType;
  /**
   * Influential tag key.
   */
  "key": string;
  /**
   * Influence rating from 1 through 5.
   */
  "rating": number;
  /**
   * Tags grouped with this tag by Variation of Influence synonym analysis.
   */
  "synonyms": Array<TimeseriesAnomalyInvestigationFindingSynonym>;
  /**
   * Influential values for the tag key.
   */
  "values": Array<string>;
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
    influenceType: {
      baseName: "influence_type",
      type: "TimeseriesAnomalyInvestigationInfluenceType",
      required: true,
    },
    key: {
      baseName: "key",
      type: "string",
      required: true,
    },
    rating: {
      baseName: "rating",
      type: "number",
      required: true,
      format: "double",
    },
    synonyms: {
      baseName: "synonyms",
      type: "Array<TimeseriesAnomalyInvestigationFindingSynonym>",
      required: true,
    },
    values: {
      baseName: "values",
      type: "Array<string>",
      required: true,
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
    return TimeseriesAnomalyInvestigationFindingTag.attributeTypeMap;
  }

  public constructor() {}
}
