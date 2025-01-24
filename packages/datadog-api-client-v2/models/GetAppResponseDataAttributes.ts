/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ComponentGrid } from "./ComponentGrid";
import { Query } from "./Query";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The app definition attributes, such as name, description, and components.
 */
export class GetAppResponseDataAttributes {
  /**
   * The UI components that make up the app.
   */
  "components"?: Array<ComponentGrid>;
  /**
   * A human-readable description for the app.
   */
  "description"?: string;
  /**
   * An array of queries, such as external actions and state variables, that the app uses.
   */
  "embeddedQueries"?: Array<Query>;
  /**
   * Whether the app is marked as a favorite by the current user.
   */
  "favorite"?: boolean;
  /**
   * The name of the app.
   */
  "name"?: string;
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
    embeddedQueries: {
      baseName: "embeddedQueries",
      type: "Array<Query>",
    },
    favorite: {
      baseName: "favorite",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GetAppResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
