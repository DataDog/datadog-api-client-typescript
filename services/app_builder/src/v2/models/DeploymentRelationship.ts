import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentMetadata } from "./DeploymentMetadata";
import { DeploymentRelationshipData } from "./DeploymentRelationshipData";

/**
 * Information pointing to the app's publication status.
 */
export class DeploymentRelationship {
  /**
   * Data object containing the deployment ID.
   */
  "data"?: DeploymentRelationshipData;
  /**
   * Metadata object containing the publication creation information.
   */
  "meta"?: DeploymentMetadata;
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
    data: {
      baseName: "data",
      type: "DeploymentRelationshipData",
    },
    meta: {
      baseName: "meta",
      type: "DeploymentMetadata",
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
    return DeploymentRelationship.attributeTypeMap;
  }

  public constructor() {}
}
