import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The search and filter query settings.
 */
export class RUMQueryFilter {
  /**
   * The minimum time for the requested events, inclusive. Accepts date math relative to now (for example `now-15m`, `now-1h`, `now-7d`), an absolute date in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format with full date, hours, minutes, and the `Z` UTC indicator (seconds and fractional seconds are optional), or a timestamp in milliseconds since the Unix epoch.
   */
  "from"?: string;
  /**
   * The search query following the [RUM search syntax](https://docs.datadoghq.com/real_user_monitoring/explorer/search_syntax/). Filter on attributes with `@attribute:value`, for example `@type:view @application.id:<application_id> @view.name:"/checkout"`, and combine terms with `AND`, `OR` and `-` (negation). Event types are `session`, `view`, `action`, `resource`, `error`, `long_task` and `vital`.
   */
  "query"?: string;
  /**
   * The maximum time for the requested events. Accepts the same formats as `from`.
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
    return RUMQueryFilter.attributeTypeMap;
  }

  public constructor() {}
}
