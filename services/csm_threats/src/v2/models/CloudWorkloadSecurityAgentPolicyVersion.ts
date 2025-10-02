import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The versions of the policy
 */
export class CloudWorkloadSecurityAgentPolicyVersion {
  /**
   * The date and time the version was created
   */
  "date"?: string;
  /**
   * The version of the policy
   */
  "name"?: string;
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
    date: {
      baseName: "Date",
      type: "string",
    },
    name: {
      baseName: "Name",
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
    return CloudWorkloadSecurityAgentPolicyVersion.attributeTypeMap;
  }

  public constructor() {}
}
