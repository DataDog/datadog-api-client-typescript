import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Object of the monitor tags.
 */
export class DowntimeMonitorIdentifierTags {
  /**
   * A list of monitor tags. For example, tags that are applied directly to monitors,
   * not tags that are used in monitor queries (which are filtered by the scope parameter), to which the downtime applies.
   * The resulting downtime applies to monitors that match **all** provided monitor tags. Setting `monitor_tags`
   * to `[*]` configures the downtime to mute all monitors for the given scope.
   */
  "monitorTags": Array<string>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: { [key: string]: any } };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    monitorTags: {
      baseName: "monitor_tags",
      type: "Array<string>",
      required: true,
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
    return DowntimeMonitorIdentifierTags.attributeTypeMap;
  }

  public constructor() {}
}
