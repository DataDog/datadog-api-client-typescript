import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetRestrictionUpdateRequestData } from "./DatasetRestrictionUpdateRequestData";

/**
 * Payload for updating a dataset restriction configuration.
 */
export class DatasetRestrictionUpdateRequest {
  /**
   * Data object for a dataset restriction update.
   */
  "data": DatasetRestrictionUpdateRequestData;
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
      type: "DatasetRestrictionUpdateRequestData",
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
    return DatasetRestrictionUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
