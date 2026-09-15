import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The core dump action applied on the process matching the rule.
 */
export class CloudWorkloadSecurityAgentRuleActionCoreDump {
  /**
   * Whether the directory entry information is included in the core dump.
   */
  "dentry"?: boolean;
  /**
   * Whether the mount information is included in the core dump.
   */
  "mount"?: boolean;
  /**
   * Whether the core dump is left uncompressed.
   */
  "noCompression"?: boolean;
  /**
   * Whether the process memory is included in the core dump.
   */
  "process"?: boolean;
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
    dentry: {
      baseName: "dentry",
      type: "boolean",
    },
    mount: {
      baseName: "mount",
      type: "boolean",
    },
    noCompression: {
      baseName: "no_compression",
      type: "boolean",
    },
    process: {
      baseName: "process",
      type: "boolean",
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
    return CloudWorkloadSecurityAgentRuleActionCoreDump.attributeTypeMap;
  }

  public constructor() {}
}
