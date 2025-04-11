import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ComponentGrid } from "./ComponentGrid";
import { Query } from "./Query";

/**
 * App definition attributes such as name, description, and components.
 */
export class CreateAppRequestDataAttributes {
  /**
   * The UI components that make up the app.
   */
  "components"?: Array<ComponentGrid>;
  /**
   * A human-readable description for the app.
   */
  "description"?: string;
  /**
   * The name of the app.
   */
  "name"?: string;
  /**
   * An array of queries, such as external actions and state variables, that the app uses.
   */
  "queries"?: Array<Query>;
  /**
   * The name of the root component of the app. This must be a `grid` component that contains all other components.
   */
  "rootInstanceName"?: string;
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
    components: {
      baseName: "components",
      type: "Array<ComponentGrid>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    queries: {
      baseName: "queries",
      type: "Array<Query>",
    },
    rootInstanceName: {
      baseName: "rootInstanceName",
      type: "string",
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
    return CreateAppRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
