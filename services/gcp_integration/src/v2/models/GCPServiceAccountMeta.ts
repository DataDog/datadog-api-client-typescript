import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Additional information related to your service account.
 */
export class GCPServiceAccountMeta {
  /**
   * The current list of projects accessible from your service account.
   */
  "accessibleProjects"?: Array<string>;
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
    accessibleProjects: {
      baseName: "accessible_projects",
      type: "Array<string>",
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
    return GCPServiceAccountMeta.attributeTypeMap;
  }

  public constructor() {}
}
