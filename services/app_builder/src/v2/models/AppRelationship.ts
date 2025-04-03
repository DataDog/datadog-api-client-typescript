import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomConnection } from "./CustomConnection";
import { DeploymentRelationship } from "./DeploymentRelationship";

/**
 * The app's publication relationship and custom connections.
 */
export class AppRelationship {
  /**
   * Array of custom connections used by the app.
   */
  "connections"?: Array<CustomConnection>;
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
    connections: {
      baseName: "connections",
      type: "Array<CustomConnection>",
    },
    deployment: {
      baseName: "deployment",
      type: "DeploymentRelationship",
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
    return AppRelationship.attributeTypeMap;
  }

  public constructor() {}
}
