import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata returned alongside a list of sample log generation subscriptions.
 */
export class SampleLogGenerationSubscriptionsResponseMeta {
  /**
   * The total number of subscriptions matching the request, irrespective of pagination.
   */
  "totalSubscriptions": number;
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
    totalSubscriptions: {
      baseName: "total_subscriptions",
      type: "number",
      required: true,
      format: "int32",
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
    return SampleLogGenerationSubscriptionsResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
