import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceDefinitionV2Dot1Contact } from "./ServiceDefinitionV2Dot1Contact";
import { ServiceDefinitionV2Dot1Integrations } from "./ServiceDefinitionV2Dot1Integrations";
import { ServiceDefinitionV2Dot1Link } from "./ServiceDefinitionV2Dot1Link";
import { ServiceDefinitionV2Dot1Version } from "./ServiceDefinitionV2Dot1Version";

/**
 * Service definition v2.1 for providing service metadata and integrations.
 */
export class ServiceDefinitionV2Dot1 {
  /**
   * Identifier for a group of related services serving a product feature, which the service is a part of.
   */
  "application"?: string;
  /**
   * A list of contacts related to the services.
   */
  "contacts"?: Array<ServiceDefinitionV2Dot1Contact>;
  /**
   * Unique identifier of the service. Must be unique across all services and is used to match with a service in Datadog.
   */
  "ddService": string;
  /**
   * A short description of the service.
   */
  "description"?: string;
  /**
   * Extensions to v2.1 schema.
   */
  "extensions"?: { [key: string]: any };
  /**
   * Third party integrations that Datadog supports.
   */
  "integrations"?: ServiceDefinitionV2Dot1Integrations;
  /**
   * The current life cycle phase of the service.
   */
  "lifecycle"?: string;
  /**
   * A list of links related to the services.
   */
  "links"?: Array<ServiceDefinitionV2Dot1Link>;
  /**
   * Schema version being used.
   */
  "schemaVersion": ServiceDefinitionV2Dot1Version;
  /**
   * A set of custom tags.
   */
  "tags"?: Array<string>;
  /**
   * Team that owns the service. It is used to locate a team defined in Datadog Teams if it exists.
   */
  "team"?: string;
  /**
   * Importance of the service.
   */
  "tier"?: string;
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
    contacts: {
      baseName: "contacts",
      type: "Array<ServiceDefinitionV2Dot1Contact>",
    },
    ddService: {
      baseName: "dd-service",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
    },
    extensions: {
      baseName: "extensions",
      type: "{ [key: string]: any; }",
    },
    integrations: {
      baseName: "integrations",
      type: "ServiceDefinitionV2Dot1Integrations",
    },
    lifecycle: {
      baseName: "lifecycle",
      type: "string",
    },
    links: {
      baseName: "links",
      type: "Array<ServiceDefinitionV2Dot1Link>",
    },
    schemaVersion: {
      baseName: "schema-version",
      type: "ServiceDefinitionV2Dot1Version",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    team: {
      baseName: "team",
      type: "string",
    },
    tier: {
      baseName: "tier",
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
    return ServiceDefinitionV2Dot1.attributeTypeMap;
  }

  public constructor() {}
}
