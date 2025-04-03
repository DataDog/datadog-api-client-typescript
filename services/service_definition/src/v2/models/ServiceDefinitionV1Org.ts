import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Org related information about the service.
 */
export class ServiceDefinitionV1Org {
  /**
   * App feature this service supports.
   */
  "application"?: string;
  /**
   * Team that owns the service.
   */
  "team"?: string;
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
    application: {
      baseName: "application",
      type: "string",
    },
    team: {
      baseName: "team",
      type: "string",
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
    return ServiceDefinitionV1Org.attributeTypeMap;
  }

  public constructor() {}
}
