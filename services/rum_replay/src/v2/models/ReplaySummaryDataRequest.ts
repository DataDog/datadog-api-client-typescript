import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReplaySummaryRequestType } from "./ReplaySummaryRequestType";

/**
 * Data object for a RUM replay summary request.
 */
export class ReplaySummaryDataRequest {
  /**
   * RUM replay summary request resource type.
   */
  "type": ReplaySummaryRequestType;
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
    type: {
      baseName: "type",
      type: "ReplaySummaryRequestType",
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
    return ReplaySummaryDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
