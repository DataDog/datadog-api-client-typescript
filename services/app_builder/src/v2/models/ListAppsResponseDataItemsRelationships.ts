import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentRelationship } from "./DeploymentRelationship";

/**
 * The app's publication information.
 */
export class ListAppsResponseDataItemsRelationships {
  /**
   * Information pointing to the app's publication status.
   */
  "deployment"?: DeploymentRelationship;
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
    deployment: {
      baseName: "deployment",
      type: "DeploymentRelationship",
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
    return ListAppsResponseDataItemsRelationships.attributeTypeMap;
  }

  public constructor() {}
}
