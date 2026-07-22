import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PublishFormData } from "./PublishFormData";

/**
 * A request to publish a form version.
 */
export class PublishFormRequest {
  /**
   * The data for publishing a form version.
   */
  "data": PublishFormData;
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
      type: "PublishFormData",
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
    return PublishFormRequest.attributeTypeMap;
  }

  public constructor() {}
}
