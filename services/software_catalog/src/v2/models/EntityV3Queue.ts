import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityV3APIVersion } from "./EntityV3APIVersion";
import { EntityV3Integrations } from "./EntityV3Integrations";
import { EntityV3Metadata } from "./EntityV3Metadata";
import { EntityV3QueueDatadog } from "./EntityV3QueueDatadog";
import { EntityV3QueueKind } from "./EntityV3QueueKind";
import { EntityV3QueueSpec } from "./EntityV3QueueSpec";

/**
 * Schema for queue entities.
 */
export class EntityV3Queue {
  /**
   * The schema version of entity type. The field is known as schema-version in the previous version.
   */
  "apiVersion": EntityV3APIVersion;
  /**
   * Datadog product integrations for the datastore entity.
   */
  "datadog"?: EntityV3QueueDatadog;
  /**
   * Custom extensions. This is the free-formed field to send client-side metadata. No Datadog features are affected by this field.
   */
  "extensions"?: { [key: string]: any };
  /**
   * A base schema for defining third-party integrations.
   */
  "integrations"?: EntityV3Integrations;
  /**
   * The definition of Entity V3 Queue Kind object.
   */
  "kind": EntityV3QueueKind;
  /**
   * The definition of Entity V3 Metadata object.
   */
  "metadata": EntityV3Metadata;
  /**
   * The definition of Entity V3 Queue Spec object.
   */
  "spec"?: EntityV3QueueSpec;
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
      type: "EntityV3QueueDatadog",
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
      type: "EntityV3QueueKind",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "EntityV3Metadata",
      required: true,
    },
    spec: {
      baseName: "spec",
      type: "EntityV3QueueSpec",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3Queue.attributeTypeMap;
  }

  public constructor() {}
}
