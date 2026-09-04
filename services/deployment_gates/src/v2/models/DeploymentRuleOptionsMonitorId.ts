import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A specific monitor and the groups to evaluate for it.
 */
export class DeploymentRuleOptionsMonitorId {
  /**
   * The exact monitor group names to evaluate. An empty array evaluates all groups.
   */
  "groups": Array<string>;
  /**
   * The monitor's decimal ID.
   */
  "id": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    groups: {
      baseName: "groups",
      type: "Array<string>",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DeploymentRuleOptionsMonitorId.attributeTypeMap;
  }

  public constructor() {}
}
