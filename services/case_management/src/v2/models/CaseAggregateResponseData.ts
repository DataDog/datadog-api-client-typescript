import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseAggregateResponseAttributes } from "./CaseAggregateResponseAttributes";

/**
 * Data object containing the aggregation results, including total count and per-group breakdowns.
 */
export class CaseAggregateResponseData {
  /**
   * Attributes of the aggregation result, including the total count across all groups and the per-group breakdowns.
   */
  "attributes": CaseAggregateResponseAttributes;
  /**
   * Aggregate response identifier.
   */
  "id": string;
  /**
   * Aggregate resource type.
   */
  "type": string;
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
      type: "CaseAggregateResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return CaseAggregateResponseData.attributeTypeMap;
  }

  public constructor() {}
}
