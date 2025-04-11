import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsBatchDetailsData } from "./SyntheticsBatchDetailsData";

/**
 * Details about a batch response.
 */
export class SyntheticsBatchDetails {
  /**
   * Wrapper object that contains the details of a batch.
   */
  "data"?: SyntheticsBatchDetailsData;
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
      type: "SyntheticsBatchDetailsData",
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
    return SyntheticsBatchDetails.attributeTypeMap;
  }

  public constructor() {}
}
