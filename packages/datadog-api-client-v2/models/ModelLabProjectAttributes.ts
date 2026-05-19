/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ModelLabTag } from "./ModelLabTag";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a Model Lab project.
 */
export class ModelLabProjectAttributes {
  /**
   * The storage location for project artifacts.
   */
  "artifactStorageLocation": string;
  /**
   * The date and time the project was created.
   */
  "createdAt": Date;
  /**
   * The date and time the project was soft-deleted.
   */
  "deletedAt"?: Date;
  /**
   * A description of the project.
   */
  "description": string;
  /**
   * An optional external URL associated with the project.
   */
  "externalUrl"?: string;
  /**
   * Whether the project is starred by the current user.
   */
  "isStarred": boolean;
  /**
   * The name of the project.
   */
  "name": string;
  /**
   * The UUID of the project owner.
   */
  "ownerId"?: string;
  /**
   * The list of tags associated with the project.
   */
  "tags": Array<ModelLabTag>;
  /**
   * The date and time the project was last updated.
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
    artifactStorageLocation: {
      baseName: "artifact_storage_location",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    externalUrl: {
      baseName: "external_url",
      type: "string",
    },
    isStarred: {
      baseName: "is_starred",
      type: "boolean",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    ownerId: {
      baseName: "owner_id",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<ModelLabTag>",
      required: true,
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
    return ModelLabProjectAttributes.attributeTypeMap;
  }

  public constructor() {}
}
