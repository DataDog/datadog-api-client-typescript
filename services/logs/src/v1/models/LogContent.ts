import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * JSON object containing all log attributes and their associated values.
 */
export class LogContent {
  /**
   * JSON object of attributes from your log.
   */
  "attributes"?: { [key: string]: any };
  /**
   * Name of the machine from where the logs are being sent.
   */
  "host"?: string;
  /**
   * The message [reserved attribute](https://docs.datadoghq.com/logs/log_collection/#reserved-attributes)
   * of your log. By default, Datadog ingests the value of the message attribute as the body of the log entry.
   * That value is then highlighted and displayed in the Logstream, where it is indexed for full text search.
   */
  "message"?: string;
  /**
   * The name of the application or service generating the log events.
   * It is used to switch from Logs to APM, so make sure you define the same
   * value when you use both products.
   */
  "service"?: string;
  /**
   * Array of tags associated with your log.
   */
  "tags"?: Array<string>;
  /**
   * Timestamp of your log.
   */
  "timestamp"?: Date;
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
    attributes: {
      baseName: "attributes",
      type: "{ [key: string]: any; }",
    },
    host: {
      baseName: "host",
      type: "string",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    timestamp: {
      baseName: "timestamp",
      type: "Date",
      format: "date-time",
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
    return LogContent.attributeTypeMap;
  }

  public constructor() {}
}
