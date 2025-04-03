import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AppDeploymentType } from "./AppDeploymentType";

/**
 * Data object containing the deployment ID.
 */
export class DeploymentRelationshipData {
  /**
   * The deployment ID.
   */
  "id"?: string;
  /**
   * The deployment type.
   */
  "type"?: AppDeploymentType;
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
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "AppDeploymentType",
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
    return DeploymentRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
