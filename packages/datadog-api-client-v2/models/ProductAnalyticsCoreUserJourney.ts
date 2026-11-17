/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * A sequence of events that users follow to use a feature.
 */
export class ProductAnalyticsCoreUserJourney {
  /**
   * Order of the steps, as step IDs joined by `->`.
   */
  "expression"?: string;
  /**
   * Relevance score of the journey. Higher is more relevant.
   */
  "score"?: Int64;
  /**
   * Map of step ID to the event query of the step.
   */
  "steps"?: { [key: string]: string };
  /**
   * Number of sessions that followed the journey.
   */
  "support"?: Int64;

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
    expression: {
      baseName: "expression",
      type: "string",
    },
    score: {
      baseName: "score",
      type: "number",
      format: "int64",
    },
    steps: {
      baseName: "steps",
      type: "{ [key: string]: string; }",
    },
    support: {
      baseName: "support",
      type: "number",
      format: "int64",
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
    return ProductAnalyticsCoreUserJourney.attributeTypeMap;
  }

  public constructor() {}
}
