import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The search and filter query settings.
 */
export class SpansQueryFilter {
  /**
   * The minimum time for the requested spans, supports date-time ISO8601, date math, and regular timestamps (milliseconds).
   */
  "from"?: string;
  /**
   * The search query, following the
   * [span search syntax](https://docs.datadoghq.com/tracing/trace_explorer/query_syntax/).
   * Reserved fields (`service`, `env`, `version`, `resource_name`, `operation_name`, `status`, `span_id`,
   * `trace_id`, `type`) take no `@` prefix, and neither do tags such as `host` or primary tags such as
   * `datacenter`. Span attributes need one, for example `@span.kind:server` or `@http.status_code:500`.
   * Wrap values that contain special characters such as `:`, `{`, `}`, `(`, `)`, or spaces in double quotes,
   * for example `@http.route:"/api/v1/users/{id}"` or `resource_name:"GET /api/v1/users"`.
   * Wildcards do not work inside quotes, so to combine a wildcard with special characters, escape each one
   * with `\` instead, for example `resource_name:Clients\:\:*`.
   */
  "query"?: string;
  /**
   * The maximum time for the requested spans, supports date-time ISO8601, date math, and regular timestamps (milliseconds).
   */
  "to"?: string;
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
    from: {
      baseName: "from",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    to: {
      baseName: "to",
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
    return SpansQueryFilter.attributeTypeMap;
  }

  public constructor() {}
}
