import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SingleAggregatedConnectionResponseDataAttributes } from "./SingleAggregatedConnectionResponseDataAttributes";
import { SingleAggregatedConnectionResponseDataType } from "./SingleAggregatedConnectionResponseDataType";

/**
 * The definition of `SingleAggregatedConnectionResponseData` object.
 */
export class SingleAggregatedConnectionResponseData {
  /**
   * The definition of `SingleAggregatedConnectionResponseDataAttributes` object.
   */
  "attributes"?: SingleAggregatedConnectionResponseDataAttributes;
  /**
   * The `SingleAggregatedConnectionResponseData` `id`.
   */
  "id"?: string;
  /**
   * Aggregated connection resource type. Allowed enum values: `aggregated_connection`.
   * default: `aggregated_connection`
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
      type: "any",
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
