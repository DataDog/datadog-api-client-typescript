import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScaRequestData } from "./ScaRequestData";

/**
 * The top-level request object for submitting a Software Composition Analysis (SCA) scan result.
 */
export class ScaRequest {
  /**
   * The data object in an SCA request, containing the dependency graph attributes and request type.
   */
  "data"?: ScaRequestData;
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
      type: "ScaRequestData",
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
    return ScaRequest.attributeTypeMap;
  }

  public constructor() {}
}
