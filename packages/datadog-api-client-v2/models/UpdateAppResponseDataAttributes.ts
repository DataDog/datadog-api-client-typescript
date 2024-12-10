/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ComponentGrid } from "./ComponentGrid";
import { InputSchema } from "./InputSchema";
import { Query } from "./Query";
import { Script } from "./Script";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `UpdateAppResponseDataAttributes` object.
 */
export class UpdateAppResponseDataAttributes {
  /**
   * The `attributes` `components`.
   */
  "components"?: Array<ComponentGrid>;
  /**
   * The `attributes` `description`.
   */
  "description"?: string;
  /**
   * The `attributes` `embeddedQueries`.
   */
  "embeddedQueries"?: Array<Query>;
  /**
   * The `attributes` `favorite`.
   */
  "favorite"?: boolean;
  /**
   * The definition of `InputSchema` object.
   */
  "inputSchema"?: InputSchema;
  /**
   * The `attributes` `name`.
   */
  "name"?: string;
  /**
   * The `attributes` `rootInstanceName`.
   */
  "rootInstanceName"?: string;
  /**
   * The `attributes` `scripts`.
   */
  "scripts"?: Array<Script>;
  /**
   * The `attributes` `tags`.
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
    inputSchema: {
      baseName: "inputSchema",
      type: "InputSchema",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    rootInstanceName: {
      baseName: "rootInstanceName",
      type: "string",
    },
    scripts: {
      baseName: "scripts",
      type: "Array<Script>",
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
    return UpdateAppResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
