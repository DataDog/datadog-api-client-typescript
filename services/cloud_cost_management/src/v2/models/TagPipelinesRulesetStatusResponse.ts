import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagPipelinesRulesetStatusData } from "./TagPipelinesRulesetStatusData";

/**
 * List of tag pipeline ruleset statuses.
 */
export class TagPipelinesRulesetStatusResponse {
  /**
   * List of ruleset statuses.
   */
  "data": Array<TagPipelinesRulesetStatusData>;
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
      type: "Array<TagPipelinesRulesetStatusData>",
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
    return TagPipelinesRulesetStatusResponse.attributeTypeMap;
  }

  public constructor() {}
}
