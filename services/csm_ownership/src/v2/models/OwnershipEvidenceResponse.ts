import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OwnershipEvidenceData } from "./OwnershipEvidenceData";

/**
 * The response returned when retrieving the evidence backing an ownership inference for an owner type.
 */
export class OwnershipEvidenceResponse {
  /**
   * The data wrapper for an ownership evidence response.
   */
  "data": OwnershipEvidenceData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "OwnershipEvidenceData",
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
    return OwnershipEvidenceResponse.attributeTypeMap;
  }

  public constructor() {}
}
