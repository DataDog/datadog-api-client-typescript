import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Basic information about the app such as name, description, and tags.
 */
export class ListAppsResponseDataItemsAttributes {
  /**
   * A human-readable description for the app.
   */
  "description"?: string;
  /**
   * Whether the app is marked as a favorite by the current user.
   */
  "favorite"?: boolean;
  /**
   * The name of the app.
   */
  "name"?: string;
  /**
   * Whether the app is enabled for use in the Datadog self-service hub.
   */
  "selfService"?: boolean;
  /**
   * A list of tags for the app, which can be used to filter apps.
   */
  "tags"?: Array<string>;
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
    description: {
      baseName: "description",
      type: "string",
    },
    favorite: {
      baseName: "favorite",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    selfService: {
      baseName: "selfService",
      type: "boolean",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return ListAppsResponseDataItemsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
