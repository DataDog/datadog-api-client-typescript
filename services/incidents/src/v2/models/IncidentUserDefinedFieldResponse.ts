import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentUserDefinedFieldResponseData } from "./IncidentUserDefinedFieldResponseData";

/**
 * Response containing a single incident user-defined field.
 */
export class IncidentUserDefinedFieldResponse {
  /**
   * Data object for an incident user-defined field response.
   */
  "data": IncidentUserDefinedFieldResponseData;
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
      type: "IncidentUserDefinedFieldResponseData",
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
    return IncidentUserDefinedFieldResponse.attributeTypeMap;
  }

  public constructor() {}
}
