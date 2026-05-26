import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiCustomRuleRevisionResponseData } from "./AiCustomRuleRevisionResponseData";

/**
 * Response containing a list of AI custom rule revisions.
 */
export class AiCustomRuleRevisionsResponse {
  /**
   * The list of AI custom rule revisions.
   */
  "data": Array<AiCustomRuleRevisionResponseData>;
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
    data: {
      baseName: "data",
      type: "Array<AiCustomRuleRevisionResponseData>",
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
    return AiCustomRuleRevisionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
