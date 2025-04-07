import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Agent install method.
 */
export class HostMetaInstallMethod {
  /**
   * The installer version.
   */
  "installerVersion"?: string;
  /**
   * Tool used to install the agent.
   */
  "tool"?: string;
  /**
   * The tool version.
   */
  "toolVersion"?: string;
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
    installerVersion: {
      baseName: "installer_version",
      type: "string",
    },
    tool: {
      baseName: "tool",
      type: "string",
    },
    toolVersion: {
      baseName: "tool_version",
      type: "string",
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
    return HostMetaInstallMethod.attributeTypeMap;
  }

  public constructor() {}
}
