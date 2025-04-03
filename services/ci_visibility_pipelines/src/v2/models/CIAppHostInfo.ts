import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Contains information of the host running the pipeline, stage, job, or step.
 */
export class CIAppHostInfo {
  /**
   * FQDN of the host.
   */
  "hostname"?: string;
  /**
   * A list of labels used to select or identify the node.
   */
  "labels"?: Array<string>;
  /**
   * Name for the host.
   */
  "name"?: string;
  /**
   * The path where the code is checked out.
   */
  "workspace"?: string;
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
    hostname: {
      baseName: "hostname",
      type: "string",
    },
    labels: {
      baseName: "labels",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    workspace: {
      baseName: "workspace",
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
    return CIAppHostInfo.attributeTypeMap;
  }

  public constructor() {}
}
