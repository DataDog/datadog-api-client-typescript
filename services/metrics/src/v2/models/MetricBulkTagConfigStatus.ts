import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricBulkConfigureTagsType } from "./MetricBulkConfigureTagsType";
import { MetricBulkTagConfigStatusAttributes } from "./MetricBulkTagConfigStatusAttributes";

/**
 * The status of a request to bulk configure metric tags.
 * It contains the fields from the original request for reference.
 */
export class MetricBulkTagConfigStatus {
  /**
   * Optional attributes for the status of a bulk tag configuration request.
   */
  "attributes"?: MetricBulkTagConfigStatusAttributes;
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
      type: "MetricBulkTagConfigStatusAttributes",
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricBulkTagConfigStatus.attributeTypeMap;
  }

  public constructor() {}
}
