import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SampleLogGenerationDuration } from "./SampleLogGenerationDuration";

/**
 * The attributes for creating a sample log generation subscription.
 */
export class SampleLogGenerationSubscriptionCreateAttributes {
  /**
   * The identifier of the Cloud SIEM content pack to subscribe to.
   */
  "contentPackId": string;
  /**
   * How long the subscription should remain active before expiring.
   */
  "duration"?: SampleLogGenerationDuration;
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
    contentPackId: {
      baseName: "content_pack_id",
      type: "string",
      required: true,
    },
    duration: {
      baseName: "duration",
      type: "SampleLogGenerationDuration",
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
    return SampleLogGenerationSubscriptionCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
