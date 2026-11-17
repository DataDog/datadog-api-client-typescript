import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

import { CreateDegradationRequestData } from "./CreateDegradationRequestData";
import { DegradationRequestMeta } from "./DegradationRequestMeta";

/**
 * Request object for creating a degradation.
 */
export class CreateDegradationRequest {
  /**
   * The data object for creating a degradation.
   */
  "data"?: CreateDegradationRequestData;
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
      type: "CreateDegradationRequestData",
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
    return CreateDegradationRequest.attributeTypeMap;
  }

  public constructor() {}
}
