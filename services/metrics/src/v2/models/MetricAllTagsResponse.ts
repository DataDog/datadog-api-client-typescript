import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricAllTags } from "./MetricAllTags";

/**
 * Response object that includes a single metric's indexed tags.
 */
export class MetricAllTagsResponse {
  /**
   * Object for a single metric's indexed tags.
   */
  "data"?: MetricAllTags;
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
      type: "MetricAllTags",
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
    return MetricAllTagsResponse.attributeTypeMap;
  }

  public constructor() {}
}
