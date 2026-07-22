/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityV3APIVersion } from "./EntityV3APIVersion";
import { EntityV3Integrations } from "./EntityV3Integrations";
import { EntityV3Metadata } from "./EntityV3Metadata";
import { EntityV3RepositoryDatadog } from "./EntityV3RepositoryDatadog";
import { EntityV3RepositoryKind } from "./EntityV3RepositoryKind";
import { EntityV3RepositorySpec } from "./EntityV3RepositorySpec";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Schema for repository entities.
*/
export class EntityV3Repository {
  /**
   * The version of the schema data that was used to populate this entity's data. This could be via the API, Terraform, or YAML file in a repository. The field is known as schema-version in the previous version.
  */
  "apiVersion": EntityV3APIVersion;
  /**
   * Datadog product integrations for the repository entity.
  */
  "datadog"?: EntityV3RepositoryDatadog;
  /**
   * Custom extensions. This is the free-formed field to send client-side metadata. No Datadog features are affected by this field.
  */
  "extensions"?: { [key: string]: any; };
  /**
   * A base schema for defining third-party integrations.
  */
  "integrations"?: EntityV3Integrations;
  /**
   * The definition of Entity V3 Repository Kind object.
  */
  "kind": EntityV3RepositoryKind;
  /**
   * The definition of Entity V3 Metadata object.
  */
  "metadata": EntityV3Metadata;
  /**
   * The definition of Entity V3 Repository Spec object.
  */
  "spec"?: EntityV3RepositorySpec;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "apiVersion": {
      "baseName": "apiVersion",
      "type": "EntityV3APIVersion",
      "required": true,
    },
    "datadog": {
      "baseName": "datadog",
      "type": "EntityV3RepositoryDatadog",
    },
    "extensions": {
      "baseName": "extensions",
      "type": "{ [key: string]: any; }",
    },
    "integrations": {
      "baseName": "integrations",
      "type": "EntityV3Integrations",
    },
    "kind": {
      "baseName": "kind",
      "type": "EntityV3RepositoryKind",
      "required": true,
    },
    "metadata": {
      "baseName": "metadata",
      "type": "EntityV3Metadata",
      "required": true,
    },
    "spec": {
      "baseName": "spec",
      "type": "EntityV3RepositorySpec",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return EntityV3Repository.attributeTypeMap;

  }

  public constructor() {











  }
}









