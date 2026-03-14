import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateOutcomesAsyncRequestItem } from "./UpdateOutcomesAsyncRequestItem";

/**
 * The JSON:API attributes for a batched set of scorecard outcomes.
 */
export class UpdateOutcomesAsyncAttributes {
  /**
   * Set of scorecard outcomes to update asynchronously.
   */
  "results"?: Array<UpdateOutcomesAsyncRequestItem>;
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
    results: {
      baseName: "results",
      type: "Array<UpdateOutcomesAsyncRequestItem>",
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
    return UpdateOutcomesAsyncAttributes.attributeTypeMap;
  }

  public constructor() {}
}
