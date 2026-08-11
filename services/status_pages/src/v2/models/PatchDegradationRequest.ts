import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationRequestMeta } from "./DegradationRequestMeta";
import { PatchDegradationRequestData } from "./PatchDegradationRequestData";

/**
 * Request object for updating a degradation.
 */
export class PatchDegradationRequest {
  /**
   * The data object for updating a degradation.
   */
  "data"?: PatchDegradationRequestData;
  /**
   * The supported metadata for a degradation request.
   */
  "meta"?: DegradationRequestMeta;
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
      type: "PatchDegradationRequestData",
    },
    meta: {
      baseName: "meta",
      type: "DegradationRequestMeta",
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
    return PatchDegradationRequest.attributeTypeMap;
  }

  public constructor() {}
}
