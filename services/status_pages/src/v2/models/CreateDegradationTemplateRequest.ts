import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateDegradationTemplateRequestData } from "./CreateDegradationTemplateRequestData";

/**
 * Request object for creating a degradation template.
 */
export class CreateDegradationTemplateRequest {
  /**
   * The data object for creating a degradation template.
   */
  "data"?: CreateDegradationTemplateRequestData;
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
      type: "CreateDegradationTemplateRequestData",
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
    return CreateDegradationTemplateRequest.attributeTypeMap;
  }

  public constructor() {}
}
