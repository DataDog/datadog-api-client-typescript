/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TimeseriesAnomalyInvestigationAnomalyFindingType } from "./TimeseriesAnomalyInvestigationAnomalyFindingType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Finding that describes the anomaly when completed analysis produces no displayable influential tags.
 */
export class TimeseriesAnomalyInvestigationAnomalyFinding {
  /**
   * Deterministic explanation of the finding.
   */
  "description": string;
  /**
   * Concise, deterministic finding title.
   */
  "headline": string;
  /**
   * Finding category for an anomaly without a displayable influential tag.
   */
  "type": TimeseriesAnomalyInvestigationAnomalyFindingType;

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
    type: {
      baseName: "type",
      type: "TimeseriesAnomalyInvestigationAnomalyFindingType",
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
    return TimeseriesAnomalyInvestigationAnomalyFinding.attributeTypeMap;
  }

  public constructor() {}
}
