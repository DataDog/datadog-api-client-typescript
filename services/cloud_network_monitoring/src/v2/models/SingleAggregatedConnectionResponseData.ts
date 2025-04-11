import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SingleAggregatedConnectionResponseDataAttributes } from "./SingleAggregatedConnectionResponseDataAttributes";
import { SingleAggregatedConnectionResponseDataType } from "./SingleAggregatedConnectionResponseDataType";

/**
 * Object describing an aggregated connection.
 */
export class SingleAggregatedConnectionResponseData {
  /**
   * Attributes for an aggregated connection.
   */
  "attributes"?: SingleAggregatedConnectionResponseDataAttributes;
  /**
   * A unique identifier for the aggregated connection based on the group by values.
   */
  "id"?: string;
  /**
   * Aggregated connection resource type.
   */
  "type"?: SingleAggregatedConnectionResponseDataType;
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
      type: "SingleAggregatedConnectionResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SingleAggregatedConnectionResponseDataType",
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
    return SingleAggregatedConnectionResponseData.attributeTypeMap;
  }

  public constructor() {}
}
