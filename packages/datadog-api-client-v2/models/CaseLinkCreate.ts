/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseLinkAttributes } from "./CaseLinkAttributes";
import { CaseLinkResourceType } from "./CaseLinkResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for creating a case link.
 */
export class CaseLinkCreate {
  /**
   * Attributes describing a directional relationship between two entities (cases, incidents, or pages).
   */
  "attributes": CaseLinkAttributes;
  /**
   * JSON:API resource type for case links.
   */
  "type": CaseLinkResourceType;

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
      type: "CaseLinkAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseLinkResourceType",
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
    return CaseLinkCreate.attributeTypeMap;
  }

  public constructor() {}
}
