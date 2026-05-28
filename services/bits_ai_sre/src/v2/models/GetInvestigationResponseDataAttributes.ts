import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { InvestigationConclusion } from "./InvestigationConclusion";

/**
 * Attributes of the investigation.
 */
export class GetInvestigationResponseDataAttributes {
  /**
   * The conclusions drawn from the investigation.
   */
  "conclusions": Array<InvestigationConclusion>;
  /**
   * The current status of the investigation.
   */
  "status": string;
  /**
   * The title of the investigation.
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
    conclusions: {
      baseName: "conclusions",
      type: "Array<InvestigationConclusion>",
      required: true,
    },
    status: {
      baseName: "status",
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
    return GetInvestigationResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
