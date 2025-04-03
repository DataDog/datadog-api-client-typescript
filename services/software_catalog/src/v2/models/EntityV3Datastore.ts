import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityV3APIVersion } from "./EntityV3APIVersion";
import { EntityV3DatastoreDatadog } from "./EntityV3DatastoreDatadog";
import { EntityV3DatastoreKind } from "./EntityV3DatastoreKind";
import { EntityV3DatastoreSpec } from "./EntityV3DatastoreSpec";
import { EntityV3Integrations } from "./EntityV3Integrations";
import { EntityV3Metadata } from "./EntityV3Metadata";

/**
 * Schema for datastore entities.
 */
export class EntityV3Datastore {
  /**
   * The schema version of entity type. The field is known as schema-version in the previous version.
   */
  "apiVersion": EntityV3APIVersion;
  /**
   * Datadog product integrations for the datastore entity.
   */
  "datadog"?: EntityV3DatastoreDatadog;
  /**
   * Custom extensions. This is the free-formed field to send client side metadata. No Datadog features are affected by this field.
   */
  "extensions"?: any;
  /**
   * A base schema for defining third-party integrations.
   */
  "integrations"?: EntityV3Integrations;
  /**
   * The definition of Entity V3 Datastore Kind object.
   */
  "kind": EntityV3DatastoreKind;
  /**
   * The definition of Entity V3 Metadata object.
   */
  "metadata": EntityV3Metadata;
  /**
   * The definition of Entity V3 Datastore Spec object.
   */
  "spec"?: EntityV3DatastoreSpec;
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
      type: "EntityV3DatastoreDatadog",
    },
    extensions: {
      baseName: "extensions",
      type: "any",
    },
    integrations: {
      baseName: "integrations",
      type: "EntityV3Integrations",
    },
    kind: {
      baseName: "kind",
      type: "EntityV3DatastoreKind",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "EntityV3Metadata",
      required: true,
    },
    spec: {
      baseName: "spec",
      type: "EntityV3DatastoreSpec",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3Datastore.attributeTypeMap;
  }

  public constructor() {}
}
