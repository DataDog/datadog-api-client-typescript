/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Entity response attributes containing core entity metadata fields.
 */
export class EntityResponseDataAttributes {
  /**
   * The API version of the entity schema.
   */
  "apiVersion"?: string;
  /**
   * A short description of the entity.
   */
  "description"?: string;
  /**
   * The user-friendly display name of the entity.
   */
  "displayName"?: string;
  /**
   * The kind of the entity (e.g. service, datastore, queue).
   */
  "kind"?: string;
  /**
   * The unique name of the entity within its kind and namespace.
   */
  "name"?: string;
  /**
   * The namespace the entity belongs to.
   */
  "namespace"?: string;
  /**
   * The owner of the entity, usually a team.
   */
  "owner"?: string;
  /**
   * Additional custom properties for the entity.
   */
  "properties"?: { [key: string]: any };
  /**
   * A set of custom tags assigned to the entity.
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
    apiVersion: {
      baseName: "apiVersion",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    displayName: {
      baseName: "displayName",
      type: "string",
    },
    kind: {
      baseName: "kind",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    namespace: {
      baseName: "namespace",
      type: "string",
    },
    owner: {
      baseName: "owner",
      type: "string",
    },
    properties: {
      baseName: "properties",
      type: "{ [key: string]: any; }",
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
    return EntityResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
