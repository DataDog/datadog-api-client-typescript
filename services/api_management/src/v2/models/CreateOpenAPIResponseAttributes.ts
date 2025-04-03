import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAPIEndpoint } from "./OpenAPIEndpoint";

/**
 * Attributes for `CreateOpenAPI`.
 */
export class CreateOpenAPIResponseAttributes {
  /**
   * List of endpoints which couldn't be parsed.
   */
  "failedEndpoints"?: Array<OpenAPIEndpoint>;
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
    failedEndpoints: {
      baseName: "failed_endpoints",
      type: "Array<OpenAPIEndpoint>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateOpenAPIResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
