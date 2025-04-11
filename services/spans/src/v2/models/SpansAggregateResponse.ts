import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpansAggregateBucket } from "./SpansAggregateBucket";
import { SpansAggregateResponseMetadata } from "./SpansAggregateResponseMetadata";

/**
 * The response object for the spans aggregate API endpoint.
 */
export class SpansAggregateResponse {
  /**
   * The list of matching buckets, one item per bucket.
   */
  "data"?: Array<SpansAggregateBucket>;
  /**
   * The metadata associated with a request.
   */
  "meta"?: SpansAggregateResponseMetadata;
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
      type: "Array<SpansAggregateBucket>",
    },
    meta: {
      baseName: "meta",
      type: "SpansAggregateResponseMetadata",
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
    return SpansAggregateResponse.attributeTypeMap;
  }

  public constructor() {}
}
