import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SampleLogGenerationBulkSubscriptionData } from "./SampleLogGenerationBulkSubscriptionData";

/**
 * Request body to create sample log generation subscriptions for multiple content packs at once.
 */
export class SampleLogGenerationBulkSubscriptionRequest {
  /**
   * The bulk subscription request body.
   */
  "data": SampleLogGenerationBulkSubscriptionData;
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
      type: "SampleLogGenerationBulkSubscriptionData",
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
    return SampleLogGenerationBulkSubscriptionRequest.attributeTypeMap;
  }

  public constructor() {}
}
