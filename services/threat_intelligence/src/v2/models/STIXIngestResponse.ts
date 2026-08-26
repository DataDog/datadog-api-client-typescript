import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { STIXIngestResponseData } from "./STIXIngestResponseData";

/**
 * The response from a completed STIX ingestion request.
 */
export class STIXIngestResponse {
  /**
   * The JSON:API resource describing the completed STIX ingestion request.
   */
  "data": STIXIngestResponseData;
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
      type: "STIXIngestResponseData",
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
    return STIXIngestResponse.attributeTypeMap;
  }

  public constructor() {}
}
