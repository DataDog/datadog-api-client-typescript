import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BulkMuteFindingsRequestData } from "./BulkMuteFindingsRequestData";

/**
 * The new bulk mute finding request.
 */
export class BulkMuteFindingsRequest {
  /**
   * Data object containing the new bulk mute properties of the finding.
   */
  "data": BulkMuteFindingsRequestData;
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
      type: "BulkMuteFindingsRequestData",
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
    return BulkMuteFindingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
