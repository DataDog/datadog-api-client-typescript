import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SampleLogGenerationBulkSubscriptionAttributes } from "./SampleLogGenerationBulkSubscriptionAttributes";
import { SampleLogGenerationBulkSubscriptionRequestType } from "./SampleLogGenerationBulkSubscriptionRequestType";

/**
 * The bulk subscription request body.
 */
export class SampleLogGenerationBulkSubscriptionData {
  /**
   * The attributes for creating sample log generation subscriptions for multiple content packs.
   */
  "attributes": SampleLogGenerationBulkSubscriptionAttributes;
  /**
   * The type of the resource. The value should always be `bulk_subscription_requests`.
   */
  "type": SampleLogGenerationBulkSubscriptionRequestType;
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
    attributes: {
      baseName: "attributes",
      type: "SampleLogGenerationBulkSubscriptionAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SampleLogGenerationBulkSubscriptionRequestType",
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
    return SampleLogGenerationBulkSubscriptionData.attributeTypeMap;
  }

  public constructor() {}
}
