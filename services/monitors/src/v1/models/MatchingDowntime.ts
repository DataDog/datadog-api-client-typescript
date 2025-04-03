import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object describing a downtime that matches this monitor.
 */
export class MatchingDowntime {
  /**
   * POSIX timestamp to end the downtime.
   */
  "end"?: number;
  /**
   * The downtime ID.
   */
  "id": number;
  /**
   * The scope(s) to which the downtime applies. Must be in `key:value` format. For example, `host:app2`.
   * Provide multiple scopes as a comma-separated list like `env:dev,env:prod`.
   * The resulting downtime applies to sources that matches ALL provided scopes (`env:dev` **AND** `env:prod`).
   */
  "scope"?: Array<string>;
  /**
   * POSIX timestamp to start the downtime.
   */
  "start"?: number;
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
    end: {
      baseName: "end",
      type: "number",
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "number",
      required: true,
      format: "int64",
    },
    scope: {
      baseName: "scope",
      type: "Array<string>",
    },
    start: {
      baseName: "start",
      type: "number",
      format: "int64",
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
    return MatchingDowntime.attributeTypeMap;
  }

  public constructor() {}
}
