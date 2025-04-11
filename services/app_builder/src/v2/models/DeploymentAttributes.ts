import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes object containing the version ID of the published app.
 */
export class DeploymentAttributes {
  /**
   * The version ID of the app that was published. For an unpublished app, this is always the nil UUID (`00000000-0000-0000-0000-000000000000`).
   */
  "appVersionId"?: string;
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
    appVersionId: {
      baseName: "app_version_id",
      type: "string",
      format: "uuid",
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
    return DeploymentAttributes.attributeTypeMap;
  }

  public constructor() {}
}
