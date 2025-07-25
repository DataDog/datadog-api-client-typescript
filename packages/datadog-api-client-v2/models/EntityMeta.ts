/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Entity metadata.
 */
export class EntityMeta {
  /**
   * The creation time.
   */
  "createdAt"?: string;
  /**
   * The ingestion source.
   */
  "ingestionSource"?: string;
  /**
   * The modification time.
   */
  "modifiedAt"?: string;
  /**
   * The origin.
   */
  "origin"?: string;

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
    createdAt: {
      baseName: "createdAt",
      type: "string",
    },
    ingestionSource: {
      baseName: "ingestionSource",
      type: "string",
    },
    modifiedAt: {
      baseName: "modifiedAt",
      type: "string",
    },
    origin: {
      baseName: "origin",
      type: "string",
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
    return EntityMeta.attributeTypeMap;
  }

  public constructor() {}
}
