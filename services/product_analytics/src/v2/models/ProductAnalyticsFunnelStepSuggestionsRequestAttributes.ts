import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a step suggestions request.
 */
export class ProductAnalyticsFunnelStepSuggestionsRequestAttributes {
  /**
   * Only use journeys from this RUM application.
   */
  "applicationId"?: string;
  /**
   * Order of the funnel steps, as step IDs joined by `->`.
   */
  "expression": string;
  /**
   * Map of step ID to the event query of the step. Steps are matched in the string sort
   * order of their IDs, so use zero-padded IDs such as `node_01` and `node_02`. Without padding,
   * `node_10` sorts before `node_2`.
   */
  "steps": { [key: string]: string };
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
    applicationId: {
      baseName: "application_id",
      type: "string",
    },
    expression: {
      baseName: "expression",
      type: "string",
      required: true,
    },
    steps: {
      baseName: "steps",
      type: "{ [key: string]: string; }",
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
    return ProductAnalyticsFunnelStepSuggestionsRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
