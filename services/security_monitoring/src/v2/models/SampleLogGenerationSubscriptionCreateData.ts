import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SampleLogGenerationSubscriptionCreateAttributes } from "./SampleLogGenerationSubscriptionCreateAttributes";
import { SampleLogGenerationSubscriptionRequestType } from "./SampleLogGenerationSubscriptionRequestType";

/**
 * The subscription request body.
 */
export class SampleLogGenerationSubscriptionCreateData {
  /**
   * The attributes for creating a sample log generation subscription.
   */
  "attributes": SampleLogGenerationSubscriptionCreateAttributes;
  /**
   * The type of the resource. The value should always be `subscription_requests`.
   */
  "type": SampleLogGenerationSubscriptionRequestType;
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
      type: "SampleLogGenerationSubscriptionCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SampleLogGenerationSubscriptionRequestType",
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
    return SampleLogGenerationSubscriptionCreateData.attributeTypeMap;
  }

  public constructor() {}
}
