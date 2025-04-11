import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Logs that are sent over HTTP.
 */
export class HTTPLogItem {
  /**
   * The integration name associated with your log: the technology from which the log originated.
   * When it matches an integration name, Datadog automatically installs the corresponding parsers and facets.
   * See [reserved attributes](https://docs.datadoghq.com/logs/log_collection/#reserved-attributes).
   */
  "ddsource"?: string;
  /**
   * Tags associated with your logs.
   */
  "ddtags"?: string;
  /**
   * The name of the originating host of the log.
   */
  "hostname"?: string;
  /**
   * The message [reserved attribute](https://docs.datadoghq.com/logs/log_collection/#reserved-attributes)
   * of your log. By default, Datadog ingests the value of the message attribute as the body of the log entry.
   * That value is then highlighted and displayed in the Logstream, where it is indexed for full text search.
   */
  "message": string;
  /**
   * The name of the application or service generating the log events.
   * It is used to switch from Logs to APM, so make sure you define the same value when you use both products.
   * See [reserved attributes](https://docs.datadoghq.com/logs/log_collection/#reserved-attributes).
   */
  "service"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: string };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    ddsource: {
      baseName: "ddsource",
      type: "string",
    },
    ddtags: {
      baseName: "ddtags",
      type: "string",
    },
    hostname: {
      baseName: "hostname",
      type: "string",
    },
    message: {
      baseName: "message",
      type: "string",
      required: true,
    },
    service: {
      baseName: "service",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: string; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HTTPLogItem.attributeTypeMap;
  }

  public constructor() {}
}
