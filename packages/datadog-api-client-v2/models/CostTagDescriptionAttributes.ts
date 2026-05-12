/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostTagDescriptionSource } from "./CostTagDescriptionSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Human-readable description and metadata attached to a Cloud Cost Management tag key, optionally scoped to a single cloud provider.
 */
export class CostTagDescriptionAttributes {
  /**
   * Cloud provider this description applies to (for example, `aws`). Empty when the description is the cross-cloud default for the tag key.
   */
  "cloud": string;
  /**
   * Timestamp when the description was created, in RFC 3339 format.
   */
  "createdAt": string;
  /**
   * The human-readable description for the tag key.
   */
  "description": string;
  /**
   * Origin of the description. `human` indicates the description was written by a user, `ai_generated` was produced by AI, and `datadog` is a default supplied by Datadog.
   */
  "source": CostTagDescriptionSource;
  /**
   * The tag key this description applies to.
   */
  "tagKey": string;
  /**
   * Timestamp when the description was last updated, in RFC 3339 format.
   */
  "updatedAt": string;

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
    cloud: {
      baseName: "cloud",
      type: "string",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    source: {
      baseName: "source",
      type: "CostTagDescriptionSource",
      required: true,
    },
    tagKey: {
      baseName: "tag_key",
      type: "string",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "string",
      required: true,
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
    return CostTagDescriptionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
