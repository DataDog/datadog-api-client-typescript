/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityV3APIVersion } from "./EntityV3APIVersion";
import { EntityV3Integrations } from "./EntityV3Integrations";
import { EntityV3Metadata } from "./EntityV3Metadata";
import { EntityV3ServiceDatadog } from "./EntityV3ServiceDatadog";
import { EntityV3ServiceKind } from "./EntityV3ServiceKind";
import { EntityV3ServiceSpec } from "./EntityV3ServiceSpec";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Schema for service entities.
 */
export class EntityV3Service {
  /**
   * The version of the schema data that was used to populate this entity's data. This could be via the API, Terraform, or YAML file in a repository. The field is known as schema-version in the previous version.
   */
  "apiVersion": EntityV3APIVersion;
  /**
   * Datadog product integrations for the service entity.
   */
  "datadog"?: EntityV3ServiceDatadog;
  /**
   * Custom extensions. This is the free-formed field to send client-side metadata. No Datadog features are affected by this field.
   */
  "extensions"?: { [key: string]: any };
  /**
   * A base schema for defining third-party integrations.
   */
  "integrations"?: EntityV3Integrations;
  /**
   * The definition of Entity V3 Service Kind object.
   */
  "kind": EntityV3ServiceKind;
  /**
   * The definition of Entity V3 Metadata object.
   */
  "metadata": EntityV3Metadata;
  /**
   * The definition of Entity V3 Service Spec object.
   */
  "spec"?: EntityV3ServiceSpec;

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
      type: "EntityV3ServiceDatadog",
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
      type: "EntityV3ServiceKind",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "EntityV3Metadata",
      required: true,
    },
    spec: {
      baseName: "spec",
      type: "EntityV3ServiceSpec",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3Service.attributeTypeMap;
  }

  public constructor() {}
}
