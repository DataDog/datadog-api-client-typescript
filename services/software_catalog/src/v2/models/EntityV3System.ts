import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityV3APIVersion } from "./EntityV3APIVersion";
import { EntityV3Integrations } from "./EntityV3Integrations";
import { EntityV3Metadata } from "./EntityV3Metadata";
import { EntityV3SystemDatadog } from "./EntityV3SystemDatadog";
import { EntityV3SystemKind } from "./EntityV3SystemKind";
import { EntityV3SystemSpec } from "./EntityV3SystemSpec";

/**
 * Schema for system entities.
 */
export class EntityV3System {
  /**
   * The schema version of entity type. The field is known as schema-version in the previous version.
   */
  "apiVersion": EntityV3APIVersion;
  /**
   * Datadog product integrations for the service entity.
   */
  "datadog"?: EntityV3SystemDatadog;
  /**
   * Custom extensions. This is the free-formed field to send client-side metadata. No Datadog features are affected by this field.
   */
  "extensions"?: { [key: string]: any };
  /**
   * A base schema for defining third-party integrations.
   */
  "integrations"?: EntityV3Integrations;
  /**
   * The definition of Entity V3 System Kind object.
   */
  "kind": EntityV3SystemKind;
  /**
   * The definition of Entity V3 Metadata object.
   */
  "metadata": EntityV3Metadata;
  /**
   * The definition of Entity V3 System Spec object.
   */
  "spec"?: EntityV3SystemSpec;
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
      type: "EntityV3SystemDatadog",
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
      type: "EntityV3SystemKind",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "EntityV3Metadata",
      required: true,
    },
    spec: {
      baseName: "spec",
      type: "EntityV3SystemSpec",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3System.attributeTypeMap;
  }

  public constructor() {}
}
