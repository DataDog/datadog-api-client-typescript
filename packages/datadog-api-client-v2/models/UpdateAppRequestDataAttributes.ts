/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ComponentGrid } from "./ComponentGrid";
import { Query } from "./Query";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * App definition attributes to be updated, such as name, description, and components.
 */
export class UpdateAppRequestDataAttributes {
  /**
   * The new UI components that make up the app. If this field is set, all existing components are replaced with the new components under this field.
   */
  "components"?: Array<ComponentGrid>;
  /**
   * The new human-readable description for the app.
   */
  "description"?: string;
  /**
   * The new name of the app.
   */
  "name"?: string;
  /**
   * The new array of queries, such as external actions and state variables, that the app uses. If this field is set, all existing queries are replaced with the new queries under this field.
   */
  "queries"?: Array<Query>;
  /**
   * The new name of the root component of the app. This must be a `grid` component that contains all other components.
   */
  "rootInstanceName"?: string;
  /**
   * The new list of tags for the app, which can be used to filter apps. If this field is set, any existing tags not included in the request are removed.
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
    return UpdateAppRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
