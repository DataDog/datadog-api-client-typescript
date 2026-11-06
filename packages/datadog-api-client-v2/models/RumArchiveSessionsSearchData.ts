/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumArchiveSessionsSearchAttributes } from "./RumArchiveSessionsSearchAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API resource.
 */
export class RumArchiveSessionsSearchData {
  /**
   * Archived-session query. A window wider than configured archive retention is narrowed before searching.
   */
  "attributes": RumArchiveSessionsSearchAttributes;
  /**
   * Optional resource identifier.
   */
  "id"?: string;
  /**
   * JSON:API resource type.
   */
  "type"?: string;

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
    attributes: {
      baseName: "attributes",
      type: "RumArchiveSessionsSearchAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
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
    return RumArchiveSessionsSearchData.attributeTypeMap;
  }

  public constructor() {}
}
