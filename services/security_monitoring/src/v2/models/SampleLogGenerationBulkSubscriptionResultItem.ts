import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SampleLogGenerationBulkSubscriptionItemMeta } from "./SampleLogGenerationBulkSubscriptionItemMeta";
import { SampleLogGenerationSubscriptionAttributes } from "./SampleLogGenerationSubscriptionAttributes";
import { SampleLogGenerationSubscriptionResourceType } from "./SampleLogGenerationSubscriptionResourceType";

/**
 * A single result entry returned by the bulk subscription endpoint.
 */
export class SampleLogGenerationBulkSubscriptionResultItem {
  /**
   * The attributes describing a sample log generation subscription.
   */
  "attributes": SampleLogGenerationSubscriptionAttributes;
  /**
   * The unique identifier of the subscription, when one was created.
   */
  "id": string;
  /**
   * Per-item status returned for a bulk subscription request.
   */
  "meta": SampleLogGenerationBulkSubscriptionItemMeta;
  /**
   * The type of the resource. The value should always be `subscriptions`.
   */
  "type": SampleLogGenerationSubscriptionResourceType;
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
      type: "SampleLogGenerationSubscriptionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SampleLogGenerationBulkSubscriptionItemMeta",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SampleLogGenerationSubscriptionResourceType",
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
    return SampleLogGenerationBulkSubscriptionResultItem.attributeTypeMap;
  }

  public constructor() {}
}
