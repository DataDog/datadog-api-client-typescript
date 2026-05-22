import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SampleLogGenerationSubscriptionData } from "./SampleLogGenerationSubscriptionData";
import { SampleLogGenerationSubscriptionsResponseMeta } from "./SampleLogGenerationSubscriptionsResponseMeta";

/**
 * Response containing a list of sample log generation subscriptions.
 */
export class SampleLogGenerationSubscriptionsResponse {
  /**
   * The list of sample log generation subscriptions.
   */
  "data": Array<SampleLogGenerationSubscriptionData>;
  /**
   * Metadata returned alongside a list of sample log generation subscriptions.
   */
  "meta": SampleLogGenerationSubscriptionsResponseMeta;
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
      type: "Array<SampleLogGenerationSubscriptionData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SampleLogGenerationSubscriptionsResponseMeta",
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
    return SampleLogGenerationSubscriptionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
