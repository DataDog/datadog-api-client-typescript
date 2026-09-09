import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomRulesetRequestData } from "./CustomRulesetRequestData";

/**
 * Request body for creating or updating a custom ruleset.
 */
export class CustomRulesetRequest {
  /**
   * Data object for a custom ruleset create or update request. The resource `id` is
   * required and must equal both `attributes.name` and, on update, the `ruleset_name`
   * path parameter; a request that omits it or supplies a different value is rejected
   * with a 412 response.
   */
  "data"?: CustomRulesetRequestData;
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
      type: "CustomRulesetRequestData",
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
    return CustomRulesetRequest.attributeTypeMap;
  }

  public constructor() {}
}
