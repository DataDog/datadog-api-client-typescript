import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricBulkConfigureTagsType } from "./MetricBulkConfigureTagsType";
import { MetricBulkTagConfigDeleteAttributes } from "./MetricBulkTagConfigDeleteAttributes";

/**
 * Request object to bulk delete all tag configurations for metrics matching the given prefix.
 */
export class MetricBulkTagConfigDelete {
  /**
   * Optional parameters for bulk deleting metric tag configurations.
   */
  "attributes"?: MetricBulkTagConfigDeleteAttributes;
  /**
   * A text prefix to match against metric names.
   */
  "id": string;
  /**
   * The metric bulk configure tags resource.
   */
  "type": MetricBulkConfigureTagsType;
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
      type: "MetricBulkTagConfigDeleteAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MetricBulkConfigureTagsType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricBulkTagConfigDelete.attributeTypeMap;
  }

  public constructor() {}
}
