import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpansAggregateRequestAttributes } from "./SpansAggregateRequestAttributes";
import { SpansAggregateRequestType } from "./SpansAggregateRequestType";

/**
 * The object containing the query content.
 */
export class SpansAggregateData {
  /**
   * The object containing all the query parameters.
   */
  "attributes"?: SpansAggregateRequestAttributes;
  /**
   * The type of resource. The value should always be aggregate_request.
   */
  "type"?: SpansAggregateRequestType;
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
      type: "SpansAggregateRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "SpansAggregateRequestType",
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
    return SpansAggregateData.attributeTypeMap;
  }

  public constructor() {}
}
