/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { APIKeyRelationships } from "./APIKeyRelationships";
import { APIKeysType } from "./APIKeysType";
import { FullAPIKeyAttributes } from "./FullAPIKeyAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Datadog API key.
 */
export class FullAPIKey {
  /**
   * Attributes of a full API key.
   */
  "attributes"?: FullAPIKeyAttributes;
  /**
   * ID of the API key.
   */
  "id"?: string;
  /**
   * Resources related to the API key.
   */
  "relationships"?: APIKeyRelationships;
  /**
   * API Keys resource type.
   */
  "type"?: APIKeysType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "FullAPIKeyAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "APIKeyRelationships",
    },
    type: {
      baseName: "type",
      type: "APIKeysType",
    },
  };
}
