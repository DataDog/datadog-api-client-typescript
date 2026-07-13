import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A full explanation of the finding, including root cause analysis and supporting evidence.
 */
export class InvestigationConclusion {
  /**
   * A full explanation of the finding, including root cause analysis and supporting evidence.
   */
  "description": string;
  /**
   * A summary of the finding, including affected components and timeframe.
   */
  "summary": string;
  /**
   * The title of the conclusion.
   */
  "title": string;
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
    summary: {
      baseName: "summary",
      type: "string",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
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
    return InvestigationConclusion.attributeTypeMap;
  }

  public constructor() {}
}
