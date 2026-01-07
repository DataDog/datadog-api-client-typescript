import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FunnelRequestDataAttributesSearchStepsItems } from "./FunnelRequestDataAttributesSearchStepsItems";

export class FunnelRequestDataAttributesSearch {
  "crossSessionFilter"?: string;
  "queryString"?: string;
  "steps"?: Array<FunnelRequestDataAttributesSearchStepsItems>;
  "subqueryId"?: string;
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
    crossSessionFilter: {
      baseName: "cross_session_filter",
      type: "string",
    },
    queryString: {
      baseName: "query_string",
      type: "string",
    },
    steps: {
      baseName: "steps",
      type: "Array<FunnelRequestDataAttributesSearchStepsItems>",
    },
    subqueryId: {
      baseName: "subquery_id",
      type: "string",
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
    return FunnelRequestDataAttributesSearch.attributeTypeMap;
  }

  public constructor() {}
}
