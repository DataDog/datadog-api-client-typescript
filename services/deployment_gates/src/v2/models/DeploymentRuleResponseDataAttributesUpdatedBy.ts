import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Information about the user who updated the deployment rule.
 */
export class DeploymentRuleResponseDataAttributesUpdatedBy {
  /**
   * The handle of the user who updated the deployment rule.
   */
  "handle"?: string;
  /**
   * The ID of the user who updated the deployment rule.
   */
  "id": string;
  /**
   * The name of the user who updated the deployment rule.
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
    handle: {
      baseName: "handle",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
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
    return DeploymentRuleResponseDataAttributesUpdatedBy.attributeTypeMap;
  }

  public constructor() {}
}
