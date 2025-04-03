import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Basic information about a service.
 */
export class ServiceDefinitionV1Info {
  /**
   * Unique identifier of the service. Must be unique across all services and is used to match with a service in Datadog.
   */
  "ddService": string;
  /**
   * A short description of the service.
   */
  "description"?: string;
  /**
   * A friendly name of the service.
   */
  "displayName"?: string;
  /**
   * Service tier.
   */
  "serviceTier"?: string;
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
    ddService: {
      baseName: "dd-service",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    displayName: {
      baseName: "display-name",
      type: "string",
    },
    serviceTier: {
      baseName: "service-tier",
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
    return ServiceDefinitionV1Info.attributeTypeMap;
  }

  public constructor() {}
}
