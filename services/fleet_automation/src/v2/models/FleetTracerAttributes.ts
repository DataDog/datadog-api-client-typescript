import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a fleet tracer representing a service instance reporting telemetry.
 */
export class FleetTracerAttributes {
  /**
   * The environment the tracer is reporting from.
   */
  "env"?: string;
  /**
   * The hostname where the tracer is running.
   */
  "hostname"?: string;
  /**
   * The programming language of the traced application.
   */
  "language"?: string;
  /**
   * The version of the programming language runtime.
   */
  "languageVersion"?: string;
  /**
   * The remote configuration status of the tracer.
   */
  "remoteConfigStatus"?: string;
  /**
   * Runtime identifiers for the tracer instances.
   */
  "runtimeIds"?: Array<string>;
  /**
   * The telemetry-derived service name reported by the tracer.
   */
  "service"?: string;
  /**
   * The service hostname reported by the tracer.
   */
  "serviceHostname"?: string;
  /**
   * The version of the traced service.
   */
  "serviceVersion"?: string;
  /**
   * The version of the Datadog tracer library.
   */
  "tracerVersion"?: string;
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
    hostname: {
      baseName: "hostname",
      type: "string",
    },
    language: {
      baseName: "language",
      type: "string",
    },
    languageVersion: {
      baseName: "language_version",
      type: "string",
    },
    remoteConfigStatus: {
      baseName: "remote_config_status",
      type: "string",
    },
    runtimeIds: {
      baseName: "runtime_ids",
      type: "Array<string>",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    serviceHostname: {
      baseName: "service_hostname",
      type: "string",
    },
    serviceVersion: {
      baseName: "service_version",
      type: "string",
    },
    tracerVersion: {
      baseName: "tracer_version",
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
    return FleetTracerAttributes.attributeTypeMap;
  }

  public constructor() {}
}
