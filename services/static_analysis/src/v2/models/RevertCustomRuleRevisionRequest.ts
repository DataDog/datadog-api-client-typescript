import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RevertCustomRuleRevisionRequestData } from "./RevertCustomRuleRevisionRequestData";

export class RevertCustomRuleRevisionRequest {
  "data"?: RevertCustomRuleRevisionRequestData;
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
      type: "RevertCustomRuleRevisionRequestData",
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
    return RevertCustomRuleRevisionRequest.attributeTypeMap;
  }

  public constructor() {}
}
