import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Defines how the `datadog_logs` destination routes matching logs to a Datadog site using a specific API key.
 */
export class ObservabilityPipelineDatadogLogsDestinationRoute {
  /**
   * Name of the environment variable or secret that stores the Datadog API key used by this route.
   */
  "apiKeyKey"?: string;
  /**
   * A Datadog search query that determines which logs are forwarded using this route.
   */
  "include"?: string;
  /**
   * Unique identifier for this route within the destination.
   */
  "routeId"?: string;
  /**
   * Datadog site where matching logs are sent (for example, `us1`).
   */
  "site"?: string;
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
    apiKeyKey: {
      baseName: "api_key_key",
      type: "string",
    },
    include: {
      baseName: "include",
      type: "string",
    },
    routeId: {
      baseName: "route_id",
      type: "string",
    },
    site: {
      baseName: "site",
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
    return ObservabilityPipelineDatadogLogsDestinationRoute.attributeTypeMap;
  }

  public constructor() {}
}
