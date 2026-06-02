import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AggregatedLongTasksRequestAttributes } from "./AggregatedLongTasksRequestAttributes";
import { AggregatedLongTasksRequestType } from "./AggregatedLongTasksRequestType";

/**
 * Data envelope for an aggregated long tasks request.
 */
export class AggregatedLongTasksRequestData {
  /**
   * Attributes for an aggregated long tasks query.
   */
  "attributes": AggregatedLongTasksRequestAttributes;
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
      type: "AggregatedLongTasksRequestAttributes",
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
    return AggregatedLongTasksRequestData.attributeTypeMap;
  }

  public constructor() {}
}
