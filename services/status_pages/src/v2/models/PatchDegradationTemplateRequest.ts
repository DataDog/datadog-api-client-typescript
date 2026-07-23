import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PatchDegradationTemplateRequestData } from "./PatchDegradationTemplateRequestData";

/**
 * Request object for updating a degradation template.
 */
export class PatchDegradationTemplateRequest {
  /**
   * The data object for updating a degradation template.
   */
  "data"?: PatchDegradationTemplateRequestData;
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
      type: "PatchDegradationTemplateRequestData",
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
    return PatchDegradationTemplateRequest.attributeTypeMap;
  }

  public constructor() {}
}
