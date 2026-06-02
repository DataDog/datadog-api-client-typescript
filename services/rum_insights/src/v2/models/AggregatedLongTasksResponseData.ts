import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AggregatedLongTasksRequestType } from "./AggregatedLongTasksRequestType";
import { AggregatedLongTasksResponseAttributes } from "./AggregatedLongTasksResponseAttributes";

/**
 * Data envelope for an aggregated long tasks response.
 */
export class AggregatedLongTasksResponseData {
  /**
   * Attributes of an aggregated long tasks response.
   */
  "attributes": AggregatedLongTasksResponseAttributes;
  /**
   * Hash-based unique identifier for this aggregation.
   */
  "id": string;
  /**
   * The JSON:API type for aggregated long tasks requests.
   */
  "type": AggregatedLongTasksRequestType;
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
      type: "AggregatedLongTasksResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AggregatedLongTasksRequestType",
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
    return AggregatedLongTasksResponseData.attributeTypeMap;
  }

  public constructor() {}
}
