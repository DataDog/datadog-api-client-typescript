import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for the service repository info request.
 */
export class ServiceRepositoryInfoRequestAttributes {
  /**
   * The debug ID of a JavaScript source map, in UUID format. Alternative to `service` and `version`.
   */
  "debugId"?: string;
  /**
   * The name of the service. Required with `version` when `debug_id` is not set.
   */
  "service"?: string;
  /**
   * The version of the service. Required with `service` when `debug_id` is not set.
   */
  "version"?: string;
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
    debugId: {
      baseName: "debug_id",
      type: "string",
      format: "uuid",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    version: {
      baseName: "version",
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
    return ServiceRepositoryInfoRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
