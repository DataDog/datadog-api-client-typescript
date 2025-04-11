import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpansAggregateData } from "./SpansAggregateData";

/**
 * The object sent with the request to retrieve a list of aggregated spans from your organization.
 */
export class SpansAggregateRequest {
  /**
   * The object containing the query content.
   */
  "data"?: SpansAggregateData;
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
      type: "SpansAggregateData",
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
    return SpansAggregateRequest.attributeTypeMap;
  }

  public constructor() {}
}
