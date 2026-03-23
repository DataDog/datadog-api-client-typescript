import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RevertCustomRuleRevisionRequestData } from "./RevertCustomRuleRevisionRequestData";

/**
 * Request body for reverting a custom rule to a previous revision.
 */
export class RevertCustomRuleRevisionRequest {
  /**
   * Data object for a request to revert a custom rule to a previous revision.
   */
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
