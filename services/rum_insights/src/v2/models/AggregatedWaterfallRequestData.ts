import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AggregatedWaterfallRequestAttributes } from "./AggregatedWaterfallRequestAttributes";
import { AggregatedWaterfallRequestType } from "./AggregatedWaterfallRequestType";

/**
 * Data envelope for an aggregated waterfall request.
 */
export class AggregatedWaterfallRequestData {
  /**
   * Attributes for an aggregated waterfall query.
   */
  "attributes": AggregatedWaterfallRequestAttributes;
  /**
   * The JSON:API type for aggregated waterfall requests.
   */
  "type": AggregatedWaterfallRequestType;
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
      type: "AggregatedWaterfallRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AggregatedWaterfallRequestType",
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
    return AggregatedWaterfallRequestData.attributeTypeMap;
  }

  public constructor() {}
}
