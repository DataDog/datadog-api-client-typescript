import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesAnomalyInvestigationFindingTag } from "./TimeseriesAnomalyInvestigationFindingTag";
import { TimeseriesAnomalyInvestigationInfluentialTagFindingType } from "./TimeseriesAnomalyInvestigationInfluentialTagFindingType";

/**
 * Finding that attributes an anomaly to an influential tag.
 */
export class TimeseriesAnomalyInvestigationInfluentialTagFinding {
  /**
   * Deterministic explanation of the finding.
   */
  "description": string;
  /**
   * Concise, deterministic finding title.
   */
  "headline": string;
  /**
   * Structured tag evidence for an influential-tag finding.
   */
  "tag": TimeseriesAnomalyInvestigationFindingTag;
  /**
   * Finding category for an influential tag.
   */
  "type": TimeseriesAnomalyInvestigationInfluentialTagFindingType;
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
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    headline: {
      baseName: "headline",
      type: "string",
      required: true,
    },
    tag: {
      baseName: "tag",
      type: "TimeseriesAnomalyInvestigationFindingTag",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TimeseriesAnomalyInvestigationInfluentialTagFindingType",
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
    return TimeseriesAnomalyInvestigationInfluentialTagFinding.attributeTypeMap;
  }

  public constructor() {}
}
