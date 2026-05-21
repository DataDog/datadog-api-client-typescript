/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppDefinitionType } from "./AppDefinitionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a blueprint resource.
 */
export class BlueprintAttributes {
  /**
   * The timestamp when the blueprint was created.
   */
  "createdAt": Date;
  /**
   * The app definition type.
   */
  "definition": AppDefinitionType;
  /**
   * A description of what the blueprint does.
   */
  "description": string;
  /**
   * Embedded datastore blueprints.
   */
  "embeddedDatastoreBlueprints"?: { [key: string]: any };
  /**
   * Embedded native actions.
   */
  "embeddedNativeActions"?: Array<{ [key: string]: any }>;
  /**
   * Embedded workflow blueprints.
   */
  "embeddedWorkflowBlueprints"?: { [key: string]: any };
  /**
   * The integration ID associated with the blueprint.
   */
  "integrationId"?: string;
  /**
   * Mocked outputs for testing the blueprint.
   */
  "mockedOutputs"?: { [key: string]: any };
  /**
   * The human-readable name of the blueprint.
   */
  "name": string;
  /**
   * The unique slug identifier of the blueprint.
   */
  "slug": string;
  /**
   * Tags associated with the blueprint.
   */
  "tags"?: Array<string>;
  /**
   * The background style of the blueprint tile.
   */
  "tileBackground"?: string;
  /**
   * The fully qualified name of the action used as the tile icon.
   */
  "tileIconActionFqn"?: string;
  /**
   * The timestamp when the blueprint was last updated.
   */
  "updatedAt": Date;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    definition: {
      baseName: "definition",
      type: "AppDefinitionType",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    embeddedDatastoreBlueprints: {
      baseName: "embedded_datastore_blueprints",
      type: "{ [key: string]: any; }",
    },
    embeddedNativeActions: {
      baseName: "embedded_native_actions",
      type: "Array<{ [key: string]: any; }>",
    },
    embeddedWorkflowBlueprints: {
      baseName: "embedded_workflow_blueprints",
      type: "{ [key: string]: any; }",
    },
    integrationId: {
      baseName: "integration_id",
      type: "string",
    },
    mockedOutputs: {
      baseName: "mocked_outputs",
      type: "{ [key: string]: any; }",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    slug: {
      baseName: "slug",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    tileBackground: {
      baseName: "tile_background",
      type: "string",
    },
    tileIconActionFqn: {
      baseName: "tile_icon_action_fqn",
      type: "string",
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return BlueprintAttributes.attributeTypeMap;
  }

  public constructor() {}
}
