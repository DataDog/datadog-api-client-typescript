import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Environment } from "./Environment";

/**
 * Response containing an environment.
 */
export class EnvironmentResponse {
  /**
   * A feature flag environment resource.
   */
  "data": Environment;
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
      type: "Environment",
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
    return EnvironmentResponse.attributeTypeMap;
  }

  public constructor() {}
}
