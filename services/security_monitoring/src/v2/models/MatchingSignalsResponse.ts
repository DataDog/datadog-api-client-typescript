import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MatchingSignalData } from "./MatchingSignalData";

/**
 * Response containing the list of security signals matching an event.
 */
export class MatchingSignalsResponse {
  /**
   * Array of matching signals.
   */
  "data": Array<MatchingSignalData>;
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
      type: "Array<MatchingSignalData>",
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
    return MatchingSignalsResponse.attributeTypeMap;
  }

  public constructor() {}
}
