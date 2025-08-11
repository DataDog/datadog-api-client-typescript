import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityV3APIDatadog } from "./EntityV3APIDatadog";
import { EntityV3APIKind } from "./EntityV3APIKind";
import { EntityV3APISpec } from "./EntityV3APISpec";
import { EntityV3APIVersion } from "./EntityV3APIVersion";
import { EntityV3Integrations } from "./EntityV3Integrations";
import { EntityV3Metadata } from "./EntityV3Metadata";

/**
 * Schema for API entities.
 */
export class EntityV3API {
  /**
   * The version of the schema data that was used to populate this entity's data. This could be via the API, Terraform, or YAML file in a repository. The field is known as schema-version in the previous version.
   */
  "apiVersion": EntityV3APIVersion;
  /**
   * Datadog product integrations for the API entity.
   */
  "datadog"?: EntityV3APIDatadog;
  /**
   * Custom extensions. This is the free-formed field to send client-side metadata. No Datadog features are affected by this field.
   */
  "extensions"?: { [key: string]: any };
  /**
   * A base schema for defining third-party integrations.
   */
  "integrations"?: EntityV3Integrations;
  /**
   * The definition of Entity V3 API Kind object.
   */
  "kind": EntityV3APIKind;
  /**
   * The definition of Entity V3 Metadata object.
   */
  "metadata": EntityV3Metadata;
  /**
   * The definition of Entity V3 API Spec object.
   */
  "spec"?: EntityV3APISpec;
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
      type: "EntityV3APIVersion",
      required: true,
    },
    datadog: {
      baseName: "datadog",
      type: "EntityV3APIDatadog",
    },
    extensions: {
      baseName: "extensions",
      type: "{ [key: string]: any; }",
    },
    integrations: {
      baseName: "integrations",
      type: "EntityV3Integrations",
    },
    kind: {
      baseName: "kind",
      type: "EntityV3APIKind",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "EntityV3Metadata",
      required: true,
    },
    spec: {
      baseName: "spec",
      type: "EntityV3APISpec",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3API.attributeTypeMap;
  }

  public constructor() {}
}
