import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for the service repository info request.
 */
export class ServiceRepositoryInfoRequestAttributes {
  /**
   * The name of the service.
   */
  "service": string;
  /**
   * The version of the service.
   */
  "version": string;
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
    service: {
      baseName: "service",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
      type: "string",
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
    return ServiceRepositoryInfoRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
