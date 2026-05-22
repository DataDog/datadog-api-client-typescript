import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SampleLogGenerationBulkSubscriptionResultItem } from "./SampleLogGenerationBulkSubscriptionResultItem";

/**
 * Response containing the per-content-pack results of a bulk subscription request.
 */
export class SampleLogGenerationBulkSubscriptionResponse {
  /**
   * The list of bulk subscription results, one per requested content pack.
   */
  "data": Array<SampleLogGenerationBulkSubscriptionResultItem>;
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
      type: "Array<SampleLogGenerationBulkSubscriptionResultItem>",
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
    return SampleLogGenerationBulkSubscriptionResponse.attributeTypeMap;
  }

  public constructor() {}
}
