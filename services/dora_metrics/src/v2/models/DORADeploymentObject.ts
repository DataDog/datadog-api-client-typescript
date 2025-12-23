import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DORADeploymentObjectAttributes } from "./DORADeploymentObjectAttributes";
import { DORADeploymentType } from "./DORADeploymentType";

/**
 * A DORA deployment event.
 */
export class DORADeploymentObject {
  /**
   * The attributes of the deployment event.
   */
  "attributes"?: DORADeploymentObjectAttributes;
  /**
   * The ID of the deployment event.
   */
  "id"?: string;
  /**
   * JSON:API type for DORA deployment events.
   */
  "type"?: DORADeploymentType;
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
    attributes: {
      baseName: "attributes",
      type: "DORADeploymentObjectAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DORADeploymentType",
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
    return DORADeploymentObject.attributeTypeMap;
  }

  public constructor() {}
}
