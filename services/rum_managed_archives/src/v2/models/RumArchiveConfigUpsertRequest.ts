import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumArchiveConfigUpsertData } from "./RumArchiveConfigUpsertData";

/**
 * JSON:API document.
 */
export class RumArchiveConfigUpsertRequest {
  /**
   * JSON:API resource.
   */
  "data": RumArchiveConfigUpsertData;
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
      type: "RumArchiveConfigUpsertData",
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
    return RumArchiveConfigUpsertRequest.attributeTypeMap;
  }

  public constructor() {}
}
