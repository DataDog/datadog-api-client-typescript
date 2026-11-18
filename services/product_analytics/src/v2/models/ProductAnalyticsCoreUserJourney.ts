import { AttributeTypeMap } from "@datadog/datadog-api-client";

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
  "score"?: number;
  /**
   * Map of step ID to the event query of the step.
   */
  "steps"?: { [key: string]: string };
  /**
   * Number of sessions that followed the journey.
   */
  "support"?: number;
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
