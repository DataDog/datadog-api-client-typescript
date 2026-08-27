import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Remediation details for a deployment that was flagged as a change failure.
 */
export class DORADeploymentRemediation {
  /**
   * The ID of the remediation deployment.
   */
  "id"?: string;
  /**
   * The type of remediation, such as a rollback.
   */
  "type"?: string;
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
    },
    type: {
      baseName: "type",
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
    return DORADeploymentRemediation.attributeTypeMap;
  }

  public constructor() {}
}
