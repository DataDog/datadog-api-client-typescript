import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Deploy on services based on their environment and/or service name.
 */
export class ApplicationSecurityWafExclusionFilterScope {
  /**
   * Deploy on this environment.
   */
  "env"?: string;
  /**
   * Deploy on this service.
   */
  "service"?: string;
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
    env: {
      baseName: "env",
      type: "string",
    },
    service: {
      baseName: "service",
      type: "string",
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
    return ApplicationSecurityWafExclusionFilterScope.attributeTypeMap;
  }

  public constructor() {}
}
